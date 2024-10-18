import "./globals.css";
import NavBar from "@/components/NavBar";
import Transition from "./transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black dark">
        <NavBar />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
