import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="flex justify-center mt-10 mb-5">
          <NavigationMenu className="border-white border-b-4">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href ="/" className={`${navigationMenuTriggerStyle()} bg-black text-slate-100 hover:bg-neutral-800 hover:text-white`}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href ="/experiences" className={`${navigationMenuTriggerStyle()} bg-black text-slate-100 hover:bg-neutral-800 hover:text-white`}>
                  Projects + Experiences
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href ="/about" className={`${navigationMenuTriggerStyle()} bg-black text-slate-100 hover:bg-neutral-800 hover:text-white`}>
                  About Me
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {children}
      </body>
    </html>
  );
}
