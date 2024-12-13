// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from "react"

const UncForm = () => {
    const {name, setName} = useState("");
    const nameRef = useRef(null);
    const showName = () => {
        setName(nameRef.current.value)
        alert(name);
    }
    return (
        <div>
            <label htmlFor="">Name :</label>
            <input type="text" placeholder="enter your name" ref={nameRef} />
            <button onClick={showName} className="border-2">Show Name</button>
        </div>
    )
}

export default UncForm