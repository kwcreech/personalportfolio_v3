import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black dark">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
