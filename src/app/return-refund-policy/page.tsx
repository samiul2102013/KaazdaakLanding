import type { Metadata } from "next";
import PolicyShell from "@/components/PolicyShell";

export const metadata: Metadata = {
  title: "Return & Refund Policy – KaazDaak",
  description:
    "KaazDaak's rules for cancellations, returns, and refunds between hirers and kaazbirs.",
};

export default function ReturnRefundPolicyPage() {
  return (
    <PolicyShell
      title="Return & Refund Policy"
      subtitle="Fair rules for cancellations, quality issues, and refunds"
      updated="October 18, 2026"
      intro="KaazDaak is a marketplace that connects hirers with service professionals (kaazbirs). This policy explains when a payment is released, when a refund applies, and how disputes are resolved. Cases may involve services (physical or virtual work) or products purchased through the platform."
      sections={[
        {
          heading: "Payments and escrow",
          paragraphs: [
            "When a hirer funds a task, the amount is held safely in escrow. It is released to the kaazbir only after the hirer confirms the work is complete — or automatically when the confirmation window ends."
          ],
        },
        {
          heading: "Cancellations by the hirer",
          bullets: [
            "Before the kaazbir starts travel or work: full refund.",
            "After work has started, but before completion: refund minus a fair compensation for the time and effort already spent, decided per KaazDaak's dispute review.",
            "After the work is completed: no refund unless a quality issue is reported within the review window.",
          ],
        },
        {
          heading: "Cancellations by the kaazbir",
          bullets: [
            "If a kaazbir cancels or does not show up without a valid reason, the hirer receives a full refund and may be offered a replacement kaazbir.",
            "Repeated no-shows affect the kaazbir's rating and account standing.",
          ],
        },
        {
          heading: "Return conditions for products",
          bullets: [
            "Products delivered through a KaazDaak task can be returned within 7 days of delivery if they are unused, in original packaging, and with the receipt.",
            "Damaged, defective, or wrong items may be returned regardless of condition within the same window.",
            "Perishable goods, custom orders, and hygiene-sensitive items are not returnable unless defective or wrong.",
            "Return shipping is paid by the seller unless the item was damaged, defective, or incorrect.",
          ],
        },
        {
          heading: "Refund processing",
          bullets: [
            "Approved refunds are issued to the original payment method within 5–10 working days.",
            "Escrow refunds for unstarted work are usually processed faster — within 48 hours.",
            "You will receive an SMS/email confirmation when a refund is initiated.",
          ],
        },
        {
          heading: "Dispute resolution",
          paragraphs: [
            "If a hirer and kaazbir cannot agree, either party can open a dispute within 72 hours of task completion. KaazDaak reviews the task history, photos, chat records, and any evidence provided, then makes a final decision on how the escrow amount is split.",
          ],
        },
        {
          heading: "What is not covered",
          bullets: [
            "Change-of-mind after a service has been fully delivered.",
            "Work completed outside the KaazDaak platform.",
            "Claims reported more than 72 hours after task completion without proof.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "For refund or dispute questions, email ocean.tech.edge@gmail.com with your task ID. We reply within 2 working days.",
          ],
        },
      ]}
    />
  );
}
