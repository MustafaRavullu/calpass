"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { featureSectionInfo } from "@/constants";
export default function FeatureSection() {
  return (
    // TO-DO: when you finished the app, use the screenshots of the app and make this section appealing
    <section>
      <MaxWidthWrapper className="mb-28 mt-28  flex flex-col items-center justify-center text-center gap-8">
        <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
          What we offer?
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
          {featureSectionInfo.map((item) => (
            <div key={item.id}>
              <Card className="min-h-40 md:h-72 flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <item.icon className="w-10 h-10" />
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center flex-1">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
