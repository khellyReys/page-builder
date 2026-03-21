import type { ExperienceMoreBlock } from "../types";

type Props = {
  block: ExperienceMoreBlock;
};

export function ExperienceMore({ block }: Props) {
  return (
    <section className="experience-more" aria-labelledby="experience-more-h">
      <h3 id="experience-more-h" className="experience-more-title">
        {block.title}
      </h3>
      {block.subtitle ? (
        <p className="experience-more-sub">{block.subtitle}</p>
      ) : null}
      {block.leadAmount ? (
        <div className="experience-more-amount">{block.leadAmount}</div>
      ) : null}
      {block.descriptionHtml ? (
        <div
          className="experience-more-body"
          dangerouslySetInnerHTML={{ __html: block.descriptionHtml }}
        />
      ) : null}
      {block.validityLine ? (
        <p className="experience-more-validity">
          <strong>{block.validityLine}</strong>
        </p>
      ) : null}
      {block.stackNoteHtml ? (
        <div
          className="experience-more-stack"
          dangerouslySetInnerHTML={{ __html: block.stackNoteHtml }}
        />
      ) : null}
      {block.alsoIncludesTitle || block.alsoIncludes?.length ? (
        <div className="experience-more-list-block">
          {block.alsoIncludesTitle ? (
            <div className="experience-more-list-title">
              {block.alsoIncludesTitle}
            </div>
          ) : null}
          {block.alsoIncludes?.length ? (
            <ul className="experience-more-ul">
              {block.alsoIncludes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      {block.applicableTitle || block.applicable?.length ? (
        <div className="experience-more-list-block">
          {block.applicableTitle ? (
            <div className="experience-more-list-title">
              {block.applicableTitle}
            </div>
          ) : null}
          {block.applicable?.length ? (
            <ul className="experience-more-ul">
              {block.applicable.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
      {block.termsHtml ? (
        <div className="experience-more-terms">
          <strong>Terms:</strong>{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: block.termsHtml,
            }}
          />
        </div>
      ) : null}
    </section>
  );
}
