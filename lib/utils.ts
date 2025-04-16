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

export const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
  const res = await axios.post("/api/gen", {
    theme: values.theme,
  });

  console.log(res.data);
  return res.data;
};
