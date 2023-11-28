import { Inter } from "next/font/google";
import "./globals.css";
import Showcase from "@/components/showcase/showcase";
import Footer from "@/components/footer/Footer";
// import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Developer Shapan",
  description: "I'm a Web Developer with over two years of reasonable experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Showcase />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
