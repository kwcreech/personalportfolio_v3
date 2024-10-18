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

export default function NavBar() {
    return(
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
                  Experiences + Projects
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
    );
}