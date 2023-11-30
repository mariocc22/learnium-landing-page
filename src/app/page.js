import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <Image src="assets/in_progress.svg" alt="logo" width="500" height="500" />
      <h1 className="text-white text-[32px] font-bold">
        Landing Page In Progress...
      </h1>
    </main>
  );
}
