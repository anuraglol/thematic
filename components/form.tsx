"use client";

import { cn, formSchema, handleFormSubmit } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Loader2 } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: "",
    },
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-6 w-[36rem] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-md p-6",
        className
      )}
      {...props}
    >
      <Card className="bg-transparent border border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Generate</CardTitle>
          <CardDescription className="text-white/70">
            Generate recs here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Theme</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="a book about samurais"
                        className="bg-white/10 border border-white/20 text-white placeholder-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-white/60">
                      Go on, describe what you desire in the form of words. And
                      your wish shall be fulfilled.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex justify-center items-center">
                <Button
                  type="submit"
                  className="bg-white/10 border border-white/20 text-white hover:bg-white/20 w-full cursor-pointer"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
