import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-y-6">
      <h1 className="text-5xl font-bold text-slate-700">
        University Students Portfolio
      </h1>
      <Button asChild size={"lg"}>
        <Link href={"/home"}>Get Started</Link>
      </Button>
    </main>
  );
};

export default Home;
