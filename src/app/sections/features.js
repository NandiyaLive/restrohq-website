"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Store,
  ChefHat,
  ClipboardList,
  Clock,
  Users,
  MessageSquare,
  LineChart,
  Mail,
  Settings,
  Smartphone,
  Shield,
  Gift,
} from "lucide-react";
import { Card } from "@/components/ui/card";

import { POS, API, Analytics } from "@/lib/illustrations";

const mainFeatures = [
  {
    title: "Advanced POS System",
    image: POS,
    description:
      "Modern point-of-sale with real-time order tracking, support for multiple payment methods and seamless integration.",
  },
  {
    title: "Advanced Analytics",
    image: Analytics,
    description:
      "Real-time insights into sales, inventory, and customer behavior. Predictive analytics for inventory and staffing optimization.",
  },
  {
    title: "Developer API",
    image: API,
    description:
      "Full REST API access for custom integrations and third-party applications. Build custom ordering systems and extensions.",
  },
];

const features = [
  {
    title: "Smart Menu Management",
    description:
      "Digital menu creation with dynamic pricing, inventory tracking, and allergen information. Easily update menus across all channels instantly.",
  },
  {
    title: "Order Management",
    description:
      "Unified order processing for dine-in, takeout, and delivery. Automated order routing, real-time status updates, and delivery integration.",
  },
  {
    title: "Reservation System",
    description:
      "Online booking with automated confirmations, waitlist management, and capacity optimization. Reduce no-shows with automated reminders.",
  },
  {
    title: "Customer Management",
    description:
      "Comprehensive CRM with customer profiles, order history, and preferences. Build loyalty programs and personalized marketing campaigns.",
  },
  {
    title: "Review Management",
    description:
      "Monitor and respond to customer feedback across all platforms. Analyze sentiment and improve customer satisfaction.",
  },
  {
    title: "Marketing Suite",
    description:
      "Automated email campaigns, SMS marketing, and social media integration. Target customers based on preferences and behavior.",
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="mx-auto container max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            What is RestroHQ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed specifically for modern restaurants.
            Streamline operations, delight customers, and grow your business.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 h-full relative bg-muted hover:bg-white border rounded-md transition-colors duration-300 select-none">
                <div className="flex items-center justify-center p-8">
                  {feature.image()}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8 h-full relative bg-muted/50 hover:bg-white border rounded-md transition-colors duration-300 select-none">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
