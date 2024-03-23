import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getRecipes(query: string) {
  try {
    if (query !== "") {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_API_KEY}&random=true`,
        {
          cache: "no-store",
        }
      );
      return res.json();
    } else {
      return "no-query";
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
}
