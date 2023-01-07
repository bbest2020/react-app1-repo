import React from "react";

export default function UseOfRefHook() {

    const [name, setName] = React.useState("Mr. Ex.....");
    const nameRef = React.useRef(null);
    function changName() {
        nameRef.current.focus();
        setName(nameRef.current.value);
        nameRef.current.value = null;
    }
    return (
        <div className="card mt-3">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div class="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter new name" ref={nameRef}/>
            <button onClick={changName} className="btn btn-outline-secondary" type="button" id="button-addon2">Change Name</button>
            </div>
        </div>
        </div>
    )
}