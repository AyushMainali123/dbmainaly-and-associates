import {
  H1,
  H2,
  H3,
  H4,
  Lead,
  Large,
  Muted,
  P,
  Small,
  Blockquote,
  List,
  Table,
  InlineCode,
  RTL,
} from "@/components/typography";

export default function TypographyFoundationsSection() {
  return (
    <main className="bg-surface min-h-screen py-24">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="mb-20">
          <p className="text-primary font-bold tracking-[0.15em] uppercase text-xs mb-4">
            Design System
          </p>
          <H1>Typography Foundations</H1>
          <Lead>
            A comprehensive guide to our typography system, ensuring consistency
            and readability across all digital platforms.
          </Lead>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-20">
          <section>
            <H2 className="border-b border-outline-variant pb-4 mb-8">
              Headings
            </H2>
            <div className="space-y-12">
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Heading 1
                </Small>
                <H1>The Art of Financial Precision</H1>
              </div>
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Heading 2
                </Small>
                <H2>Strategic Corporate Advisory</H2>
              </div>
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Heading 3
                </Small>
                <H3>Audit and Assurance Excellence</H3>
              </div>
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Heading 4
                </Small>
                <H4>Taxation and Compliance Laws</H4>
              </div>
            </div>
          </section>

          <section>
            <H2 className="border-b border-outline-variant pb-4 mb-8">
              Body Text
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Lead Paragraph
                </Small>
                <Lead>
                  We provide high-level financial consulting services for
                  businesses looking to scale in the Nepalese market and beyond.
                </Lead>
              </div>
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Standard Paragraph (P)
                </Small>
                <P>
                  Our team of experienced chartered accountants and financial
                  analysts work tirelessly to ensure your business remains
                  compliant with all local and international regulations. We
                  believe in building long-term partnerships based on trust and
                  results.
                </P>
              </div>
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Large Text
                </Small>
                <Large>
                  This is an example of large text, useful for emphasizing key
                  information or as a secondary headline.
                </Large>
              </div>
              <div>
                <Small className="text-primary mb-2 block uppercase tracking-widest font-bold">
                  Muted Text
                </Small>
                <Muted>
                  Last updated: March 2026. All rights reserved by DB Mainaly &
                  Associates. Terms and conditions apply to all services
                  provided.
                </Muted>
              </div>
            </div>
          </section>

          <section>
            <H2 className="border-b border-outline-variant pb-4 mb-8">
              Specialized Components
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Small className="text-primary mb-4 block uppercase tracking-widest font-bold">
                  Blockquote
                </Small>
                <Blockquote>
                  &quot;Integrity is the essence of everything successful.
                  Without it, the foundation of any financial institution will
                  eventually crumble.&quot;
                </Blockquote>
              </div>
              <div>
                <Small className="text-primary mb-4 block uppercase tracking-widest font-bold">
                  Lists (Unordered &amp; Ordered)
                </Small>
                <List type="ul">
                  <li>Corporate Taxation Strategy</li>
                  <li>International Audit Standards</li>
                  <li>M&amp;A Advisory Services</li>
                </List>
                <List type="ol">
                  <li>Discovery Phase</li>
                  <li>Strategic Planning</li>
                  <li>Execution &amp; Compliance</li>
                </List>
              </div>
            </div>
          </section>

          <section>
            <H2 className="border-b border-outline-variant pb-4 mb-8">
              Elements &amp; Data
            </H2>
            <div className="grid grid-cols-1 gap-12">
              <div>
                <Small className="text-primary mb-4 block uppercase tracking-widest font-bold">
                  Table Styling
                </Small>
                <Table>
                  <thead>
                    <tr>
                      <th>Service Tier</th>
                      <th>Audit Frequency</th>
                      <th>Consultation Hours</th>
                      <th>Annual Retainer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard</td>
                      <td>Annual</td>
                      <td>10 Hours</td>
                      <td>$2,500</td>
                    </tr>
                    <tr>
                      <td>Premium</td>
                      <td>Bi-Annual</td>
                      <td>25 Hours</td>
                      <td>$5,000</td>
                    </tr>
                    <tr>
                      <td>Enterprise</td>
                      <td>Quarterly</td>
                      <td>Unlimited</td>
                      <td>Contact Us</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Small className="text-primary mb-4 block uppercase tracking-widest font-bold">
                  Inline Code
                </Small>
                <P>
                  To initialize the financial model, use the{" "}
                  <InlineCode>npm run calc:fiscal</InlineCode> command in your
                  terminal. Ensure the <InlineCode>CONFIG_PATH</InlineCode> is
                  correctly set in your environment variables.
                </P>
              </div>
            </div>
          </section>

          <section>
            <H2 className="border-b border-outline-variant pb-4 mb-8">
              RTL Support
            </H2>
            <div className="bg-surface-container-low p-8 rounded-xl">
              <Small className="text-primary mb-4 block uppercase tracking-widest font-bold">
                Right-to-Left Text
              </Small>
              <RTL>
                <H3>نحن نقدم خدمات استشارية مالية عالية المستوى</H3>
                <P>
                  هذا مثال على النص الذي يظهر من اليمين إلى اليسار. نحن نضمن أن
                  نظامنا يدعم لغات متعددة وتنسيقات نصية مختلفة لتلبية احتياجات
                  عملائنا العالميين.
                </P>
              </RTL>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

