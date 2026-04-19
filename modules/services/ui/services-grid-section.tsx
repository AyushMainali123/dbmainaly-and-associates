import { H3, P } from "@/components/typography";
import { ServicePage } from "@/payload-types";
import { 
  MdOutlineAccountBalance, 
  MdOutlineGavel, 
  MdOutlinePayments, 
  MdOutlineQueryStats 
} from "react-icons/md";

const IconMap = {
  MdOutlineAccountBalance: <MdOutlineAccountBalance />,
  MdOutlineGavel: <MdOutlineGavel />,
  MdOutlinePayments: <MdOutlinePayments />,
  MdOutlineQueryStats: <MdOutlineQueryStats />,
};

export default function ServicesGridSection({
  data,
}: {
  data: ServicePage["servicesGrid"];
}) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data?.services?.map((service) => (
            <div
              key={service.id}
              className="group bg-surface-container-lowest p-8 md:p-10 flex flex-col h-full border border-outline-variant/15 hover:shadow-[0_20px_40px_rgba(0,35,111,0.06)] transition-all duration-300 rounded-xl"
            >
              <div className="mb-6 md:mb-8">
                <span className="text-primary text-3xl md:text-4xl">
                  {service.icon ? IconMap[service.icon] : <MdOutlineAccountBalance />}
                </span>
              </div>
              <H3 className="text-on-surface mb-4">{service.title}</H3>
              <P className="text-on-surface-variant mb-8 grow">
                {service.description}
              </P>
              <ul className="space-y-4 mb-10 text-sm font-medium text-on-surface-variant">
                {service.features?.map((f) => (
                  <li key={f.id} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {f.feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


