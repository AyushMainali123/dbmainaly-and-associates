import { H2, H4, P, Small } from "@/components/typography";
import { ServicePage, Media } from "@/payload-types";

export default function SectorSpecializationSection({
  data,
}: {
  data: ServicePage["sectorSpecialization"];
}) {
  const sectors = data?.sectors || [];
  const sector1 = sectors[0];
  const sector2 = sectors[1];
  const sector3 = sectors[2];

  const getImageUrl = (image?: number | Media | null) => {
    if (image && typeof image === "object") {
      return image.url || "";
    }
    return "";
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-surface-container-low">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 md:mb-16">
          <Small className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
            {data?.badge || "Sector Specialization"}
          </Small>
          <H2 className="text-on-surface">
            {data?.title || "Industry-Specific Solutions"}
          </H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Main Sector Card */}
          {sector1 && (
            <div className="md:col-span-5 lg:col-span-4 relative group overflow-hidden bg-primary p-8 md:p-12 flex flex-col justify-end min-h-[400px] md:min-h-[500px] rounded-xl">
              <div className="absolute inset-0 opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-110">
                <img
                  src={getImageUrl(sector1.image) || "https://images.unsplash.com/photo-1541354453284-699709772a0d?auto=format&fit=crop&q=80&w=800"}
                  alt={sector1.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <H4 className="text-white mb-4">{sector1.title}</H4>
                <P className="text-primary-fixed-dim text-sm leading-relaxed mb-6">
                  {sector1.description}
                </P>
              </div>
            </div>
          )}

          <div className="md:col-span-7 lg:col-span-8 grid grid-rows-1 md:grid-rows-2 gap-6 md:gap-8">
            {/* Second Sector Card */}
            {sector2 && (
              <div className="relative group overflow-hidden bg-secondary-container p-8 md:p-12 flex flex-col justify-center rounded-xl min-h-[300px] md:min-h-0">
                <div className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-105">
                  <img
                    src={getImageUrl(sector2.image) || "https://images.unsplash.com/photo-1466611653911-95481536a6b2?auto=format&fit=crop&q=80&w=1200"}
                    alt={sector2.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 max-w-lg">
                  <H4 className="text-on-secondary-container mb-4">{sector2.title}</H4>
                  <P className="text-on-secondary-fixed-variant text-sm leading-relaxed mb-0">
                    {sector2.description}
                  </P>
                </div>
              </div>
            )}

            {/* Third Sector Card */}
            {sector3 && (
              <div className="relative group overflow-hidden bg-tertiary-fixed p-8 md:p-12 flex flex-col justify-center rounded-xl min-h-[300px] md:min-h-0">
                <div className="absolute inset-0 opacity-15 transition-transform duration-700 group-hover:scale-105">
                  <img
                    src={getImageUrl(sector3.image) || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"}
                    alt={sector3.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 max-w-lg">
                  <H4 className="text-on-tertiary-fixed mb-4">{sector3.title}</H4>
                  <P className="text-on-tertiary-fixed-variant text-sm leading-relaxed mb-0">
                    {sector3.description}
                  </P>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


