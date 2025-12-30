import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services-data";
import { blogPosts } from "@/data/blog-data";
import Link from "next/link";
import ContactForm from "@/components/shared/contact-form";
import Image from "next/image";

const Home = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-primary to-slate-900 opacity-95"
        />
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />

        <div className="container mx-auto px-4 z-10 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            DB Mainaly & Associates
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Your Trusted Partner in Financial Excellence
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Chartered Accountants providing comprehensive financial services for businesses and individuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild variant="secondary" className="font-semibold shadow-lg shadow-primary/20">
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your unique business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                  <Button variant="link" asChild className="p-0 h-auto text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    <Link href="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a question or need assistance? Our expert team is here to help.
              </p>
            </div>
            <Card className="shadow-2xl border-border/60 backdrop-blur-sm bg-card/50">
              <CardContent className="pt-8 px-8 pb-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles, expert analysis, and financial news
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-border/50">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <div className="text-xs font-bold text-primary tracking-wider uppercase mb-2">{post.category}</div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
