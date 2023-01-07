import React from "react";

export default function UseOfReducerHook() {
    // Using multiple useState hook
    // const [count, setCount] = React.useState(0);
    // const [showHideTitle, setShowHideTitle] = React.useState(true);


    // return(
    //     <div className="card mt-3">
    //     {showHideTitle && <h5 className="card-header">Use of ReducerHook Title</h5>}
    //     <div className="card-body">
    //         <button className="btn btn-primary" 
    //         onClick={() => 
    //         setShowHideTitle(prevShowHideTitle => !prevShowHideTitle)}>
    //             Hide/Show Title</button>
    //         <h5 className="card-title">{count}</h5>
    //         <button className="btn btn-primary" 
    //         onClick={() => 
    //         setCount(prevCount => prevCount + 1)}>
    //             Increment</button>
    //     </div>
    //     </div>
    // )

    const [count, setCount] = React.useState(0);
    const [showHideTitle, setShowHideTitle] = React.useState(true);

    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT":
                return {count: state.count + 1, showHideTitle: state.showHideTitle};
            case "HIDESHOWTITLE":
                return {count: state.count, showHideTitle: !state.showHideTitle};
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, 
        {count: 0, showHideTitle: true})


    return(
        <div className="card mt-3">
        {state.showHideTitle && <h5 className="card-header">Use of ReducerHook Title</h5>}
        <div className="card-body">
            <button className="btn btn-primary" 
            onClick={() => dispatch({type: "HIDESHOWTITLE"})}>
                Hide/Show Title</button>
            <h5 className="card-title">{state.count}</h5>
            <button className="btn btn-primary" 
            onClick={() => dispatch({type: "INCREMENT"})}>
                Increment</button>
        </div>
        </div>
    )
}