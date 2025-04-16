import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type BookCardProps = {
  image: string;
  title: string;
  author: string;
  description: string;
  extra?: string;
};

export function BookCard({
  image,
  title,
  author,
  description,
  extra,
}: BookCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-md text-white w-full max-w-sm">
      <CardContent className="p-4 flex flex-col gap-4">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-lg border border-white/10"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-white/70">{author}</p>
          <p className="text-sm text-white/60">{description}</p>
          {extra && <p className="text-sm text-white/50 italic">{extra}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
