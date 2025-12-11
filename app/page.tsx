import Image from "next/image";

export default function Home() {
  return (
    <div className="flex font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <section>
          <div>Hi,</div>
          <div>My name is</div>
          <div>Karthikeyan GR</div>
          <div>I build things for web</div>
        </section>
      </main>
    </div>
  );
}
