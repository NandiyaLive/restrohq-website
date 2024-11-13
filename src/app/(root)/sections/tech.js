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

import {
  Axios,
  Cloudflare,
  Express,
  GitHub,
  Heroku,
  JavaScript,
  Nextjs,
  Nodejs,
  Postgres,
  Prisma,
  React,
  Resend,
  Stripe,
  Tailwind,
  Vercel,
} from "@/lib/icons";
import { Icon } from "@iconify/react";

const tech = [
  {
    title: "Node.js",
    icon: <Icon icon="logos:nodejs-icon-alt" />,
    description:
      "Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
  },
  {
    title: "React",
    icon: <Icon icon="logos:react" />,
    description: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Next.js",
    icon: <Icon icon="logos:nextjs-icon" />,
    description:
      "Next.js enables you to create full-stack web applications by extending the latest React features.",
  },
  {
    title: "Tailwind CSS",
    icon: <Icon icon="vscode-icons:file-type-tailwind" />,
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    title: "Prisma",
    icon: <Icon icon="devicon:prisma" />,
    description: "Next-generation ORM for Node.js and TypeScript.",
  },
  {
    title: "PostgreSQL",
    icon: <Icon icon="devicon:postgresql" />,
    description: "A powerful, open source object-relational database system.",
  },
  {
    title: "Express",
    icon: <Icon icon="devicon:express" />,
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    title: "Axios",
    icon: <Icon icon="devicon-plain:axios" className="text-[#5a29e4]" />,
    description: "Promise based HTTP client for the browser and Node.js.",
  },
  {
    title: "Stripe",
    icon: <Icon icon="bi:stripe" className="text-[#635bff]" />,
    description: "Online payment processing for internet businesses.",
  },
  {
    title: "Vercel",
    icon: <Icon icon="devicon:vercel" />,
    description:
      "Vercel is a cloud platform that helps developers build, deploy, and scale web applications",
  },
  {
    title: "Heroku",
    icon: <Icon icon="skill-icons:heroku" />,
    description:
      "A PaaS that enables developers to build, run, and operate applications entirely in the cloud.",
  },
  {
    title: "Cloudflare",
    icon: <Icon icon="devicon:cloudflare" />,
    description:
      "A a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
  },
  {
    title: "GitHub",
    icon: <Icon icon="mdi:github" className="text-black" />,
    description:
      "A developer platform that allows developers to create, store, manage and share their code.",
  },
  {
    title: "JavaScript",
    icon: <Icon icon="logos:javascript" />,
    description:
      "A programming language that allows developers to create interactive web pages.",
  },
  {
    title: "Resend",
    icon: <Icon icon="simple-icons:resend" className="text-black" />,
    description:
      "An email sending platform that offers a variety of products and features for developers",
  },
];

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto container max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powered by Modern Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on top of the latest and greatest, production grade technology
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 h-full flex gap-6 relative bg-white hover:bg-muted border rounded-md transition-colors duration-300 select-none">
                <div className="text-4xl w-8">{tech.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
