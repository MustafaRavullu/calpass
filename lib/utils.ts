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

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};
