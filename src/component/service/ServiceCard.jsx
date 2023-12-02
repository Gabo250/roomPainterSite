import { Link } from "react-router-dom";
import Button from "../utility/Button";
import getObjKeysValues from "../utility/GetObjKeysValues";
import { ArrowRightCircleIcon } from "../utility/Icons";

function ServiceCard({ data, name, id }){
    const [nameKeys] = getObjKeysValues(data);

    return (
            <section className="flex flex-col bg-gradient-to-r from-[40%] from-zinc-300 to-zinc-500 py-20 items-center">
                {
                    nameKeys.map((title, id) => {                        
                        const [listKeys, listValues] = getObjKeysValues(data[title]);
                        listKeys.shift();
                        listValues.shift();

                        return (
                            <article key={ title } className={ `relative flex flex-col py-20 px-20 text-[17px] w-[68rem] lg:w-11/12 lg:px-0
                                                                after:absolute
                                                                ${ id !== nameKeys.length - 1 ? `after:w-1/2 after:top-full after:left-1/2 after:-translate-x-[50%] after:border-b-2` : '' }` 
                                                                } > 
                                <h2 className="mb-8 font-bold text-4xl text-lime-800">{ title }</h2>
                                <p className="mb-4 text-justify">{ data[title].description }</p>
                                <ul className="flex flex-col gap-2">
                                    {
                                        listKeys.map((item, id) => {
                                            return (
                                                <li key={ item } className="flex flex-row gap-2 xsm:flex-col">
                                                    <p className="text-white whitespace-nowrap italic underline">{ item + ':' }</p>
                                                    <p className="text-justify">{ listValues[id] }</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </article>
                        )
                    })
                }

                <Button variant={ "base" } color={ "slate-transparent" } className={ "relative p-4 shadow-lg justify-start shadow-stone-400 hover:shadow-stone-600" }>
                    <Link to={ `../arak#${ id }` } className="flex flex-row items-center gap-2  text-lg">{ `${ name } ár` } <ArrowRightCircleIcon strokeColor={ "rgb(148 163 184)" } className={ "w-8 h-8" } /></Link>
                </Button>
            </section>
    );
}

export default ServiceCard;