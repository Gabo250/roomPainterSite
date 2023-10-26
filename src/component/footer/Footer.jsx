import { Link } from "react-router-dom";
import { EmailIcon, PhoneIcon } from "../utility/Icons";
import { navItems } from "../utility/datas";
import ScrollLink from "../header/ScrollLink";
import useMounted from "../utility/useMounted";

function Footer() {
    const hasMounted = useMounted();
    if (!hasMounted) {
        return null;
    }

    return (
        <footer id="conn" className="flex flex-row justify-evenly items-center py-10 bg-slate-600 xsm:flex-col xsm:gap-10">
            <article className="flex flex-col gap-2">
                <img src="./img/logo.webp" alt="GJ logo" className="relative w-14 h-10 left-[50%] -translate-x-[50%] bottom-4" />
                <div className="flex flex-row gap-2">
                    <PhoneIcon />
                    <span className="italic select-text font-semibold text-zinc-300">+36(20)-205-2463</span>
                </div>

                <div className="flex flex-row gap-2">
                    <EmailIcon />
                    <span className="italic select-text font-semibold text-zinc-300">geringerjani@gmail.com</span>
                </div>
            </article>

            <article>
                <nav className="flex flex-col">
                    {
                        navItems.map((item) => {
                            if (item.name !== "Kapcsolat") {
                                return (                                
                                    <Link key={ item.href } to={ item.href } className="relative font-semibold text-center py-2 text-zinc-300 group"
                                    >
                                        <span className="relative py-2
                                                        after:content-[''] after:absolute after:w-[100%] after:scale-x-0 after:transition-transform after:duration-500 after:h-[2.5px] after:bg-slate-900 after:top-[90%]
                                                        after:left-0  group-hover:after:block after:origin-left group-hover:after:origin-right group-hover:after:scale-x-100
                                                        before:content-[''] before:absolute before:top-[10%] before:left-0 before:w-[100%] before:transition-transform
                                                        before:duration-500 before:h-[2.5px] before:bg-slate-900 before:scale-x-0 before:origin-right group-hover:before:origin-left group-hover:before:scale-x-100">
                                            { item.name }
                                        </span>
                                    </Link>
                                );
                            }
                            else {
                                return (
                                    <ScrollLink key={ item.href } to={ item.href } scrollInfo={ {behavior: "smooth", block: "start"} } className={ "relative font-semibold text-center py-2 text-zinc-300 group" } >
                                        <span  className={`relative py-2
                                                        after:content-[''] after:absolute after:w-[100%] after:scale-x-0 after:transition-transform after:duration-500 after:h-[2.5px] after:bg-slate-900 after:top-[90%]
                                                        after:left-0  group-hover:after:block after:origin-left group-hover:after:origin-right group-hover:after:scale-x-100
                                                        before:content-[''] before:absolute before:top-[10%] before:left-0 before:w-[100%] before:transition-transform
                                                        before:duration-500 before:h-[2.5px] before:bg-slate-900 before:scale-x-0 before:origin-right group-hover:before:origin-left group-hover:before:scale-x-100`}>
                                            { item.name }
                                        </span>
                                    </ScrollLink>
                                );
                            }                           
                        })
                    }
                </nav>
            </article>
        </footer>
    );   
}

export default Footer;