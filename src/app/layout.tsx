import "./globals.css";
import { Inter } from "next/font/google";
import Main from "./main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chukwunonso Nnalue",
  description: "Chukwunonso Nnalue Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Main children={children} />
      </body>
    </html>
  );
}
