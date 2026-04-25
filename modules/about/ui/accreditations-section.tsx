import { Small } from "@/components/typography";
import { MdOutlineLanguage, MdOutlineVerifiedUser } from "react-icons/md";
import type { AboutPage } from "@/payload-types";

const iconMap: Record<string, React.ReactNode> = {
  MdOutlineLanguage: <MdOutlineLanguage />,
  MdOutlineVerifiedUser: <MdOutlineVerifiedUser />
};

export default function AccreditationsSection({ data }: { data: AboutPage["accreditations"] }) {
  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest border-y border-outline-variant/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <Small className="font-bold text-primary tracking-[0.2rem] uppercase mb-4 block">{data?.badge}</Small>
        <div className="h-1 w-20 bg-tertiary-fixed-dim mx-auto mb-16 rounded-full"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {data?.items?.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              {item.iconType === 'text' ? (
                <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container rounded-full flex items-center justify-center mb-4 text-primary font-black text-xl md:text-2xl">{item.iconText}</div>
              ) : (
                <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-3xl md:text-4xl">
                    {item.icon ? iconMap[item.icon] : null}
                  </span>
                </div>
              )}
              <p className="text-on-surface font-bold text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
