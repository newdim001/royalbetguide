import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Royal Bet Guide. Contact our support team for any questions or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="inline-block rounded-full bg-corg-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-corg-500">
          📧 Get in Touch
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-corg-600">Contact Us</h1>
        <p className="mt-2 text-slate-500">Have a question or suggestion? We would love to hear from you.</p>
      </div>

      <div className="card-light mb-6 text-center">
        <h2 className="text-xl font-bold text-white">Email</h2>
        <p className="mt-3 text-slate-500">
          <a href="mailto:support@royalbetguide.com" className="text-corg-500 hover:text-corg-500">support@royalbetguide.com</a>
        </p>
        <p className="mt-2 text-sm text-slate-500">We respond within 24-48 hours</p>
      </div>

      <div className="card-light text-center">
        <h2 className="text-xl font-bold text-white">Partnership Inquiries</h2>
        <p className="mt-3 text-slate-500">
          <a href="mailto:partners@royalbetguide.com" className="text-corg-500 hover:text-corg-500">partners@royalbetguide.com</a>
        </p>
        <p className="mt-2 text-sm text-slate-500">For affiliate and business development opportunities</p>
      </div>
    </div>
  );
}
