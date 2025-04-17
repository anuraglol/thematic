"use client";

import { LoginForm } from "@/components/form";
import { handleFormSubmit } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

export default function Home() {
  const { data, isPending, mutate } = useMutation({
    mutationFn: handleFormSubmit,
  });

  return (
    <div className="w-full min-h-screen flex flex-col gap-12 justify-center items-center font-[family-name:var(--font-inter)]">
      <LoginForm isPending={isPending} mutate={mutate} />

      {data && (
        <div className="flex flex-col gap-6 w-[36rem] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl text-white shadow-md p-6">
          <p className="text-lg font-medium">and here it comes!</p>

          <div className="flex flex-col gap-1">
            {data?.map((d, i) => (
              <div className="text-white font-medium italic" key={i}>
                {d.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
