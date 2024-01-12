import { workFlow } from "../utility/datas";
import WorkFlowCard from "./WorkFlowCard";

function WorkProgress() {
    return (
      <section
        className="relative flex flex-row items-center justify-evenly bg-zinc-100 py-11
                    xmd:left-1/2 xmd:-translate-x-[50%] xmd:flex-col xmd:gap-20"
      >
        {workFlow.map((progress) => {
          return (
            <WorkFlowCard
              key={progress.name}
              name={progress.name}
              description={progress.description}
              icon={progress.icon}
            />
          );
        })}
      </section>
    );
}

export default WorkProgress;