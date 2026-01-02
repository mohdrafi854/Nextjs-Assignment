import Navbar from "@/components/Navbar";
import ReduxProvider from "@/store/provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Nextjs Blog",
  description: "Blog Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto">
          <ReduxProvider>
            <Navbar />
            {children}
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
