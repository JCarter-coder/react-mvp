import { useState } from "react";

function Response({ response, getResponse }) {
    // Local state
    const [userResponse, setUserResponse] = useState("");

    /* const getUserResponse = (info) => {
        getResponse(info);
        setUserResponse({});
    } */

    const recordResponse = (e) => {
        console.log(e.target);
        setUserResponse(e.target.value);
        console.log(userResponse);
        getResponse(userResponse);
        setUserResponse({});
    }

    const handleClick = () => {
        recordResponse();
    }


    return (
        <div>
            <h3>Inside Response Component</h3>
            <input 
                type="text"
                placeholder="Let's add an activity!"
                value={userResponse}
                /*onChange={recordResponse}
                onKeyDown={submitResponse} */
            />
            <button onClick={() => handleClick()}>Submit</button>

        </div>
    )
}

export default Response;