import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Royal Bet Guide terms and conditions. Please read these terms carefully before using our website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
      <p className="text-slate-500 mb-8">Last updated: May 2026</p>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Acceptance of Terms</h2>
        <p className="mt-3 text-slate-500">By accessing Royal Bet Guide, you agree to these terms. If you do not agree, please do not use our website.</p>
      </div>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Affiliate Disclosure</h2>
        <p className="mt-3 text-slate-500">Royal Bet Guide participates in affiliate marketing programs. We may earn commissions when you click links and sign up at partner casinos. This does not affect our reviews or ratings.</p>
      </div>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Age Restriction</h2>
        <p className="mt-3 text-slate-500">Our website is intended for users aged 18 and above. If you are under 18, please leave this site immediately.</p>
      </div>

      <div className="card-light mb-6">
        <h2 className="text-xl font-bold text-white">Limitation of Liability</h2>
        <p className="mt-3 text-slate-500">Royal Bet Guide provides information for educational purposes. We are not responsible for any losses incurred from gambling activities.</p>
      </div>
    </div>
  );
}
