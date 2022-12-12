import Skills from "../Skills/Skills"
import Sections from "../Sections/Sections";

const MiddleSection = () => {
    return(
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-x-20">
            <Skills />
            <Sections />
        </div>
    );
}

export default MiddleSection;