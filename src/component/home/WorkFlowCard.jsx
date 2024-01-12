import { useRef } from "react";
import Card from "../utility/Card";
import useViewBox from "../hooks/useViewBox";

function WorkFlowCard({ name, description, icon }) {
  const titleRef = useRef();
  const descRef = useRef();
  const iconRef = useRef();

  const titleInViewBox = useViewBox(titleRef);
  const descInViewBox = useViewBox(descRef);
  const iconInViewBox = useViewBox(iconRef);

  return (
    <Card
      variant="vertical"
      shadow="xl2"
      className="relative h-[26rem] w-80 items-center gap-3 rounded-2xl bg-gray-100 p-5
                shadow-slate-500 2xsm:w-11/12 xsm:h-auto"
    >
      <div
        ref={iconRef}
        className={iconInViewBox ? "animate-fade-in" : "opacity-0"}
      >
        {icon}
      </div>

      <h2
        ref={titleRef}
        className={`text-[2rem] font-semibold uppercase transition-transform duration-700
                    ${
                        titleInViewBox
                            ? "origin-top scale-y-100"
                            : "scale-y-0"
                    }`}
      >
        {name}
      </h2>
      <p
        ref={descRef}
        className={`text-justify leading-6 transition-transform duration-700
                    ${
                        descInViewBox
                            ? " origin-bottom scale-y-100"
                            : "scale-y-0"
                    }`}
      >
        {description}
      </p>
    </Card>
  );
}

export default WorkFlowCard;
