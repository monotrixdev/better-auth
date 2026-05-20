'use client'

import Spinner from "@/app/_components/spinner";
import { cn } from "@/lib/utils";
import {
  Mailbox,
  MailOpen,
  RefreshCcw
} from "lucide-react";

import React, { useState } from "react";
import { toast } from "sonner";

const MailPage = () => {

  const [mail, setMail] = useState({
    status: false
  });

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = async () => {

    setRefresh(true);

    setMail({
      status: true
    });

    setTimeout(() => {

      toast.success("Refreshing successfully");

      setRefresh(false);

      setMail({
        status: false
      });

    }, 3000);

  };

  return (

    <section className="relative overflow-hidden bg-zinc-50 w-full min-h-screen mx-auto px-4 py-10">

      {/* Background Pattern */}
      <div
        className="
        absolute inset-0 z-0
        bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
      />

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-4">

        {/* Header Card */}
        <div className="px-4 py-3 rounded-xl border bg-white/80 backdrop-blur-md shadow-sm flex items-center gap-3">

          <Mailbox className="w-10 h-10 rounded-lg border border-green-200 bg-green-50 p-2 text-green-600" />

          <div>
            <h1 className="text-lg font-semibold text-zinc-900">
              MailBox Inbox
            </h1>

            <p className="text-sm text-zinc-500">
              Click any layout or item to see how it works.
            </p>
          </div>

        </div>

        {/* Mail Box */}
        <div className="rounded-xl border bg-white/80 backdrop-blur-md shadow-sm overflow-hidden">

          {/* Top */}
          <div className="flex items-center justify-between px-4 py-3 bg-green-50 border-b">

            <div className="flex items-center gap-3">

              <MailOpen className="w-10 h-10 p-2 rounded-lg border border-green-200 bg-white text-green-500" />

              <div>
                <h3 className="text-md font-semibold text-zinc-900">
                  Recent Mail Box
                </h3>

                <p className="text-xs text-zinc-500">
                  Latest inbox activity
                </p>
              </div>

            </div>

            {/* Refresh */}
            <button
              onClick={handleRefresh}
              className="w-9 h-9 rounded-lg border bg-white hover:bg-zinc-100 transition flex items-center justify-center"
            >
              <RefreshCcw
                className={cn(
                  "w-4 h-4 text-zinc-700",
                  refresh && "animate-spin"
                )}
              />
            </button>

          </div>

          {/* Content */}
          <div className="px-4 py-16">

            {!mail?.status && !refresh && (
              <div className="flex flex-col items-center justify-center text-center">

                <MailOpen className="w-12 h-12 text-zinc-300 mb-3" />

                <h2 className="text-sm font-medium text-zinc-700">
                  No Mail Found
                </h2>

                <p className="text-sm text-zinc-500 mt-1">
                  Your inbox is currently empty.
                </p>

              </div>
            )}

            {refresh && (
              <div className="w-full flex flex-col items-center justify-center gap-3">

                <Spinner />

                <p className="text-sm text-zinc-500">
                  Refreshing mailbox...
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>

  );

};

export default MailPage;