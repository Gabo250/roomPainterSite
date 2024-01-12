import { Link } from "react-router-dom";
import Button from "../utility/Button";
import getObjKeysValues from "../utility/GetObjKeysValues";
import { ArrowRightCircleIcon } from "../utility/Icons";

function ServiceCard({ data, name, id }) {
  const [nameKeys] = getObjKeysValues(data);

  return (
    <section className="flex flex-col items-center bg-gradient-to-r from-zinc-300 from-[40%] to-zinc-500 py-20">
      {nameKeys.map((title, id) => {
        const [listKeys, listValues] = getObjKeysValues(data[title]);
        listKeys.shift();
        listValues.shift();

        return (
          <article
            key={title}
            className={`relative flex w-[68rem] flex-col px-20 py-20 text-[17px] after:absolute lg:w-11/12 lg:px-0
                        ${
                          id !== nameKeys.length - 1
                            ? `after:left-1/2 after:top-full after:w-1/2 after:-translate-x-[50%] after:border-b-2`
                            : ""
                        }`}
          >
            <h2 className="mb-8 text-4xl font-bold text-lime-800">{title}</h2>
            <p className="mb-4">{data[title].description}</p>
            <ul className="flex flex-col gap-2">
              {listKeys.map((item, id) => {
                return (
                  <li
                    key={item}
                    className="flex flex-row items-start gap-2 xsm:flex-col"
                  >
                    <p className="whitespace-nowrap text-2xl italic text-white underline">
                      {item + ":"}
                    </p>
                    <p className="mt-[.4rem]">{listValues[id]}</p>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}

      <Button
        variant={"base"}
        color={"slate-transparent"}
        className={
          "relative justify-start p-4 shadow-lg shadow-stone-400 hover:shadow-stone-600"
        }
      >
        <Link
          to={`../arak#${id}`}
          className="flex flex-row items-center gap-2  text-lg"
        >
          {`${name} ár`}{" "}
          <ArrowRightCircleIcon
            strokeColor={"rgb(148 163 184)"}
            className={"h-8 w-8"}
          />
        </Link>
      </Button>
    </section>
  );
}

export default ServiceCard;
