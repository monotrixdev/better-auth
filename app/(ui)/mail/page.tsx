'use client'
import Spinner from "@/app/_components/spinner";
import { cn } from "@/lib/utils";
import { Dot, Mailbox, MailOpen, MailPlus, RefreshCcw } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const MailPage = () => {
    const [mail, setMail] = useState({ status: false});
    const [refress, setRefress] = useState(false)

    const Refressing = async () => {
        setRefress(true);
        setMail({ status: true})
        setTimeout(() => {
            toast.success("Refressing succesfully")
            setRefress(false)
            setMail({ status: false})
        }, 3000);
    }
  return (
    <section className="bg-zinc-50 w-full h-screen mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 flex gap-4">
        <div className="px-4 py-2 rounded-md border bg-white flex items-center space-x-2">
          <Mailbox className="w-9 h-9 rounded-md border border-green-200 bg-green-50 px-2 text-green-600" />
          <div className="">
            <h1 className="text-md font-semibold">MailBox Inbox</h1>
            <p className="text-sm text-muted-foreground">
              Click any layout or item to see whats and how work.
            </p>
          </div>
        </div>
        <div className="border rounded-md">
          <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-tr-md rounded-tl-md justify-between">
            <div className="flex items-center space-x-2">
            <MailOpen className="w-9 h-9 p-2 rounded-md border border-green-300 bg-white text-green-500" />
            <h3 className="text-md font-semibold">Recent Mail Box</h3>
            </div>
            <div className="flex items-center space-x-2">
                <RefreshCcw onClick={Refressing}  className={cn(
                    'w-4 h-4 text-zinc-800',
                    refress && 'animate-spin'
                )}/>
            </div>
          </div>
          <hr />
          <div className="px-4 py-10">
            {!mail?.status && (
                <div className="flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">No mail list found</p>
                </div>
            )}
            {refress && (
                <div className="w-full flex items-center justify-center">
                    <Spinner />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailPage;
