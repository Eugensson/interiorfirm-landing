import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="py-10 px-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Nav
            containerStyles="hidden xl:block"
            listStyles="flex items-center gap-12"
            linkStyles=""
          />
          <MobileMenu />
          <button
            type="button"
            className="hidden xl:block btn btn-sm btn-accent"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};
