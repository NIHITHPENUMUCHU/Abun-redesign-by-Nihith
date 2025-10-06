import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, Share2, Flag } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "San Francisco, CA",
      rating: 5,
      reviewCount: 142,
      review: "This platform has completely transformed how we handle SEO. The AI-powered content generation is incredibly accurate and saves us hours every day. We've seen a 300% increase in organic traffic in just 3 months!",
      highlights: ["AI-powered content generation", "300% increase in organic traffic"],
      avatar: "S"
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      reviewCount: 89,
      review: "Best investment we made this year. The keyword research tool alone is worth the price. Simple to use, powerful results.",
      highlights: ["Best investment", "powerful results"],
      avatar: "M"
    },
    {
      name: "Emma Rodriguez",
      location: "London, UK",
      rating: 4,
      reviewCount: 203,
      review: "Outstanding customer support and the multi-language feature is exactly what our international team needed. We're now creating content in 8 different languages effortlessly. The automation features have reduced our content production time by 75%.",
      highlights: ["multi-language feature", "reduced our content production time by 75%"],
      avatar: "E"
    },
    {
      name: "David Park",
      location: "Seoul, South Korea",
      rating: 5,
      reviewCount: 67,
      review: "Game changer for our agency. Clients are seeing real results.",
      highlights: ["Game changer", "real results"],
      avatar: "D"
    },
    {
      name: "Lisa Anderson",
      location: "New York, NY",
      rating: 5,
      reviewCount: 156,
      review: "I was skeptical at first, but the programmatic SEO feature helped us create thousands of landing pages that actually rank! Our lead generation has skyrocketed. The internal linking builder is also incredibly smart - it finds connections we would have missed manually.",
      highlights: ["programmatic SEO feature", "lead generation has skyrocketed", "incredibly smart"],
      avatar: "L"
    },
    {
      name: "James Wilson",
      location: "Austin, TX",
      rating: 5,
      reviewCount: 94,
      review: "The competitor analysis tool is pure gold. We've identified gaps in our content strategy and capitalized on opportunities we didn't even know existed.",
      highlights: ["competitor analysis tool is pure gold", "identified gaps"],
      avatar: "J"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 4,
      reviewCount: 178,
      review: "Excellent value for money! The blog automation feature plans content months in advance and the quality is consistently high. Our blog traffic has doubled since we started using this.",
      highlights: ["Excellent value for money", "blog traffic has doubled"],
      avatar: "P"
    },
    {
      name: "Thomas Mueller",
      location: "Berlin, Germany",
      rating: 5,
      reviewCount: 121,
      review: "As a solo entrepreneur, I needed tools that work without a steep learning curve. This delivers on that promise perfectly. Setup took minutes, not hours.",
      highlights: ["without a steep learning curve", "Setup took minutes"],
      avatar: "T"
    },
    {
      name: "Rachel Kim",
      location: "Sydney, Australia",
      rating: 5,
      reviewCount: 85,
      review: "The schema markup generator and fast indexing features have improved our search visibility dramatically. We're ranking for keywords we never thought possible. The ROI has been incredible - we've already made back our investment 10x over!",
      highlights: ["improved our search visibility dramatically", "made back our investment 10x over"],
      avatar: "R"
    },
    {
      name: "Carlos Santos",
      location: "São Paulo, Brazil",
      rating: 5,
      reviewCount: 112,
      review: "Perfect for scaling content operations. The quality is consistently good and the integrations work flawlessly.",
      highlights: ["Perfect for scaling", "integrations work flawlessly"],
      avatar: "C"
    }
  ];

  const highlightText = (text: string, highlights: string[]) => {
    let highlightedText = text;
    highlights.forEach((highlight) => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="bg-secondary/30 px-1 rounded">$1</mark>'
      );
    });
    return highlightedText;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who transformed their SEO and content strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className={`hover-lift border-border/50 bg-card/50 backdrop-blur-sm fade-in ${
                review.review.length > 200 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 2 || index === 4 || index === 8 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                      <p className="text-xs text-muted-foreground">{review.reviewCount} reviews</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div
                  className="text-sm text-muted-foreground mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(review.review, review.highlights)
                  }}
                />

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    Useful
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Flag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
