"use client"
import BecomeAnInstructor from "@/components/becomeAnInstructor/BecomeAnInstructor";
import BroadSelection from "@/components/boardSelection/BroadSelection";
import CustomerStories from "@/components/customersStories/CustomerStories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ManDisplay from "@/components/man_diplay/ManDisplay";
import TopCategories from "@/components/topCategory/TopCategories";
import { GlobalProvider } from "@/context/GlobalContext";

export default function Home() {
  return (
    <GlobalProvider>
      <main className="flex flex-col items-center">
        <Header />
        <ManDisplay />
        <BroadSelection />
        <TopCategories />
        <CustomerStories />
        <BecomeAnInstructor />
        <Footer />
      </main>
    </GlobalProvider>
  );
}
