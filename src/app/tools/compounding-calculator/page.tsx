import type { Metadata } from "next";
import { CompoundingCalculator } from "@/components/compounding-calculator";

export const metadata: Metadata = {
  title: "Compounding Calculator",
  description: "Estimate trading bot growth with BUXI DIGITAL's compounding calculator.",
};

export default function CompoundingCalculatorPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-white/55">Planning Tool</p>
        <h1 className="font-playfair text-4xl text-white sm:text-5xl">Trading Bot Compounding Calculator</h1>
        <p className="max-w-2xl text-sm text-white/65">
          Model your copy-trading or automation strategy using the return ranges from our research. Adjust capital, monthly gains, and optional contributions to see how quickly results can scale.
        </p>
      </header>

      <CompoundingCalculator />
    </div>
  );
}
