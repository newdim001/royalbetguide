import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Royal Bet Guide privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
      <p className="text-slate-500 mb-8">Last updated: May 2026</p>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Information We Collect</h2>
        <p className="mt-3 text-slate-500">We collect information you provide directly, such as when you contact us. We also collect certain information automatically, including your IP address, browser type, and pages visited.</p>
      </div>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">How We Use Your Information</h2>
        <p className="mt-3 text-slate-500">We use the information to improve our website, respond to inquiries, and provide relevant content. We do not sell personal information to third parties.</p>
      </div>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Cookies</h2>
        <p className="mt-3 text-slate-500">We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>
      </div>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p className="mt-3 text-slate-500">If you have questions about this policy, please <Link href="/contact/" className="text-corg-500 hover:text-corg-500">contact us</Link>.</p>
      </div>
    </div>
  );
}
