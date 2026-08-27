import type { Metadata } from "next";
import { LegalPage } from "../legal-layout";

export const metadata: Metadata = { title: "Terms & Conditions | ReShoot" };

export default function TermsAndConditions() {
  return (
    <LegalPage>
      <h1>Terms &amp; Conditions</h1>
      <p className="legal-updated">Last updated: August 26, 2026</p>
      <p>
        These terms govern access to reshootonline.org and the ReShoot.Start
        digital course. By enrolling, creating an account, or using the service,
        you agree to these terms.
      </p>

      <h2>1. Adults and lawful eligibility</h2>
      <ul>
        <li>You must be at least 18 and of legal age in your jurisdiction.</li>
        <li>You are responsible for every license, permit, supervision, and facility required by local law.</li>
        <li>You may not share course access with minors or unauthorized users.</li>
      </ul>

      <h2>2. Educational purpose only</h2>
      <p>
        ReShoot.Start provides general, safety-focused educational information.
        It is not a firearm license, professional certification, legal advice, or
        a substitute for lawful in-person instruction and supervision. No
        firearms, ammunition, regulated parts, or physical products are sold or shipped.
      </p>

      <h2>3. Responsible use</h2>
      <p>
        Use the service only for lawful purposes. Never perform an exercise with
        a live firearm unless it is legal, the environment is properly prepared,
        and appropriate qualified supervision and safety equipment are present.
        You remain responsible for your actions and local legal compliance.
      </p>

      <h2>4. Course access and intellectual property</h2>
      <p>
        Access begins after full payment confirmation and continues for the
        period stated in your package: six months for Basic or twelve months for
        Premium. Course videos, text, graphics, exercises, and tests are owned by
        or licensed to ReShoot. You may not copy, scrape, resell, distribute,
        publicly perform, or create derivative materials without written permission.
      </p>

      <h2>5. Payment and refunds</h2>
      <p>
        Payments are charged in full through Stripe or another disclosed method.
        EU users may request a refund within 14 days of purchase and US users
        within 7 days, provided no more than 10% of the course has been completed.
        Approved refunds return to the original method, usually within 5–10
        business days. After the applicable window, sales are final except where law requires otherwise.
      </p>
      <p>
        Request a refund at <a href="mailto:reshootcommunity@gmail.com">reshootcommunity@gmail.com</a> with the account email and purchase date.
      </p>

      <h2>6. Accounts and prohibited conduct</h2>
      <ul>
        <li>Keep credentials secure and do not transfer or share your account.</li>
        <li>Do not bypass access controls, disrupt the service, or use automated tools to copy materials.</li>
        <li>Do not use course information to encourage unlawful violence, illegal modification, or illegal activity.</li>
      </ul>

      <h2>7. Disclaimers and limitation of liability</h2>
      <p>
        We do not guarantee expertise, certification, or a particular performance
        outcome. To the maximum extent allowed by law, ReShoot, GO PEP, LLC,
        instructors, and partners are not liable for indirect, incidental, or
        consequential losses or for injuries arising from misuse, unlawful
        conduct, or failure to follow required safety rules and supervision.
      </p>

      <h2>8. Suspension and indemnity</h2>
      <p>
        We may suspend access for material violations, security threats, or
        unlawful use. You agree to indemnify the service parties against claims
        caused by your unlawful use, breach of these terms, or violation of third-party rights.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of Serbia, without limiting
        non-waivable consumer rights. Disputes that cannot be resolved informally
        will be submitted to binding arbitration in Belgrade, Serbia, under the
        applicable rules of the International Chamber of Commerce, unless local law requires otherwise.
      </p>

      <h2>10. Operator and contact</h2>
      <p>
        This website is operated by GO PEP, LLC, 131 Continental Dr, Suite 305,
        Newark, DE 19713, USA. Services are delivered online. Email: <a href="mailto:reshootcommunity@gmail.com">reshootcommunity@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
