import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Sharma",
  description: "Portfolio Website for Abhishek Sharma",
  //add og protocol
  // <meta property="og:image" content="https://socialify.git.ci/abhisheksharm-3/personal-portfolio/png?description=1&descriptionEditable=Personal%20Portfolio%20Website%20for%20Abhishek%20Sharma&font=Jost&language=1&name=1&owner=1&pattern=Formal%20Invitation&stargazers=1&theme=Dark" />
// <meta property="og:image:width" content="1280" />
// <meta property="og:image:height" content="640" />
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
