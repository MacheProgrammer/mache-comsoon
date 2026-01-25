import "./top2026.css";
import { AladinDunes } from "./components/dunes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { PaymentModal } from "./components/paymentModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try Out Puspanegara 2026!",
  description:
    "Daftarkan dirimu segera untuk bergabung menjadi bagian dari peserta Try Out Puspanegara 2026!",
  icons: {
    icon: "/events/top2026/favicon.ico",
  },
};

export default function AladinPage() {
  return (
    <main className="aladin-scope aladin-bg relative min-h-dvh max-w-lvw overflow-x-hidden text-(--text-main)">
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-10 pb-20 text-center">
        <Image
          src="/events/top2026/top2026.PNG"
          alt="logo top"
          width={170}
          height={170}
          className="mr-2 mb-2"
        />
        <h1 className="aladin-title text-4xl font-black md:text-4xl">
          Try Out Puspanegara 2026
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[1rem] opacity-90">
          You're invited to be a part of
        </p>
        <p className="mx-auto max-w-xl text-[1rem] font-bold opacity-90">
          TOP 2026
        </p>
        <p className="mx-auto max-w-xl text-[1rem] font-bold opacity-90">
          March 8, 2026
        </p>
        <p className="mx-auto max-w-xl text-[1rem] opacity-90">
          only at <span className="font-semibold">SMAN 5 YOGYAKARTA</span>
        </p>

        <div className="mt-7 flex w-11/12 max-w-xl flex-wrap justify-center gap-4 max-md:w-11/12 max-md:flex-row max-md:gap-3 md:flex-nowrap">
          <div className="w-full flex-1">
            <Link
              className="w-full flex-1"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdrkDXocMpNwdRjW8GM6Hv50nkZJ4WlEOXNuK4cFYbPfK5iRg/viewform"
            >
              <Button className="w-full cursor-pointer rounded-xl border border-(--dune-front) bg-(--dune-mid) px-6 py-6 text-lg font-semibold text-(--text-main) shadow-lg hover:bg-(--dune-mid)">
                Link Pendaftaran
              </Button>
            </Link>
          </div>

          <div className="w-full flex-1">
            <Link
              className="w-full flex-1"
              href="https://drive.google.com/file/d/1oLVZ1TH5SbVbUr_Fxs0pDuQ5UdT0FQg6/view?usp=drivesdk"
            >
              <Button
                variant="outline"
                className="w-full cursor-pointer rounded-xl bg-transparent px-6 py-6 text-lg shadow-lg hover:border-(--dune-front) hover:bg-transparent hover:text-(--text-main)"
              >
                Teknis Pendaftaran
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-5 flex w-xl max-w-lg flex-col flex-wrap justify-center gap-3 max-md:w-[94%]">
          <Link href="https://wa.me/+6282137440442" className="w-full">
            <Button className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border-2 border-(--dune-front) bg-(--dune-back) px-6 py-6 text-xl font-medium text-(--text-main) shadow-lg hover:bg-(--dune-back) hover:text-(--text-main)">
              Contact Person Syifa{" "}
              <MdWhatsapp size={50} className="h-7! w-7!" />
            </Button>
          </Link>
          <Link href="https://wa.me/+628112817710" className="w-full">
            <Button className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border-2 border-(--dune-front) bg-(--dune-back) px-6 py-6 text-xl font-medium text-(--text-main) shadow-lg hover:bg-(--dune-back) hover:text-(--text-main)">
              Contact Person Shafira{" "}
              <MdWhatsapp size={50} className="h-7! w-7!" />
            </Button>
          </Link>
        </div>
        <div className="mt-4">
          <PaymentModal />
        </div>

        <p className="mx-auto mt-3 max-w-xl text-[1.6rem] font-bold text-shadow-lg">
          CHASE THE MAGIC, RISE TO THE <span className="font-black">TOP</span>
        </p>
      </section>

      <AladinDunes />
    </main>
  );
}
