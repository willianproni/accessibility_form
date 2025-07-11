import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accessibility Form",
  description: "Form develop for study accessibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />

          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
