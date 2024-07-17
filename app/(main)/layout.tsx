import Footer from "@/components/footer";
import HeroLogo from "@/components/hero-logo";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="h-screen relative w-full p-4 bg-black text-white">
      <HeroLogo className="absolute top-4 left-4" />
      <div className="flex justify-end">{children}</div>
      <Footer className="absolute bottom-4" />
    </main>
  );
}
