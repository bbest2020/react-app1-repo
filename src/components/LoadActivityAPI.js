import React from 'react'

export default function LoadActivityFromData() {

    const [activity, setActivityData] = React.useState({});

    React.useEffect(() => {
        setData();
    }, []);

    function changeActivity() {
        setData();
    }

    function setData() {
        fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => setActivityData(data));
    }

    return (
        <div className="card">
        <h5 className="card-header">{activity.activity}</h5>
        <div className="card-body">
            <h5 className="card-title">Type: {activity.type}</h5>
            <p className="card-text">Participants: {activity.participants}</p>
            <button href="#" onClick={changeActivity} className="btn btn-primary">Change Activity</button>
        </div>
        </div>
    );
}