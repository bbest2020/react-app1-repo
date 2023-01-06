import React from "react";

const names = ["a", "b", "c"].map(n => {
return <p><span className="badge bg-secondary">{n}</span></p>
});
export default function DisplayName() {
    return (<p>{names}</p>);
}
