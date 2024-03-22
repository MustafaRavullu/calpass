import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { ArrowRight, Compass } from "lucide-react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Header() {
  const { userId } = auth();

  return (
    <header className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
      <MaxWidthWrapper className="h-full">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex items-center gap-1 z-40">
            <Compass />
            <span className=" font-semibold">Calpass</span>
          </Link>
          {userId ? (
            <div>merhaba</div>
          ) : (
            <div className="flex gap-3">
              <SignInButton />
              <SignUpButton>
                <Button variant={"default"}>
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
