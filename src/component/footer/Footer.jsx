import { Link } from "react-router-dom";
import { EmailIcon, PhoneIcon } from "../utility/Icons";
import { navItems } from "../utility/datas";
import ScrollLink from "../header/ScrollLink";

function Footer() {
    return (
      <footer
        id="conn"
        className="flex flex-row items-center justify-evenly bg-slate-800 py-10 xsm:flex-col xsm:gap-10"
      >
        <article className="flex flex-col gap-2">
          <img
            src="./img/gj-logo.webp"
            alt="GJ logo"
            className="relative bottom-4 left-[50%] h-[35.897px] w-14 -translate-x-[50%]"
          />

          <div className="mb-2 text-center">
            <span className="text-xl text-zinc-300">Geringer János EV.</span>
          </div>

          <div className="flex flex-row gap-2">
            <PhoneIcon />
            <span className="select-text font-semibold italic text-zinc-300">
              +36(20)-205-2463
            </span>
          </div>

          <div className="flex flex-row gap-2">
            <EmailIcon />
            <span className="select-text font-semibold italic text-zinc-300">
              geringerjani@gmail.com
            </span>
          </div>
        </article>

        <article>
          <nav className="flex flex-col">
            {navItems.map((item) => {
              if (item.name !== "Kapcsolat") {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group relative py-2 text-center font-semibold text-zinc-300"
                  >
                    <span
                      className="relative py-2
                                before:absolute before:left-0 before:top-[10%] before:h-[2.5px] before:w-[100%] before:origin-right before:scale-x-0 before:bg-slate-900 before:transition-transform
                                before:duration-500  before:content-[''] after:absolute after:left-0 after:top-[90%]
                                after:h-[2.5px] after:w-[100%] after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform
                                after:duration-500 after:content-[''] group-hover:before:origin-left group-hover:before:scale-x-100 group-hover:after:block group-hover:after:origin-right group-hover:after:scale-x-100"
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              } else {
                return (
                  <ScrollLink
                    key={item.href}
                    to={item.href}
                    scrollInfo={{ behavior: "smooth", block: "start" }}
                    className={
                      "group relative py-2 text-center font-semibold text-zinc-300"
                    }
                  >
                    <span
                      className={`relative py-2
                                  before:absolute before:left-0 before:top-[10%] before:h-[2.5px] before:w-[100%] before:origin-right before:scale-x-0 before:bg-slate-900 before:transition-transform
                                  before:duration-500 before:content-[''] after:absolute after:left-0 after:top-[90%]
                                  after:h-[2.5px] after:w-[100%] after:origin-left after:scale-x-0 after:bg-slate-900 after:transition-transform
                                  after:duration-500 after:content-[''] group-hover:before:origin-left group-hover:before:scale-x-100 group-hover:after:block group-hover:after:origin-right group-hover:after:scale-x-100`}
                    >
                      {item.name}
                    </span>
                  </ScrollLink>
                );
              }
            })}
          </nav>
        </article>
      </footer>
    );   
}

export default Footer;