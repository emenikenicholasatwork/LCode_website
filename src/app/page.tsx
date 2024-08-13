"use client"
import BroadSelection from "@/components/boardSelection/BroadSelection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ManDisplay from "@/components/man_diplay/ManDisplay";
import TopCategories from "@/components/topCategory/TopCategories";
import { GlobalProvider } from "@/context/GlobalContext";

export default function Home() {
  return (
    <GlobalProvider>
      <main className="flex flex-col items-center gap-5">
        <Header />
        <ManDisplay />
        <BroadSelection />
        <TopCategories />
        <Footer />
      </main>
    </GlobalProvider>
  );
}
