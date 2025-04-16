"use client";

import { LoginForm } from "@/components/form";
import { BookCard } from "@/components/reccos";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center font-[family-name:var(--font-inter)]">
      <LoginForm />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            image={book.cover}
            title={book.title}
            author={book.author}
            description={book.description}
            extra={book.genre}
          />
        ))}
      </div> */}
    </div>
  );
}
