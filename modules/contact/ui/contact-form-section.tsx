"use client";

import { useActionState } from "react";
import { Button } from "@/components/button";
import { sendContactEmail } from "../actions/send-contact-email";
import { H2, H3, P, Small } from "@/components/typography";
import { MdOutlineCall, MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";

const DEFAULT_SERVICE_LABELS = [
  "Tax Advisory",
  "Audit & Assurance",
  "Corporate Law",
  "Financial Consulting",
] as const;

function googleMapsPlaceEmbedUrl(lat: number, lng: number, apiKey: string): string {
  const params = new URLSearchParams({
    key: apiKey,
    q: `${lat},${lng}`,
    zoom: "15",
  });
  return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
}

interface ContactFormSectionProps {
  inquiryForm?: {
    title?: string | null;
    description?: string | null;
    fullNameLabel?: string | null;
    fullNamePlaceholder?: string | null;
    emailLabel?: string | null;
    emailPlaceholder?: string | null;
    serviceLabel?: string | null;
    serviceOptions?: { label?: string | null }[] | null;
    phoneLabel?: string | null;
    phonePlaceholder?: string | null;
    messageLabel?: string | null;
    messagePlaceholder?: string | null;
    submitButtonText?: string | null;
  };
  office?: {
    headquartersTitle?: string | null;
    addressBlockTitle?: string | null;
    addressLines?: string | null;
    phoneBlockTitle?: string | null;
    phoneLines?: string | null;
    emailBlockTitle?: string | null;
    emailLines?: string | null;
  };
  mapCard?: {
    latitude?: number | null;
    longitude?: number | null;
  };
}

export default function ContactFormSection({
  inquiryForm,
  office,
  mapCard,
}: ContactFormSectionProps) {
  const serviceLabels =
    inquiryForm?.serviceOptions
      ?.map((o) => o.label)
      .filter((label): label is string => Boolean(label && label.trim())) ?? [];
  const selectOptions =
    serviceLabels.length > 0 ? serviceLabels : [...DEFAULT_SERVICE_LABELS];

  const lat = mapCard?.latitude;
  const lng = mapCard?.longitude;
  const latOk = typeof lat === "number" && Number.isFinite(lat);
  const lngOk = typeof lng === "number" && Number.isFinite(lng);
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  const showMap = Boolean(mapsApiKey && latOk && lngOk);
  const mapIframeSrc =
    showMap && mapsApiKey && typeof lat === "number" && typeof lng === "number"
      ? googleMapsPlaceEmbedUrl(lat, lng, mapsApiKey)
      : null;

  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="lg:col-span-12 xl:col-span-7 bg-surface-container-lowest p-6 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(0,35,111,0.04)] border border-outline-variant/10">
          <H2 className="text-on-surface mb-2">
            {inquiryForm?.title ?? "Send us a Message"}
          </H2>
          <P className="text-on-surface-variant mb-10">
            {inquiryForm?.description ??
              "Briefly outline your requirements and our partners will contact you within 24 business hours."}
          </P>
          <form action={formAction} className="space-y-8">
            {/* Honeypot field - visually hidden to catch bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {state && (
              <div
                className={`p-4 rounded-md text-sm ${
                  state.success
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {state.message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Small className="font-bold text-primary uppercase tracking-wider block">
                  {inquiryForm?.fullNameLabel ?? "Full Name"}
                </Small>
                <input
                  name="fullName"
                  required
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant text-on-surface"
                  placeholder={inquiryForm?.fullNamePlaceholder ?? "John Doe"}
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <Small className="font-bold text-primary uppercase tracking-wider block">
                  {inquiryForm?.emailLabel ?? "Email Address"}
                </Small>
                <input
                  name="email"
                  required
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant text-on-surface"
                  placeholder={inquiryForm?.emailPlaceholder ?? "john@company.com"}
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Small className="font-bold text-primary uppercase tracking-wider block">
                  {inquiryForm?.serviceLabel ?? "Service Interest"}
                </Small>
                <select name="service" className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 text-on-surface-variant">
                  {selectOptions.map((label) => (
                    <option key={label}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Small className="font-bold text-primary uppercase tracking-wider block">
                  {inquiryForm?.phoneLabel ?? "Phone Number"}
                </Small>
                <input
                  name="phone"
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant text-on-surface"
                  placeholder={inquiryForm?.phonePlaceholder ?? "+977 1-XXXXXXX"}
                  type="tel"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Small className="font-bold text-primary uppercase tracking-wider block">
                {inquiryForm?.messageLabel ?? "How can we help?"}
              </Small>
              <textarea
                name="message"
                required
                className="w-full bg-surface-container-low border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:bg-surface-container-lowest transition-all py-4 px-0 placeholder:text-outline-variant resize-none text-on-surface"
                placeholder={
                  inquiryForm?.messagePlaceholder ?? "Describe your consultation needs..."
                }
                rows={4}
              ></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isPending}>
              {isPending ? "Sending..." : (inquiryForm?.submitButtonText ?? "Submit Inquiry")}
            </Button>
          </form>
        </div>

        <aside className="lg:col-span-12 xl:col-span-5 space-y-8 md:space-y-12">
          <div className="bg-surface-container p-8 md:p-10 rounded-xl">
            <H3 className="text-on-surface mb-8 border-l-4 border-primary pl-4">
              {office?.headquartersTitle ?? "Office Headquarters"}
            </H3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <span className="text-primary text-2xl">
                  <MdOutlineLocationOn />
                </span>
                <div>
                  <P className="font-bold text-on-surface mb-1">
                    {office?.addressBlockTitle ?? "Physical Address"}
                  </P>
                  <P className="text-on-surface-variant leading-relaxed mb-0 whitespace-pre-line">
                    {office?.addressLines ??
                      `DB Mainaly & Associates Building
Bansidhar Marg, Bishalnagar
Kathmandu, Nepal (100m South of the Embassy of Finland)`}
                  </P>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">
                  <MdOutlineCall />
                </span>
                <div>
                  <P className="font-bold text-on-surface mb-1">
                    {office?.phoneBlockTitle ?? "Phone & Fax"}
                  </P>
                  <P className="text-on-surface-variant mb-0 whitespace-pre-line">
                    {office?.phoneLines ?? "+977 1 4483012\n+977 9851000000"}
                  </P>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primary text-2xl">
                  <MdOutlineMail />
                </span>
                <div>
                  <P className="font-bold text-on-surface mb-1">
                    {office?.emailBlockTitle ?? "Electronic Mail"}
                  </P>
                  <P className="text-on-surface-variant mb-0 whitespace-pre-line">
                    {office?.emailLines ?? "info@dbmainaly.com\nsupport@dbmainaly.com"}
                  </P>
                </div>
              </div>
            </div>
          </div>
          {mapIframeSrc ? (
            <div className="relative w-full aspect-square md:aspect-video xl:aspect-square overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-high shadow-[0_20px_40px_rgba(0,35,111,0.04)]">
              <iframe
                title="Office location"
                src={mapIframeSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
