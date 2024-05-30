import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LMS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header
          title={metadata.title || ""}
          links = {{
          Report: "/students/home",
          result: "/result",
          thoughts: "/thoughts"
        }} />
        {children}
      </body>
    </html>
  );
}
