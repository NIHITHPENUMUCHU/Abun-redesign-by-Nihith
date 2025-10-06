import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "10 SEO Strategies That Actually Work in 2025",
      excerpt: "Discover the latest SEO techniques that are driving real results for businesses this year. From AI-powered content to technical optimizations.",
      category: "SEO Tips",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "How AI is Revolutionizing Content Marketing",
      excerpt: "Explore how artificial intelligence is transforming the way we create, optimize, and distribute content across digital platforms.",
      category: "AI & Marketing",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      title: "Keyword Research Guide: Find Low-Competition Keywords",
      excerpt: "Master the art of finding profitable keywords that your competitors are missing. Complete guide with tools and techniques.",
      category: "Keyword Research",
      date: "Jan 10, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      title: "Content Automation: Scale Your Blog Without Sacrificing Quality",
      excerpt: "Learn how to automate your content creation process while maintaining high quality and SEO optimization.",
      category: "Automation",
      date: "Jan 8, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
    },
    {
      title: "Technical SEO Checklist: 25 Must-Do Optimizations",
      excerpt: "A comprehensive checklist to ensure your website is technically sound and ready to rank higher in search results.",
      category: "Technical SEO",
      date: "Jan 5, 2025",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
    },
    {
      title: "Programmatic SEO: Generate Thousands of Pages That Rank",
      excerpt: "Discover how to use programmatic SEO to create massive content libraries that drive organic traffic at scale.",
      category: "Advanced SEO",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["All", "SEO Tips", "AI & Marketing", "Keyword Research", "Automation", "Technical SEO", "Advanced SEO"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Abun <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on SEO, content marketing, and growth strategies to help you scale your business
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in" style={{ animationDelay: '0.1s' }}>
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden hover-lift border-border/50 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Featured
                </Badge>
              </div>
              <CardHeader className="flex flex-col justify-center p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{posts[0].category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-3xl mb-4">{posts[0].title}</CardTitle>
                <CardDescription className="text-base mb-6">{posts[0].excerpt}</CardDescription>
                <button className="flex items-center text-primary font-semibold hover:gap-3 transition-all group">
                  Read More 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardHeader>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift border-border/50 fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center p-12 bg-gradient-to-b from-accent/30 to-transparent rounded-lg border border-border/50">
            <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest SEO tips, content marketing strategies, and Abun updates delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
