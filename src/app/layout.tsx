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
        <div className="mt-32">
          {children}
        </div>
      </body>
    </html>
  );
}
