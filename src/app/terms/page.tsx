import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sandton Bakery",
  description:
    "The terms that apply when you use the Sandton Bakery website and place orders for cakes, pastries and breads.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    body: (
      <p>
        By using the Sandton Bakery website or placing an order, you agree to these Terms &amp;
        Conditions and to our{" "}
        <Link href="/privacy-policy" className="text-[#8B1E2D] font-semibold underline">
          Privacy Policy
        </Link>
        . If you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    id: "accounts",
    heading: "Your Account",
    body: (
      <ul>
        <li>You must give accurate name, phone and address details so we can deliver.</li>
        <li>You are responsible for keeping your password confidential.</li>
        <li>We may suspend accounts used for fraud or misuse.</li>
      </ul>
    ),
  },
  {
    id: "orders",
    heading: "Orders & Pricing",
    body: (
      <ul>
        <li>All prices are in South African Rand (ZAR / R) and include applicable taxes unless stated.</li>
        <li>
          An order is confirmed only after payment succeeds and you receive a confirmation
          message.
        </li>
        <li>
          We may cancel and fully refund an order if an item is unavailable or a price was listed
          incorrectly.
        </li>
        <li>Product photos are for illustration; small differences in decoration may occur.</li>
      </ul>
    ),
  },
  {
    id: "custom-cakes",
    heading: "Custom Cakes",
    body: (
      <ul>
        <li>
          Single-tier custom cakes need at least 24 hours&apos; notice; multi-tier cakes need 3 to
          5 days.
        </li>
        <li>
          We try to match your reference design closely, but handcrafted cakes may vary slightly
          in colour and finish.
        </li>
        <li>
          You must not submit designs that infringe someone else&apos;s trademark or copyright, or
          that are offensive.
        </li>
      </ul>
    ),
  },
  {
    id: "delivery",
    heading: "Delivery",
    body: (
      <ul>
        <li>We deliver within 2 to 4 hours across our service areas, in the slot you choose.</li>
        <li>
          Please make sure someone is available to receive the order. If no one is available, we
          will try to contact you; a re-delivery fee may apply.
        </li>
        <li>
          Delays caused by weather, traffic or other events outside our control are not treated as
          a breach of these terms.
        </li>
      </ul>
    ),
  },
  {
    id: "allergens",
    heading: "Allergens & Food Safety",
    body: (
      <p>
        Our kitchen handles wheat, dairy, eggs and tree nuts. Even items marked eggless may contain
        traces of these allergens. Please read the product details and contact us before ordering
        if you have an allergy. Perishable items should be refrigerated and eaten within the times
        given on the product page.
      </p>
    ),
  },
  {
    id: "cancellations",
    heading: "Cancellations & Refunds",
    body: (
      <p>
        Cancellations, rescheduling and refunds are governed by our{" "}
        <Link href="/refund-policy" className="text-[#8B1E2D] font-semibold underline">
          Cancellation &amp; Refund Policy
        </Link>
        .
      </p>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: (
      <p>
        All content on this site, including logos, photos, recipes and text, belongs to Sandton
        Bakery and may not be copied or reused without our written permission.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    body: (
      <p>
        To the extent permitted by law, our total liability for any order is limited to the amount
        you paid for that order.
      </p>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: (
      <p>
        These terms are governed by the laws of India. Any disputes are subject to the exclusive
        jurisdiction of the courts in Bengaluru, Karnataka.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The Fine Print"
      title="Terms & Conditions"
      intro="Please read these terms carefully. They explain how ordering, delivery and using our website work."
      lastUpdated="17 November 2026"
      sections={sections}
    />
  );
}
