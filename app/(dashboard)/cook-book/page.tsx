import { SearchInput } from "@/components/search-input";
import { Suspense } from "react";
import SearchResultsSkeleton from "@/components/search-results-skeleton";
import SearchResults from "@/components/search-results";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <main className="page_layout flex flex-col gap-3">
      <SearchInput />
      <Suspense key={query} fallback={<SearchResultsSkeleton />}>
        <SearchResults query={query} />
      </Suspense>
    </main>
  );
}
