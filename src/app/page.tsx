import BroadSelection from "@/components/boardSelection/BroadSelection";
import Header from "@/components/header/Header";
import ManDisplay from "@/components/man_diplay/ManDisplay";

export default function Home() {
  return (
    <main className="pb-20">
      <Header />
      <ManDisplay />
      <BroadSelection />
    </main>
  );
}
