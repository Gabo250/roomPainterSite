import useMetaDataChange from "../hooks/useMetaDataChange";
import { NotFoundIcon } from "../utility/Icons";


function NotFound() {
    useMetaDataChange("404 - ERROR", "Az oldal nem található", window.location.href);

    return (
      <section className="relative flex h-[40vh] items-center justify-center bg-neutral-800">
        <p className="flex flex-col items-center text-center text-[2rem] text-gray-300 sm:text-[1.5rem]">
          <NotFoundIcon />
          <span className="mr-5 text-[3rem] font-bold text-red-300 sm:mr-2 sm:text-[3rem]">
            404
          </span>
          <span className="text-[1.5rem] italic text-red-100 sm:text-[1.5rem]">
            {window.location.href}
          </span>
          Az oldal nem található!
        </p>
      </section>
    );
}

export default NotFound;