import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-slate-950/70 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200",
        className,
      )}
      {...props}
    />
  );
}

export function Button({
  className,
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
