import Image from "next/image";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-off-white text-charcoal">
      <header className="flex shrink-0 justify-center px-6 pt-12 sm:pt-16 md:pt-20">
        <Image
          src="/laxya-logo.png"
          alt="LAXYA."
          width={220}
          height={80}
          priority
          className="h-auto w-44 sm:w-52 md:w-60"
        />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-8 sm:px-10">
        <div className="flex w-full max-w-2xl flex-col items-center text-center">
          <h1 className="animate-gentle-fade font-serif text-2xl font-light leading-snug tracking-wide text-charcoal sm:text-3xl md:text-4xl md:leading-tight">
            Jaipur-Crafted Kurtis &amp; Co-ord Sets,
            <br className="hidden sm:block" />
            <span className="sm:ml-1">Unveiling Soon.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed tracking-wide text-charcoal/65 sm:text-base">
            Timeless ethnic wear for the modern woman — hand-finished
            kurtis and co-ord sets, rooted in the art of Jaipur
            craftsmanship.
          </p>

          <div className="my-10 h-px w-16 bg-charcoal/20 sm:my-12" aria-hidden="true" />

          <NewsletterSignup />
        </div>
      </main>
    </div>
  );
}
