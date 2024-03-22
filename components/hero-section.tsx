import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";

export default function HeroSection() {
  return (
    <section className="bg-secondary">
      <MaxWidthWrapper className="mb-28 mt-28 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Track, Eat, Thrive: Your Calorie{" "}
          <span className="text-blue-600">Companion!</span>
        </h1>
        <p className="mt-5 max-w-[50ch] text-zinc-700 sm:text-lg">
          Track and Manage Your Calorie Intake Effortlessly! Search recipes,
          mark what you eat, and stay on top of your health goals with ease.
        </p>
        <div>
          <SignUpButton>
            <Button variant={"default"}>
              Get started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </SignUpButton>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
