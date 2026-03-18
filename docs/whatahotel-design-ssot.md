# Migrating WhataHotel! Proposals from Netlify Direct Upload to GitHub

> One-time setup · ~15 minutes · No coding required  
> After this, the Netlify AI agent can create and update pages automatically.

---

## What You'll Need

- Your current site files (the HTML folder you've been uploading to Netlify)
- A free GitHub account → https://github.com
- Your Netlify login

---

## Part 1 — Set Up GitHub (5 min)

### Step 1 — Create a GitHub Account
If you don't have one yet:
1. Go to **https://github.com**
2. Click **"Sign up"**
3. Use any email, create a username and password
4. Verify your email

---

### Step 2 — Create a New Repository
1. Once logged in, click the **"+"** icon (top right) → **"New repository"**
2. Fill in:
   - **Repository name:** `whatahotel-proposals`
   - **Visibility:** `Private` (so proposal contents stay confidential)
   - ✅ Check **"Add a README file"**
3. Click **"Create repository"**

You now have an empty private repo.

---

### Step 3 — Upload Your Existing Files to GitHub

1. Inside your new repo, click **"Add file"** → **"Upload files"**
2. Drag and drop your entire site folder contents:
   ```
   index.html                 ← Main portal page
   sentz-naples/
     index.html
   maui-getaway/
     index.html
   [any other proposal folders]
   ```
3. At the bottom under **"Commit changes"**, type:
   `Initial upload — existing proposal pages`
4. Click **"Commit changes"**

All your files are now in GitHub.

---

### Step 4 — Add the SSOT File

1. In your repo, click **"Add file"** → **"Create new file"**
2. In the filename box type: `docs/whatahotel-design-ssot.md`
   - Typing the `/` automatically creates the `docs/` folder
3. Paste the full contents of your SSOT document into the editor
4. Commit with message: `Add WhataHotel design SSOT`

Your repo should now look like:
```
whatahotel-proposals/
  docs/
    whatahotel-design-ssot.md
  index.html
  sentz-naples/
    index.html
  maui-getaway/
    index.html
  README.md
```

---

## Part 2 — Connect GitHub to Netlify (5 min)

### Step 5 — Add a netlify.toml File (Important)

Before connecting, add this config file so Netlify knows how to serve your site correctly.

1. In your repo, click **"Add file"** → **"Create new file"**
2. Name it exactly: `netlify.toml`
3. Paste this content:
   ```toml
   [build]
     publish = "."

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
     force = false
   ```
4. Commit with message: `Add Netlify config`

---

### Step 6 — Connect Netlify to Your GitHub Repo

1. Log in to **https://app.netlify.com**
2. Go to your existing site
3. Go to **Site configuration** → **Build & deploy** → **Continuous deployment**
4. Click **"Link repository"** (or **"Connect to Git"**)
5. Choose **GitHub**
6. Click **"Authorize Netlify"** when prompted
7. Search for and select **`whatahotel-proposals`**
8. In the build settings:
   - **Branch to deploy:** `main`
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
9. Click **"Deploy site"**

Netlify will deploy from your repo. Your existing site URL stays exactly the same — nothing breaks for your clients.

---

### Step 7 — Update the Netlify Project Context

Now that your SSOT is in the repo, update the Project Context field to point to it:

1. Go to **Netlify → your site → Project configuration → Agent runs**
2. In the **Project context** field, paste this (fits within 3,000 characters):

```
You are building and maintaining the WhataHotel! by Lorraine Travel proposal site.

Always read and strictly follow ALL rules in /docs/whatahotel-design-ssot.md before making any changes or creating any new pages. This is the Single Source of Truth — never deviate from it.

Key rules summary:
- Never change colors, fonts, spacing, or layout
- Every room gets its own unique booking button and URL — never reuse URLs
- Show max 3 rooms per hotel; add a "View All" text link if more exist
- Never leave an img src blank — use https://www.whatahotel.com/img/paceholder.jpg
- Every page needs the full Open Graph meta tag block in <head>
- Always include the Vibss chat widget (ID: 743b3c49-9ec6-4539-beec-b9e1cbe0c730)
- Always include the app download section with both Android and iOS store links
- New proposal pages go in their own folder: /client-destination/index.html
```

3. Click **Save**

---

## Part 3 — How to Work Going Forward

### Creating a New Proposal Page

Tell the Netlify AI agent:

```
Create a new proposal page following /docs/whatahotel-design-ssot.md.

Client: [Name]
Destination: [City, Country]
Hotel(s): [Hotel name(s)]
Dates: [Check-in] – [Check-out], [X] nights
Rooms: [Room name, price/night, total, booking URL — max 3 per hotel]
Hero image: [URL]
Page folder: /[client-destination]/
Deployed URL: https://whatahotelpromo.netlify.app/[client-destination]
```

**What happens automatically:**
1. Agent creates the folder and `index.html` in your GitHub repo
2. GitHub notifies Netlify
3. Netlify deploys in ~30 seconds
4. Page is live at your URL

---

### Editing an Existing Page

```
Edit /sentz-naples/index.html — update the total price to $25,500.00
```

Agent commits → GitHub updates → Netlify auto-deploys. Done.

---

### Adding a New Card to the Portal (Index Page)

After a new proposal is created, tell the agent:

```
Add a new card to /index.html for:
- Client: [Name]
- Hotel: [Hotel name]
- Location: [City, State]
- Dates: [X nights]
- Total: $[amount]
- Link: /[folder-name]
- Thumb image: [URL]
```

---

### Editing the SSOT

1. Go to **github.com → whatahotel-proposals → docs/whatahotel-design-ssot.md**
2. Click the **pencil icon** (Edit this file)
3. Make your changes
4. Click **"Commit changes"**

The agent reads the updated version on its next run. No redeployment needed.

---

## Part 4 — Good to Know

### Your Repo is the Master Copy
Everything lives in GitHub. Netlify just reads and publishes it. Your files are always safe and portable.

### Every Change Has a Full History
If the AI agent makes a bad change:
1. Go to your repo → click **"Commits"**
2. Find the last good version
3. Click **"..."** → **"Revert"**

Site is restored in under a minute.

### Folder Name = Page URL
```
/sentz-naples/index.html    →   https://whatahotelpromo.netlify.app/sentz-naples
/garcia-tokyo/index.html    →   https://whatahotelpromo.netlify.app/garcia-tokyo
```

Always tell the agent the folder name when requesting a new page.

### The `/docs/` Folder is Private to the Agent
The `whatahotel-design-ssot.md` file lives in your repo but is never served as a public page. Clients visiting your site cannot access it — only the Netlify AI agent reads it.

---

## One-Time Setup Checklist

- [ ] Create GitHub account at github.com
- [ ] Create `whatahotel-proposals` private repo
- [ ] Upload all existing HTML files and folders to repo
- [ ] Create `docs/whatahotel-design-ssot.md` and paste SSOT content
- [ ] Create `netlify.toml` with the config above
- [ ] Connect Netlify to GitHub repo via "Link repository"
- [ ] Verify site still loads correctly at your Netlify URL
- [ ] Update Netlify Project Context field with the summary above
- [ ] Test by asking the agent to make a small edit to confirm it works

## Every New Proposal Page Checklist

- [ ] Provide hotel, room, pricing, and image data to agent
- [ ] Provide the folder name and full deployed URL (needed for og:url)
- [ ] Confirm page is live after deploy (~30 seconds)
- [ ] Test OG preview at https://www.opengraph.xyz
- [ ] Ask agent to add the card to /index.html portal

---

*Guide prepared for WhataHotel! / Lorraine Travel · March 2026*