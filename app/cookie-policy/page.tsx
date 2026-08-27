import type { Metadata } from "next";
import { LegalPage } from "../legal-layout";

export const metadata: Metadata = { title: "Cookie Policy | ReShoot" };

export default function CookiePolicy() {
  return (
    <LegalPage>
      <h1>Cookie Policy</h1>
      <p className="legal-updated">Last updated: August 26, 2026</p>
      <p>
        This policy explains how reshootonline.org uses cookies and similar
        browser storage. Read it with our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-and-conditions">Terms</a>.
      </p>

      <h2>1. What these technologies do</h2>
      <p>
        Cookies are small files stored by your browser. Local storage is a
        similar browser feature. They can keep a service secure, remember your
        preferences, maintain a session, and help us understand performance.
      </p>

      <h2>2. Categories</h2>
      <ul>
        <li><strong>Strictly necessary:</strong> security, session, age confirmation, and consent records.</li>
        <li><strong>Functional:</strong> interface and course preferences you ask us to remember.</li>
        <li><strong>Analytics:</strong> aggregated information used to understand and improve the service.</li>
        <li><strong>Marketing:</strong> measurement or personalization of campaigns, only when configured and lawfully consented to.</li>
      </ul>

      <h2>3. Current first-party storage</h2>
      <p>
        The landing page stores age confirmation and your cookie choice in local
        storage so those prompts do not reappear on every visit. The course
        platform may also use necessary session storage after you sign in.
      </p>

      <h2>4. Optional providers</h2>
      <p>
        ReShoot may use providers such as Google Analytics, Meta Pixel, or
        Hotjar only when configured and permitted by your consent and applicable
        law. The public videos on this landing page are served directly and do
        not require a third-party video player.
      </p>

      <h2>5. Your choices</h2>
      <p>
        You can accept or reject non-essential technologies through the site
        notice and manage storage in your browser. Blocking necessary storage
        may prevent age, consent, sign-in, or course preferences from working correctly.
      </p>

      <h2>6. Retention</h2>
      <p>
        Consent choices remain until you clear them or the policy changes
        materially. If analytics is enabled, identifiable analytics data should
        be retained for no longer than 24 months before aggregation or anonymization.
      </p>

      <h2>7. Contact</h2>
      <p>
        GO PEP, LLC, 131 Continental Dr, Suite 305, Newark, DE 19713, USA.
        Email: <a href="mailto:reshootcommunity@gmail.com">reshootcommunity@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
