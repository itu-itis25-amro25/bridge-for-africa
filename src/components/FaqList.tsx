"use client";

import { useState } from "react";
import { FaqItem } from "@/components/FaqItem";

type Item = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 flex flex-col gap-3">
      {items.map((item, i) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex((v) => (v === i ? null : i))}
        />
      ))}
    </div>
  );
}
