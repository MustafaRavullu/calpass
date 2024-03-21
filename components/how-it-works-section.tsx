import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { howItWorksSectionInfo } from "@/constants";

export default function HowItWorksSection() {
  return (
    <section className="bg-secondary">
      <MaxWidthWrapper className="mt-20 mb-20">
        <div className="font-bold text-center text-4xl md:text-5xl lg:text-6xl">
          How It Works?
        </div>
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {howItWorksSectionInfo.map((item) => (
            <HowItWorksSectionSteps
              key={item.id}
              stepsNumber={item.id}
              title={item.title}
              content={item.description}
            />
          ))}
        </ol>
      </MaxWidthWrapper>
    </section>
  );
}

function HowItWorksSectionSteps({
  stepsNumber,
  title,
  content,
}: {
  stepsNumber: number;
  title: string;
  content: string;
}) {
  return (
    <li className="md:flex-1">
      <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
        <span className="text-sm font-medium text-blue-600">
          Step {stepsNumber}
        </span>
        <span className="text-xl font-semibold">{title}</span>
        <span className="mt-2 text-zinc-700">{content}</span>
      </div>
    </li>
  );
}
