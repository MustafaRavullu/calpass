import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SearchResultsSkeleton() {
  const cardSkeletons = Array.from({ length: 20 }, (_, index) => (
    <Card className="w-full" key={index}>
      <CardHeader>
        <Skeleton className="w-full aspect-square rounded-md" />
      </CardHeader>

      <CardContent className="space-y-2">
        <Skeleton className="w-full h-[20px]" />
        <Skeleton className="w-1/2 h-[20px]" />
      </CardContent>
      <CardFooter className="flex justify-between gap-3">
        <Skeleton className="w-full h-[30px]" />
        <Skeleton className="w-full h-[30px]" />
      </CardFooter>
    </Card>
  ));
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {cardSkeletons}
    </div>
  );
}
