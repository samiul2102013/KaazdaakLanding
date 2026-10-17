import Image from "next/image";
import { OCEANEDGE_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="brand" href="#hero" aria-label="KaazDaak home">
            <span className="brand__logo brand__logo--kd">
              <Image
                src="/images/kaazdaak-logo.jpeg"
                alt=""
                width={44}
                height={44}
                loading="lazy"
              />
            </span>
            <span className="brand__text">
              <span className="brand__name">
                KaazDaak <span>কাজডাক</span>
              </span>
              <span className="brand__sub">Post a task · Hire nearby</span>
            </span>
          </a>
          <p className="footer__tagline">
            আপনার কাজ, আমাদের দায়িত্ব। বিশ্বস্ত সেবা, দক্ষ মানুষ, এক প্ল্যাটফর্মে।
          </p>
        </div>

        <nav className="footer__col" aria-label="Site">
          <h2 className="footer__heading">Site</h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">Product</a></li>
            <li><a href="#building-now">Current focus</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/return-refund-policy">Return &amp; Refund Policy</a></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">OceanEdge</h2>
          <ul>
            <li>
              <a href={`${OCEANEDGE_URL}/#about`}>About the team</a>
            </li>
            <li>
              <a href={`${OCEANEDGE_URL}/#approach`}>How we build</a>
            </li>
            <li>
              <a href={`${OCEANEDGE_URL}/#contact`}>Get in touch</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Contact</h2>
          <ul className="footer__social">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M4 6l8 6 8-6" />
              </svg>
              <a href="mailto:ocean.tech.edge@gmail.com">ocean.tech.edge@gmail.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 8h2.5V5H14a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13V9a1 1 0 0 1-1-1z" />
              </svg>
              <a href="https://www.facebook.com/profile.php?id=61591390454825" target="_blank" rel="noopener">Facebook</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3L8 21" />
                <path d="M16 3l-2 18" />
                <path d="M4 9h17" />
                <path d="M3 15h17" />
              </svg>
              <span>#KaazDaak</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 KaazDaak. All rights reserved.</span>
        <span>
          Built by{" "}
          <a href={OCEANEDGE_URL} className="footer__inline-link">
            OceanEdge Technologies
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
