import Image from "next/image";
import Link from "next/link";

export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export default function PolicyShell({
  title,
  subtitle,
  updated,
  intro,
  sections,
  children,
}: {
  title: string;
  subtitle: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <header className="site-header policy-header">
        <div className="container header__inner">
          <Link className="brand" href="/" aria-label="KaazDaak home">
            <span className="brand__logo brand__logo--kd">
              <Image
                src="/images/kaazdaak-logo.jpeg"
                alt=""
                width={44}
                height={44}
                priority
              />
            </span>
            <span className="brand__text">
              <span className="brand__name">
                KaazDaak <span>কাজডাক</span>
              </span>
              <span className="brand__sub">Post a task · Hire nearby</span>
            </span>
          </Link>
          <Link className="policy-back" href="/">
            ← Back to home
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="policy-hero">
          <div className="container">
            <h1 className="policy-title">{title}</h1>
            <p className="policy-subtitle">{subtitle}</p>
            <p className="policy-updated">Last updated: {updated}</p>
          </div>
        </section>

        <section className="policy-body">
          <div className="container">
            <p className="policy-intro">{intro}</p>
            {sections.map((section) => (
              <article className="policy-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 32)}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
            {children}
          </div>
        </section>
      </main>

      <footer className="policy-footer">
        <div className="container">
          <span>© 2026 KaazDaak. All rights reserved.</span>
          <span>
            Built by{" "}
            <a
              href="https://oceanedgetech.com"
              className="footer__inline-link"
              target="_blank"
              rel="noopener"
            >
              OceanEdge Technologies
            </a>
            .
          </span>
        </div>
      </footer>
    </>
  );
}
