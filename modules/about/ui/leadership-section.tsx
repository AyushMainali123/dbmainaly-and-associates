import { H2, H4, P, Small } from "@/components/typography";
import type { AboutPage } from "@/payload-types";
import Image from "next/image";

export default function LeadershipSection({ data }: { data: AboutPage["leadership"] }) {
  return (
    <section className="py-16 md:py-32 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <Small className="font-bold text-primary tracking-[0.1rem] uppercase mb-4 block">{data?.badge}</Small>
            <H2 className="text-on-surface">{data?.titleLine1} <br className="hidden md:block" />{data?.titleLine2}</H2>
          </div>
          <P className="text-on-surface-variant text-lg max-w-sm mb-0">{data?.description}</P>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {data?.leaders?.map((leader, index) => {
            const imageUrl = typeof leader.image === 'object' && leader.image?.url ? leader.image.url : '';
            return (
              <div className="group" key={index}>
                <div className="relative overflow-hidden rounded-xl mb-6 md:mb-8 aspect-3/4 bg-surface-container-high">
                  <Image src={imageUrl} alt={leader.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-8">
                    <p className="text-white text-sm italic">"{leader.quote}"</p>
                  </div>
                </div>
                <H4 className="text-on-surface mb-1">{leader.name}</H4>
                <Small className="text-primary font-bold tracking-widest uppercase mb-4 block">{leader.role}</Small>
                <P className="text-on-surface-variant leading-relaxed">{leader.description}</P>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
