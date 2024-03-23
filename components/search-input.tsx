"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const FormSchema = z.object({
  query: z.string().min(1),
});

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { query } = data;
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-3"
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Search" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">
          <Search className="w-4 h-4" />
        </Button>
      </form>
    </Form>
  );
}
