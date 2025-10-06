import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Integrations from "@/components/Integrations";
import FinalCTA from "@/components/FinalCTA";
import IntegrationsShowcase from "@/components/IntegrationsShowcase";
import EnhancedPricing from "@/components/EnhancedPricing";
import UnfairAdvantage from "@/components/UnfairAdvantage";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is Abun?",
          a: "Abun is an all-in-one AI-powered SEO and content marketing toolkit that helps marketers, founders, and SEO experts drive traffic, generate leads, and achieve business growth through automated content creation and optimization."
        },
        {
          q: "How do I get started?",
          a: "Simply sign up for a free account, choose your plan, and you can start creating AI-powered content immediately. No credit card required for the trial period."
        },
        {
          q: "Do I need technical knowledge to use Abun?",
          a: "Not at all! Abun is designed to be user-friendly. Our AI handles the technical aspects while you focus on your content strategy."
        }
      ]
    },
    {
      category: "Features & Tools",
      questions: [
        {
          q: "What types of content can Abun create?",
          a: "Abun can create blog articles, SEO-optimized content, glossaries, comparison pages, infographics, stats pages, and even convert videos to articles. All content is human-like and optimized for search engines."
        },
        {
          q: "How does AI Blog Automation work?",
          a: "Our AI Blog Automation can plan and create content for months in advance. Simply set your topics and schedule, and Abun will automatically generate and optimize articles based on your preferences."
        },
        {
          q: "Can I use Abun for multiple websites?",
          a: "Yes! Depending on your plan, you can manage multiple websites. Professional plans include up to 5 websites, while Enterprise plans offer unlimited websites."
        },
        {
          q: "Does Abun integrate with my CMS?",
          a: "Yes! Abun integrates with WordPress, Shopify, Wix, Webflow, and connects with Google Search Console for performance tracking."
        }
      ]
    },
    {
      category: "Billing & Plans",
      questions: [
        {
          q: "Is there a free trial?",
          a: "Yes! We offer a 14-day free trial for all plans. No credit card required to start."
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees."
        },
        {
          q: "What happens if I exceed my article limit?",
          a: "You can either upgrade to a higher plan or purchase additional articles as needed. We'll notify you before you reach your limit."
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
        }
      ]
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Integrations />
        <FinalCTA />

        <IntegrationsShowcase />

        <EnhancedPricing />

        <UnfairAdvantage />

        <CustomerReviews />

        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Everything you need to know about Abun and how it can help grow your business
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex} className="fade-in" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
                  <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${sectionIndex}-${faqIndex}`}
                        className="border border-border/50 rounded-lg px-6 bg-card/50"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-accent/30 rounded-lg border border-border/50">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@abun.com"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Abun <span className="text-gradient">Blog</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert insights on SEO, content marketing, and growth strategies to help you scale your business
              </p>
            </div>

            <Card className="mb-12 overflow-hidden hover-lift border-border/50 fade-in" style={{ animationDelay: '0.1s' }}>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover-lift border-border/50 fade-in"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
