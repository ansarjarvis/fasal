import React from "react";

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-4xl font-bold relative z-20 bg-clip-text py-8">
        {children}
      </div>
    </div>
  );
}
