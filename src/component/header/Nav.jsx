import { NavLink } from "react-router-dom";
import { navItems } from "../utility/datas";
import BurgerNav from "./BurgerNav";
import { useState } from "react";
import ScrollLink from "./ScrollLink";

const BURGERSTYLE =
  "md:absolute md:!flex md:flex-col md:gap-0 md:top-[100%] md:left-[calc(91%-168px)] md:items-end md:z-[2]";
const MENU_ITEM_STYLE = `after:content-[''] after:absolute after:w-[calc(100%-2.5rem)] after:scale-x-0 after:transition-transform after:duration-500 after:h-[2px] after:bg-white after:top-[80%]
                        after:left-[1.25rem]  hover:after:block after:origin-left after:hover:origin-right hover:after:scale-x-100
                        before:content-[''] before:absolute before:top-[20%] before:left-[1.25rem] before:w-[calc(100%-2.5rem)] before:transition-transform
                        before:duration-500 before:h-[2px] before:bg-white before:scale-x-0 before:origin-right before:hover:origin-left hover:before:scale-x-100`;

function Nav() {
  const [burgClicked, setBurgClicked] = useState(false);

  const handleNavItem = () => {
    if (burgClicked) {
      setBurgClicked(false);
    }
  };

  return (
    <div className="relative flex w-full flex-row items-center justify-evenly gap-52 bg-gradient-to-r from-[rgb(0_0_0_/_0)]
                to-slate-400 shadow-sm shadow-slate-700 md:z-[1] md:justify-around md:!gap-[50%] md:py-2 lg:gap-20 xmd:gap-0">
      <img
        src="./img/gj-logo.webp"
        alt="GJ logo"
        className="relative h-[35.897px] w-14"
      />

      <nav
        className={`relative flex flex-row gap-5 md:gap-0
                            ${
                              burgClicked
                                ? `${BURGERSTYLE} md:scale-100 md:transition-transform md:duration-500`
                                : `${BURGERSTYLE} md:-translate-y-[60%] md:translate-x-[40%] md:scale-0 md:transition-transform md:duration-500`
                            }`}
      >
        {navItems.map((nav) => {
          if (nav.name !== "Kapcsolat") {
            return (
              <div
                key={nav.href}
                className="group relative flex justify-center"
              >
                <NavLink
                  onClick={handleNavItem}
                  to={nav.href}
                  style={({ isActive }) => {
                    return isActive ? { color: "white" } : {};
                  }}
                  className={`relative p-5 font-bold uppercase ${MENU_ITEM_STYLE} `}
                >
                  {nav.name}
                </NavLink>
                {nav.almenu ? (
                  <div
                    className="absolute left-[50%] top-[100%] z-10 flex 
                                origin-top -translate-x-[50%] -translate-y-[12%] scale-0 flex-col items-end bg-gradient-to-bl from-slate-300 to-[rgb(0_0_0_/_0)] backdrop-blur-sm transition-transform duration-500 [clip-path:polygon(0%_0%,100%_0%,100%_100%,92%_96%,84%_100%,77%_96%,70%_100%,63%_96%,56%_100%,49%_96%,42%_100%,35%_96%,28%_100%,21%_96%,14%_100%,7%_96%,0_100%)]
                                group-hover:translate-y-0 group-hover:scale-100 md:hidden"
                  >
                    {nav.almenu.map((alnav) => {
                      return (
                        <NavLink
                          key={alnav.href}
                          to={alnav.href}
                          style={({ isActive }) => {
                            return isActive ? { color: "white" } : {};
                          }}
                          className={`relative p-5 text-[.9rem] font-[500] uppercase italic ${MENU_ITEM_STYLE} `}
                        >
                          {alnav.name}
                        </NavLink>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          } else {
            return (
              <ScrollLink
                onClick={handleNavItem}
                key={nav.href}
                to={nav.href}
                scrollInfo={{ behavior: "smooth", block: "start" }}
                className={`relative p-5 font-bold uppercase
                            before:absolute before:left-[1.25rem] before:top-[20%] before:h-[2px] before:w-[calc(100%-2.5rem)]
                            before:origin-right before:scale-x-0 before:bg-white before:transition-transform
                            before:duration-500  before:content-[''] after:absolute after:left-[1.25rem] after:top-[80%]
                            after:h-[2px] after:w-[calc(100%-2.5rem)] after:origin-left after:scale-x-0 after:bg-white
                            after:transition-transform after:duration-500 after:content-[''] before:hover:origin-left
                            hover:before:scale-x-100 hover:after:block after:hover:origin-right hover:after:scale-x-100`}
              >
                {nav.name}
              </ScrollLink>
            );
          }
        })}
      </nav>

      <BurgerNav
        burgNavClicked={burgClicked}
        setBurgNavClicked={setBurgClicked}
      />
    </div>
  );
}

export default Nav;
