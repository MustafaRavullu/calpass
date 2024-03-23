import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { getRecipes } from "@/lib/utils";
import { UtensilsCrossed } from "lucide-react";

export default async function SearchResults({ query }: { query: string }) {
  const data = await getRecipes(query);
  if (data === "no-query")
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <span className="flex flex-col items-center gap-1">
          Let&apos;s search recipes!
          <UtensilsCrossed />
        </span>
      </div>
    );
  return (
    <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {data.hits.map((item: any) => (
        <Card className="w-full flex flex-col gap-1" key={item.recipe.uri}>
          <CardHeader>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={item.recipe.image}
                alt={item.recipe.label}
                sizes="(min-width: 1540px) calc(16.64vw - 79px), (min-width: 1280px) calc(20vw - 84px), (min-width: 1040px) calc(25vw - 89px), (min-width: 780px) calc(33.33vw - 98px), (min-width: 640px) calc(50vw - 68px), calc(100vw - 74px)"
                fill
                className="object-cover rounded-md"
              />
            </AspectRatio>
          </CardHeader>

          <CardContent className="flex-1">{item.recipe.label}</CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"default"} className="w-full">
              Add to Menu
            </Button>
            <Button variant={"link"} className="w-full">
              View
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
