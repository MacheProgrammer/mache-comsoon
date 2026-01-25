"use client";

import { RiBankCardFill } from "react-icons/ri";
import "../top2026.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaMoneyBill1Wave, FaWallet } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";

export function PaymentModal() {
  return (
    <Dialog>
      {/* TRIGGER */}
      <DialogTrigger asChild>
        <button className="cursor-pointer rounded-xl border-2 border-(--dune-mid) bg-(--dune-front) px-4 py-2.5 font-semibold text-(--text-custom) shadow-lg transition-all hover:scale-105 active:scale-95">
          Metode Pembayaran
        </button>
      </DialogTrigger>

      {/* MODAL */}
      <DialogContent className="aladin-modal max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Metode Pembayaran
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          {/* Highlight */}
          <div className="payment-card border">
            <p className="flex flex-row items-center gap-2 font-semibold">
              <BsBank2 className="text-primary" /> Transfer Bank
            </p>
            <p className="text-sm opacity-90">BCA</p>
          </div>

          <div className="payment-card border">
            <p className="flex flex-row items-center gap-2 font-semibold">
              <FaWallet className="text-primary" /> E-Wallet
            </p>
            <p className="text-sm opacity-80">ShopeePay • GoPay</p>
          </div>

          <div className="payment-card border">
            <p className="flex flex-row items-center gap-2 font-semibold">
              <FaMoneyBill1Wave className="text-primary" /> Cash
            </p>
            <p className="text-sm opacity-80">SMAN 5 Yogyakarta</p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs opacity-70">
          * Simpan bukti pembayaran untuk verifikasi
        </p>
      </DialogContent>
    </Dialog>
  );
}
