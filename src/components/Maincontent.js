import Education from "./Education";
import Objective from "./Objective"
import Technology from "./Techology";
import Result from "./Result";
import Accomplishments from "./Accomplishments";

const Maincontent = () => {
    return (
        <>
            <Objective />
            <Education />
            <Technology />
            <Result />
            <Accomplishments />
            <div id="contact-me">
                <h3>Contact me</h3>
                <h5>Mobile Number: (000)000-0000</h5>
            </div>
        </>
    )
}

export default Maincontent;