import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Sandton Bakery",
  description:
    "How Sandton Bakery collects, uses and protects your personal information when you browse, order and pay.",
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: (
      <>
        <p>We collect only what we need to bake, deliver and support your orders:</p>
        <ul>
          <li>
            <strong>Account details</strong> – your name, email address, phone number and
            password (stored encrypted) when you register.
          </li>
          <li>
            <strong>Order details</strong> – delivery addresses, delivery slots, cake messages,
            custom design references and order history.
          </li>
          <li>
            <strong>Payment information</strong> – processed securely by our payment partners. We
            never store your full card number, CVV or UPI PIN.
          </li>
          <li>
            <strong>Usage data</strong> – pages visited, device and browser type, and cart or
            wishlist activity, to keep the site working and improve it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    body: (
      <ul>
        <li>To process, bake and deliver your orders and send order and tracking updates.</li>
        <li>To manage your account, saved addresses and wishlist.</li>
        <li>To answer your questions and resolve complaints.</li>
        <li>
          To send offers and newsletters, only if you have opted in. You can unsubscribe at any
          time.
        </li>
        <li>To prevent fraud and meet our legal and tax obligations.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    heading: "Sharing Your Information",
    body: (
      <>
        <p>We do not sell your personal data. We share it only with:</p>
        <ul>
          <li>Delivery partners, who receive your name, address and phone number for delivery.</li>
          <li>Payment gateways and banks, to complete your transaction.</li>
          <li>Service providers who host our website and send our emails, under confidentiality.</li>
          <li>Authorities, when required by law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies",
    body: (
      <p>
        We use cookies and local storage to keep you signed in, remember your cart and wishlist,
        and understand how the site is used. You can block cookies in your browser settings, but
        parts of the site, such as the cart and checkout, may stop working.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Data Security",
    body: (
      <p>
        All transactions are protected by 256-bit SSL encryption. Access to customer data is
        limited to staff who need it to fulfil your order. No method of transmission over the
        internet is 100% secure, but we take reasonable steps to protect your information.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "Data Retention",
    body: (
      <p>
        We keep account and order records for as long as your account is active and as required
        for accounting and tax purposes. You can ask us to delete your account at any time.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your Rights",
    body: (
      <>
        <p>You can, at any time:</p>
        <ul>
          <li>View and update your details from the My Account page.</li>
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Ask us to correct or delete your data.</li>
          <li>Withdraw consent to marketing messages.</li>
        </ul>
        <p>To make a request, email us at support@sandtonbakery.com.</p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
        top of this page shows when it last changed. Significant changes will be announced on our
        website or by email.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your Privacy Matters"
      title="Privacy Policy"
      intro="We respect your privacy. This policy explains what information we collect, why we collect it and how we keep it safe."
      lastUpdated="17 November 2026"
      sections={sections}
    />
  );
}
