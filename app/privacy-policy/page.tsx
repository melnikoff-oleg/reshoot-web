import type { Metadata } from "next";
import { LegalPage } from "../legal-layout";

export const metadata: Metadata = { title: "Privacy Policy | ReShoot" };

export default function PrivacyPolicy() {
  return (
    <LegalPage>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: August 26, 2026</p>
      <p>
        This policy explains how ReShoot handles personal information on
        reshootonline.org and within the ReShoot.Start digital course. The
        service is intended for adults aged 18 or older.
      </p>

      <h2>1. Information we collect</h2>
      <p>Depending on how you use the service, we may process:</p>
      <ul>
        <li>Your name, email address, account details, and support messages.</li>
        <li>Course activity such as lesson progress, exercises, and test results.</li>
        <li>Technical data such as IP address, device, browser, pages viewed, and timestamps.</li>
        <li>Consent and preference records stored by your browser.</li>
        <li>Eligibility information only where applicable law requires it.</li>
      </ul>
      <p>
        Payment card information is processed by Stripe or another disclosed
        payment provider. ReShoot does not store complete card numbers.
      </p>

      <h2>2. How we use information</h2>
      <ul>
        <li>Deliver course access and maintain your progress.</li>
        <li>Process payments, refunds, and account support.</li>
        <li>Secure, troubleshoot, and improve the service.</li>
        <li>Send course-related messages and, with consent, marketing updates.</li>
        <li>Comply with tax, legal, safety, and recordkeeping obligations.</li>
      </ul>

      <h2>3. Legal bases</h2>
      <p>
        We rely on performance of a contract, your consent, legitimate
        interests in operating a secure service, and compliance with legal
        obligations. You may withdraw consent for optional processing at any time.
      </p>

      <h2>4. Service providers and transfers</h2>
      <p>
        We share only what is necessary with providers supporting payments,
        course hosting, video delivery, support, security, and consent-based
        analytics. Providers may process data outside your country using
        appropriate contractual and legal safeguards. We do not sell personal information.
      </p>

      <h2>5. Cookies and local storage</h2>
      <p>
        Essential storage remembers age confirmation, cookie preferences, and
        course sessions. Optional analytics or marketing tools should load only
        after the required consent. See our <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>6. Retention and security</h2>
      <p>
        Account information may be retained for up to five years after the last
        interaction, payment records for the period required by tax law, and
        analytics for up to 24 months before aggregation or anonymization. We
        use access controls, encryption in transit, and regular security updates,
        but no internet service can guarantee absolute security.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Subject to local law, you may request access, correction, deletion,
        restriction, portability, or objection; withdraw consent; or complain to
        a supervisory authority. California residents may request disclosure and
        deletion. We do not sell personal information.
      </p>

      <h2>8. Minors and safety</h2>
      <p>
        We do not knowingly collect personal information from anyone under 18.
        If we learn that we have done so, we will take reasonable steps to delete it.
      </p>

      <h2>9. Contact</h2>
      <p>
        Reshoot is a brand operated by GO PEP, LLC, 131 Continental Dr, Suite
        305, Newark, DE 19713, USA. Email: <a href="mailto:reshootcommunity@gmail.com">reshootcommunity@gmail.com</a>.
        We aim to respond to privacy requests within 30 days or sooner when required.
      </p>
    </LegalPage>
  );
}
