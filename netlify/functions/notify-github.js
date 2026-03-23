/**
 * Netlify Function: notify-github
 *
 * Forwards Netlify's "Deploy succeeded" event to GitHub as a
 * repository_dispatch, which triggers the netlify-merge.yml workflow.
 *
 * Netlify env vars required (set in Netlify → Site Settings → Env variables):
 *   GITHUB_MERGE_TOKEN  — GitHub PAT with `repo` + `workflow` scopes
 *   GITHUB_REPO         — e.g. "khellyReys/page-builder"
 *
 * Netlify Deploy Notification setup:
 *   Site Settings → Deploy notifications → Outgoing webhook
 *   Event:  Deploy succeeded
 *   URL:    https://<your-site>.netlify.app/.netlify/functions/notify-github
 */

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const token = process.env.GITHUB_MERGE_TOKEN;
  const repo  = process.env.GITHUB_REPO || 'khellyReys/page-builder';

  if (!token) {
    console.error('GITHUB_MERGE_TOKEN env var is not set');
    return new Response('Server misconfigured', { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  // Netlify sends the deploy branch in the payload
  const branch = body?.branch || body?.head_branch || 'pre-prod';

  console.log(`Netlify deploy succeeded on branch: ${branch}`);
  console.log(`Forwarding repository_dispatch to GitHub repo: ${repo}`);

  const response = await fetch(`https://api.github.com/repos/${repo}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Netlify-Deploy-Hook',
    },
    body: JSON.stringify({
      event_type: 'netlify-deploy-success',
      client_payload: { branch },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`GitHub API error ${response.status}: ${text}`);
    return new Response(`GitHub API error: ${response.status}`, { status: 502 });
  }

  console.log('✅ repository_dispatch sent successfully');
  return new Response(JSON.stringify({ ok: true, branch }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
