import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formSchema = z.object({
  theme: z.string().min(2),
});

export const responseSchema = z.array(
  z.object({
    title: z.string(),
    author: z.string(),
    mood: z.string(),
    reason: z.string(),
  })
);

export const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
  const { data } = await axios.post("/api/gen", {
    theme: values.theme,
  });

  const parsed = responseSchema.parse(data);
  console.log(parsed);

  return parsed;
};
