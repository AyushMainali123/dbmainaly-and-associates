
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services-data";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div className="min-h-screen">
      
      <section className="pt-32 pb-16 bg-linear-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive financial solutions designed to help your business thrive
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2 relative h-[400px] rounded-lg shadow-lg">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.fullDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-4 text-lg">Key Features:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6" asChild>
                        <Link href="/#contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your business achieve its financial goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Services;
