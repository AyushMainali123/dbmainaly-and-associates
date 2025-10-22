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
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsla(215, 55%, 20%, 0.95), hsla(215, 45%, 35%, 0.9)), url(${'/images/hero-bg.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            DB Mainaly & Associates
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your Trusted Partner in Financial Excellence
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Chartered Accountants providing comprehensive financial services for businesses and individuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-accent" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.shortDescription}
                  </CardDescription>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a question or need assistance? We&apos;re here to help.
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles and expert insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
                <CardHeader>
                  <div className="text-xs text-accent font-semibold mb-2">{post.category}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="link" asChild className="p-0 h-auto mt-4 text-primary">
                    <Link href={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
