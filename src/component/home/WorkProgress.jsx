import { workFlow } from "../utility/datas";
import WorkFlowCard from "./WorkFlowCard";

function WorkProgress() {
    return (
        <section className="relative flex flex-row justify-evenly items-center py-11 bg-zinc-100
                            xmd:flex-col xmd:left-1/2 xmd:gap-20 xmd:-translate-x-[50%]">        
            {
                workFlow.map((progress) => {
                    return <WorkFlowCard key={ progress.name } name={ progress.name } description={ progress.description } icon={ progress.icon } />
                })
            }
        </section>
    );
}

export default WorkProgress;