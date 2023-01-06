import React from "react";

export default function FooterPage() {
    const [count, setCount] = React.useState(0);

    function plusCount() {
        setCount((prevCount) => {
            return prevCount + 1
        });
    }

    function minusCount() {
        setCount((prevCount) => {
            return prevCount - 1
        });
    }

    return (
        <div className="card mt-3">
        <div className="card-body">
        <div className="btn-group" >
            <button type="button" class="btn btn-primary" onClick={plusCount}>Plus</button>
            <span  className="btn btn-primary">{count}</span>
            <button type="button" className="btn btn-primary" onClick={minusCount}>Minus</button>
        </div>
        </div>
        </div>
    );
}