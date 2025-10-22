
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="min-h-screen">

      <section className="pt-32 pb-16 bg-linear-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Expert insights, tips, and updates on accounting, taxation, and business advisory
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative w-full h-56">
                    <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="object-cover"
                    fill
                    />
                </div>
                <CardHeader className="grow">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href={`/blog/${post.id}`}>
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
