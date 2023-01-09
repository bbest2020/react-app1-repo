import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function ContactPage() {
    //http://localhost:3000/contact/abc?first=rajesh&second=vadhasiya
    //hit above URL to see use cases
    // we can also use useHistory() hook to redirect to another page
    let navigate = useNavigate();
    let {username} = useParams();
    let query = new URLSearchParams(useLocation().search);
    return(
        <div>
            This is Contact Page {username} <br></br>
            First Param: {query.get('first')}
            Second Param: {query.get('second')}
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    )
}