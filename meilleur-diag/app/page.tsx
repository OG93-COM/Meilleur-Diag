import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <div className="h-100 flex justify-center items-center text-2xl font-bold">
        <p>Home page</p>
      </div>
    </main>
  );
}
