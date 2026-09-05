"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: "right" | "left";
}

const SheetContext = React.createContext<{ open: boolean }>({ open: false });

function Sheet({ open, onOpenChange, children }: SheetProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <SheetContext.Provider value={{ open }}>
        {children}
      </SheetContext.Provider>
    </DialogPrimitive.Root>
  );
}

function SheetContent({
  className,
  children,
  side = "right",
}: {
  className?: string;
  children: React.ReactNode;
  side?: "right" | "left";
}) {
  const { open } = React.useContext(SheetContext);

  return (
    <DialogPrimitive.Portal forceMount>
      <AnimatePresence>
        {open && (
          <>
            <DialogPrimitive.Overlay key="sheet-overlay" forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-obsidian/30 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content key="sheet-content" forceMount asChild>
              <motion.div
                initial={{ x: side === "right" ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: side === "right" ? "100%" : "-100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                className={cn(
                  "fixed top-0 z-50 flex h-full w-full max-w-md flex-col border-border bg-white/95 shadow-2xl backdrop-blur-md",
                  side === "right" ? "right-0 border-l" : "left-0 border-r",
                  className,
                )}
              >
                {children}
                <DialogPrimitive.Close className="absolute right-6 top-6 text-obsidian/50 transition-colors hover:text-obsidian cursor-pointer p-1 rounded-full hover:bg-obsidian/5">
                  <X className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
              </motion.div>
            </DialogPrimitive.Content>
          </>
        )}
      </AnimatePresence>
    </DialogPrimitive.Portal>
  );
}

export { Sheet, SheetContent };
