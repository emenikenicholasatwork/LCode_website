"use client"
import BecomeAnInstructor from "@/components/becomeAnInstructor/BecomeAnInstructor";
import BroadSelection from "@/components/boardSelection/BroadSelection";
import CustomerStories from "@/components/customersStories/CustomerStories";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Login from "@/components/login/Login";
import ManDisplay from "@/components/man_diplay/ManDisplay";
import TopCategories from "@/components/topCategory/TopCategories";
import { useGlobal } from "@/context/GlobalContext";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const { isShowAuthComponent } = useGlobal();
  return (
    <main className="flex flex-col items-center">
      <Toaster/>
      {isShowAuthComponent && <Login />}
      <Header />
      <ManDisplay />
      <BroadSelection />
      <TopCategories />
      <CustomerStories />
      <BecomeAnInstructor />
      <Footer />
    </main>
  );
}
