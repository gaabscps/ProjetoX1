import "../styles/config/import.scss";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Play X1",
  description: "Generated by create next app",
};

const fonts = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
