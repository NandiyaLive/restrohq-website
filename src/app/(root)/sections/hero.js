"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import dashboardImage from "@public/dashboard.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-end justify-center overflow-hidden pt-24 lg:pt-32">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="container text-7xl capitalize font-bold max-w-6xl text-center">
            All your restaurant needs, in one place.
          </h1>

          <p className="container text-lg mt-4 max-w-4xl text-center text-neutral-500">
            RestroHQ is the ultimate all-in-one SaaS solution for restaurants.
            Manage POS, orders, reservations, menus, customer data, and
            analytics with ease. Start streamlining your operations today!
          </p>

          <div className="flex items-center justify-center mt-8 gap-4">
            <Button asChild>
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/register`}>
                Get Started
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`}>
                Sign In
              </Link>
            </Button>
          </div>

          <div className="h-[40vh] relative isolate">
            <Image
              src={dashboardImage}
              alt="Dashboard"
              className="w-full mt-12 rounded-lg object-cover object-top border border-neutral-400 drop-shadow-lg z-10"
              fill
            />
            <div className="absolute w-screen bottom-0 bg-gradient-to-t from-white z-50 to-transparent h-64" />
          </div>
        </motion.div>
      </div>

      <div className="h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </section>
  );
};

export default Hero;
