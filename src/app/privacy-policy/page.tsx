import type { Metadata } from "next";
import PolicyShell from "@/components/PolicyShell";

export const metadata: Metadata = {
  title: "Privacy Policy – KaazDaak",
  description:
    "How KaazDaak collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyShell
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      updated="October 18, 2026"
      intro="KaazDaak — a local work marketplace for Bangladesh built by OceanEdge Technologies — respects your privacy. This policy explains what information we collect, why we collect it, and the choices you have. By using KaazDaak you agree to the practices described here."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect only what we need to run the marketplace and keep it safe for everyone.",
          ],
          bullets: [
            "Account information: your name, phone number, and (optionally) email address.",
            "Identity verification (KYC): documents you choose to submit so hirers can trust the kaazbir they hire.",
            "Task information: the details you post about a job, including addresses, schedules, and budgets.",
            "Communications: messages and offers exchanged inside the platform.",
            "Technical data: device type, app version, and logs that help us diagnose problems and prevent abuse.",
          ],
        },
        {
          heading: "How we use your information",
          bullets: [
            "Creating and managing your account, and verifying your identity when required.",
            "Connecting hirers with nearby, qualified kaazbirs for posted tasks.",
            "Processing payments, escrow, and refunds safely.",
            "Responding to support requests and resolving disputes between users.",
            "Keeping the platform safe: fraud detection, abuse prevention, and enforcing our rules.",
          ],
        },
        {
          heading: "What we share",
          paragraphs: [
            "We do not sell your personal information. We share it only when the job requires it:",
          ],
          bullets: [
            "Your name, basic profile information, and ratings are shown to the other party of a task.",
            "Contact details and exact addresses are shared between a hirer and an assigned kaazbir only.",
            "Service providers who help us operate (for example, SMS or payment partners) under strict confidentiality.",
            "Authorities, where we are legally required to disclose information.",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "We keep your account information for as long as you use KaazDaak. When you delete your account, we remove or anonymize your personal data within 90 days, except for records we must retain for accounting, tax, or legal reasons.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We protect your data with restricted access, encrypted transport (HTTPS), and hashed verification codes. No method of storage or transmission is perfectly secure, but we work continuously to keep your information safe.",
          ],
        },
        {
          heading: "Your rights",
          bullets: [
            "Access and correct the personal information associated with your account.",
            "Request deletion of your account and personal data.",
            "Withdraw consent for optional notifications at any time.",
            "Write to us with any privacy question — we respond within 7 working days.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "For questions about this policy, email ocean.tech.edge@gmail.com or write to OceanEdge Technologies, Dhaka, Bangladesh.",
          ],
        },
      ]}
    />
  );
}
