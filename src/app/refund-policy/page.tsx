import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Sandton Bakery",
  description:
    "When you can cancel or reschedule a Sandton Bakery order, and how and when refunds are paid.",
};

const sections: LegalSection[] = [
  {
    id: "standard-orders",
    heading: "Cancelling Standard Orders",
    body: (
      <>
        <p>
          You can cancel or reschedule shop orders (cakes, pastries, breads and gift boxes) for a{" "}
          <strong>full refund up to 4 hours before your delivery slot</strong>.
        </p>
        <p>
          Within 4 hours of the slot, your order is usually already being baked or packed, so we
          cannot cancel it. You may still be able to change the delivery address. Just call us.
        </p>
      </>
    ),
  },
  {
    id: "custom-cakes",
    heading: "Cancelling Custom Cakes",
    body: (
      <ul>
        <li>
          <strong>More than 24 hours before baking:</strong> free cancellation with a full refund.
        </li>
        <li>
          <strong>Less than 24 hours before baking:</strong> 50% refund, because ingredients and
          decorations have already been prepared.
        </li>
        <li>
          <strong>Once baking has started:</strong> no refund.
        </li>
      </ul>
    ),
  },
  {
    id: "rescheduling",
    heading: "Rescheduling",
    body: (
      <p>
        You can move your delivery to another date or slot free of charge, as long as you ask
        before the cancellation window closes. Slots depend on availability.
      </p>
    ),
  },
  {
    id: "quality-issues",
    heading: "Damaged, Wrong or Missing Items",
    body: (
      <>
        <p>If something isn&apos;t right with your order, tell us within 2 hours of delivery and:</p>
        <ul>
          <li>Share clear photos of the product and its packaging.</li>
          <li>Include your order number.</li>
        </ul>
        <p>
          After checking, we will offer a free replacement, store credit or a full refund for the
          affected items.
        </p>
      </>
    ),
  },
  {
    id: "non-refundable",
    heading: "Non-Refundable Cases",
    body: (
      <ul>
        <li>Orders that could not be delivered because of a wrong address or no one available.</li>
        <li>Personal taste preferences, once the product matches its description.</li>
        <li>Products damaged after delivery because of improper storage.</li>
        <li>Complaints raised more than 2 hours after delivery.</li>
      </ul>
    ),
  },
  {
    id: "refund-timeline",
    heading: "How Refunds Are Paid",
    body: (
      <>
        <p>Approved refunds go back to your original payment method:</p>
        <ul>
          <li>
            <strong>UPI &amp; wallets:</strong> 1 to 3 business days
          </li>
          <li>
            <strong>Credit &amp; debit cards:</strong> 5 to 7 business days
          </li>
          <li>
            <strong>Net banking:</strong> 5 to 7 business days
          </li>
        </ul>
        <p>Store credit is added to your account instantly.</p>
      </>
    ),
  },
  {
    id: "how-to-cancel",
    heading: "How to Cancel",
    body: (
      <p>
        Call us on +91 98450 50418 or email support@sandtonbakery.com with your order number. You
        can check your order status on the{" "}
        <Link href="/track-order" className="text-[#8B1E2D] font-semibold underline">
          Track Order
        </Link>{" "}
        page.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Fair & Simple"
      title="Cancellation & Refund Policy"
      intro="Plans change, and we understand. Here's how cancellations, rescheduling and refunds work."
      lastUpdated="17 November 2026"
      sections={sections}
    />
  );
}
