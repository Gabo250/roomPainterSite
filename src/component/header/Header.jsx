import { headerTexts } from "../utility/datas";
import Nav from "./Nav";
import TimedText from "./TimedText";

function Header() {

    return (
      <header className="relative z-[1] overflow-hidden">
        <Nav />
        <div className="relative z-[-1] h-[40rem] w-full bg-brushes bg-cover bg-fixed bg-no-repeat grayscale-[70%] 2xsm:h-[25rem]"></div>
        <TimedText text={headerTexts} interval={2000} />
      </header>
    );
}

export default Header;