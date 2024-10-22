import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

export default function NavBar() {
    return(
      <div className="fixed top-0 w-full z-50 bg-black">
        <div className="flex justify-center mt-8">
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
      </div>
    );
}