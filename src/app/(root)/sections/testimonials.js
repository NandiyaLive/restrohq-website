import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    quote: "RestaurantOS has completely transformed how we manage our restaurant chain. The integration between POS and inventory is seamless, and the analytics tools have helped us optimize our operations across all locations. The ROI has been incredible.",
    author: "John Smith",
    role: "CEO",
    company: "The Golden Spoon Restaurant Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&h=256",
  },
  {
    quote: "The analytics and reporting features have given us insights we never had before. We've increased our revenue by 30% and reduced food waste by 25%. The customer support team is always there when we need them.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "Bistro 54",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256",
  },
  {
    quote: "As a fine dining establishment, we needed a system that could handle complex orders and reservations while maintaining a high level of service. RestaurantOS delivers on all fronts. Our staff love using it.",
    author: "Michael Chen",
    role: "Owner & Executive Chef",
    company: "Fusion Kitchen",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256",
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400" fill="currentColor" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by Restaurant Owners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful restaurants using our platform to grow their business
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}