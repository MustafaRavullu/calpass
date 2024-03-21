import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Header() {
  return (
    <header className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
      <MaxWidthWrapper className="h-full">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Calpass</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
