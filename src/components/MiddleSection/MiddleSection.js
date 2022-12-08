import Skills from "../Skills/Skills"
import ThisWebsite from "../ThisWebsite/ThisWebsite";

const MiddleSection = () => {
    return(
        <div className="flex justify-around">
            <Skills />
            <ThisWebsite />
        </div>
    );
}

export default MiddleSection;