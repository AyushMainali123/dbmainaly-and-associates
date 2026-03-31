import { H2, H3, P } from "@/components/typography";

export default function BlogDetailContentAndSidebarSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
      <div className="lg:col-span-8 xl:col-span-9">
        <div className="prose prose-slate prose-lg max-w-none text-on-surface-variant leading-relaxed dark:prose-invert">
          <h2>Introduction</h2>
          <p>
            The 2024 Nepal Finance Act introduces significant amendments to the
            corporate tax framework, reflecting the government&apos;s strategic
            focus on foreign direct investment (FDI) and digital economy
            compliance. For both multinational corporations and local SMEs,
            understanding these nuanced changes is critical for fiscal planning
            and avoiding stringent new penalties.
          </p>
          <h3>Key Changes in Corporate Taxation</h3>
          <p>
            One of the most profound shifts in the 2024 Act is the
            restructuring of the corporate tax brackets for specific
            industries. While the base corporate tax rate remains at 25%, the
            following sector-specific adjustments have been implemented:
          </p>
          <ul>
            <li>
              <strong>Information Technology (IT) Export:</strong> The tax
              exemption period has been extended, subject to rigorous compliance
              with the new digital service export definition.
            </li>
            <li>
              <strong>Manufacturing Reshoring:</strong> Entities establishing
              manufacturing units in designated Special Economic Zones (SEZs)
              will benefit from accelerated depreciation allowances.
            </li>
          </ul>
          <blockquote>
            <p>
              &quot;The 2024 amendments are not merely procedural; they
              represent a fundamental pivot towards penalizing non-compliance
              while heavily rewarding documented, structured foreign
              investment.&quot; — <em>DB Mainaly</em>
            </p>
          </blockquote>
          <h3>Digital Services Tax (DST) Expansion</h3>
          <p>
            The scope of the Digital Services Tax has been considerably
            broadened. Non-resident digital service providers must now register
            locally if their annual transaction volume in Nepal exceeds the
            newly lowered threshold.
          </p>
          <h4>Compliance Timeline</h4>
          <ol>
            <li>
              <strong>Q3 2024:</strong> Mandatory registration for foreign
              digital entities.
            </li>
            <li>
              <strong>Q4 2024:</strong> Implementation of the revised TDS (Tax
              Deducted at Source) rates on expatriate consulting fees.
            </li>
            <li>
              <strong>Q1 2025:</strong> Enforcement of the new heavy penalty
              framework for delayed PAN/VAT filings.
            </li>
          </ol>
          <h3>Strategic Recommendations</h3>
          <p>
            We advise our clients to immediately initiate a comprehensive
            review of their current tax strategy. Specifically, cross-border
            payment structures and transfer pricing documentation should be
            updated to withstand the heightened scrutiny anticipated under the
            new framework.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-surface-container rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
            Finance Act
          </span>
          <span className="px-4 py-2 bg-surface-container rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
            Corporate Tax
          </span>
          <span className="px-4 py-2 bg-surface-container rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
            Nepal 2024
          </span>
        </div>
      </div>

      <aside className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-32 space-y-12">
          <div>
            <H3 className="text-sm uppercase tracking-widest text-primary mb-6">
              Share Article
            </H3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">link</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">mail</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">share</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm text-center">
            <H2 className="text-on-surface mb-2 pt-2 text-base font-bold">
              Require Clarification?
            </H2>
            <P className="text-sm text-on-surface-variant mb-6">
              Consult our tax partners to understand how this impacts your
              specific entity.
            </P>
            <a
              href="/contact"
              className="inline-block w-full text-center bg-primary text-white font-bold py-3 rounded-lg hover:brightness-110 transition-all text-sm"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

