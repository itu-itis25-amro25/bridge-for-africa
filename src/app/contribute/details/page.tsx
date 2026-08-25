import { Suspense } from "react";
import { Header } from "@/components/Header";
import { DetailsForm } from "./DetailsForm";

export default function ContributeDetailsPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <DetailsForm />
        </Suspense>
      </main>
    </div>
  );
}
