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
        <p className="mt-2 text-slate-500">Have a question, feedback, or found something inaccurate? We want to hear from you.</p>
      </div>

      <div className="grid gap-6">
        <div className="card-light text-center">
          <h2 className="text-xl font-bold text-white">General Inquiries</h2>
          <p className="mt-3 text-slate-500">
            <a href="mailto:support@royalbetguide.com" className="text-corg-500 hover:text-corg-500">support@royalbetguide.com</a>
          </p>
          <p className="mt-2 text-sm text-slate-500">For questions about our reviews, site feedback, or corrections</p>
        </div>

        <div className="card-light text-center">
          <h2 className="text-xl font-bold text-white">Partnerships &amp; PR</h2>
          <p className="mt-3 text-slate-500">
            <a href="mailto:partners@royalbetguide.com" className="text-corg-500 hover:text-corg-500">partners@royalbetguide.com</a>
          </p>
          <p className="mt-2 text-sm text-slate-500">Affiliate programs, business development, and media inquiries</p>
        </div>

        <div className="card-light text-center">
          <h2 className="text-xl font-bold text-white">Report an Issue</h2>
          <p className="mt-3 text-slate-500">
            <a href="mailto:report@royalbetguide.com" className="text-corg-500 hover:text-corg-500">report@royalbetguide.com</a>
          </p>
          <p className="mt-2 text-sm text-slate-500">Found inaccurate information or want to report a problem with a casino? Let us know.</p>
        </div>
      </div>
    </div>
  );
}
