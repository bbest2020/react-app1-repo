import React from "react";

export default function Home() {
    const [theme, setTheme] = React.useState('primary');
    let btnTheme = `btn btn-${theme}`;

    function changeTheme() {
        setTheme((preTheme) => {
            return preTheme === 'primary' ? 'success' : 'primary';
        })
    }
    return (
        <div className="card mt-3">
        <div className="card-body">
            Welcome to <b>Home Page</b> 
            <button type="button" className={btnTheme} onClick={changeTheme}>Flip Color</button>
        </div>
        </div>
    );
}