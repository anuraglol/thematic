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

export type TResponse = z.infer<typeof responseSchema>;
export type TForm = z.infer<typeof formSchema>;

export const handleFormSubmit = async (values: TForm) => {
  const { data } = await axios.post("/api/gen", {
    theme: values.theme,
  });

  const parsed = responseSchema.parse(data);
  return parsed;
};
