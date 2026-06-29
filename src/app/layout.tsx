import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vishnu Nambiar",
  description: "Street and travel photography by Vishnu Nambiar.",
  openGraph: {
    title: "Vishnu Nambiar",
    description: "Street and travel photography by Vishnu Nambiar.",
    url: "https://nambiar.xyz",
    siteName: "Vishnu Nambiar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#fafafa] text-[#111]">
        <Nav />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
