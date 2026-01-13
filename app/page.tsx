import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section className="flex flex-col gap-3">
          <p className="text-2xl font-semibold text-blue-900">Hi,</p>
          <p className="text-2xl font-semibold text-blue-900">My name is</p>
          <p className="text-2xl font-semibold text-blue-600">GR Karthikeyan</p>
          <p className="text-2xl font-semibold text-blue-900">I build things for web</p>
        </section>
      </main>
    </div>
  );
}
