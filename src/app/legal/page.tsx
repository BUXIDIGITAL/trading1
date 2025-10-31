import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "BUXI DIGITAL legal disclosures, compliance statements, and contact information.",
};

export default function LegalPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="font-playfair text-4xl text-white">Legal & Compliance</h1>
        <p className="max-w-3xl text-base text-white/65">
          Transparency drives trust. Review the disclosures, disclaimers, and contact information that govern your relationship with BUXI DIGITAL.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Educational Purpose</h2>
        <p className="text-sm text-white/60">
          All BUXI DIGITAL content—including signals, research, automation templates, conversational outputs, and community posts—is provided strictly for educational discussion. Nothing on this site or delivered via the BUXI Trading Assistant constitutes financial, investment, legal, or tax advice. You remain responsible for all trading decisions and regulatory obligations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Risk Disclosure</h2>
        <p className="text-sm text-white/60">
          Trading digital assets, derivatives, or any leveraged instrument carries significant risk, including the potential loss of all capital. Automated strategies can compound losses quickly. Past performance—live or simulated—does not guarantee future results. Evaluate your individual risk tolerance, perform independent research, and consult a licensed professional where applicable.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Affiliate Relationships</h2>
        <p className="text-sm text-white/60">
          BUXI DIGITAL may receive commissions or other consideration when you use affiliate links referenced on this site. These relationships do not influence our due diligence process, and we only feature platforms that meet our operational transparency and risk requirements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Data Handling</h2>
        <p className="text-sm text-white/60">
          When you submit personal information such as an email address, we use it to deliver the requested communications and to improve our services. We will never sell your data. You may request deletion at any time by contacting us directly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p className="text-sm text-white/60">
          Questions regarding compliance or data rights? Email <a className="text-(--accent)" href="mailto:legal@buxidigital.com">legal@buxidigital.com</a>. We typically respond within two business days.
        </p>
      </section>

      <footer className="border-t border-white/10 pt-6 text-xs uppercase tracking-[0.35em] text-white/50">
        © {new Date().getFullYear()} BUXI DIGITAL · hello@buxidigital.com
      </footer>
    </div>
  );
}
