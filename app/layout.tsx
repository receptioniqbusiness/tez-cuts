import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tez Cuts | Luxury Fades & Loc Care",
  description:
    "Tez Cuts is a luxury barbershop brand specializing in precision fades, sharp linework, and elevated loc care.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
