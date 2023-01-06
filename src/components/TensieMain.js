import React from 'react';
import TensieDice from './TensieDice';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

export default function TensieMain() {

    const [dice, setDice] = React.useState(getNewDice());
    const [gameWon, setGameWon] = React.useState(false);

    React.useEffect(() => {
        const allHeld = dice.every( d => d.isHeld);
        const dValue = dice[0].value;
        const allSame = dice.every(d => dValue === d.value);
        if (allHeld && allSame) {
            setGameWon(true);
        }
    }, [dice]);

    function getNewDice() {
        let dice = [];
        [...Array(10).keys()].map(index => {
            return dice.push(generateTensieObject())
        });
        return dice;
    }

    function generateTensieObject() {
        return {
            id: nanoid(), 
            isHeld: false, 
            value: Math.floor(Math.random() * 6)
        };
    }

    function rollDice() {
        if (gameWon) {
            setGameWon(false);
            setDice(getNewDice());
        }else{
            setDice((prevDice) => {
                return prevDice.map( d => {
                    return d.isHeld ?
                    d :
                    generateTensieObject()
                })
            })
       }
    }

    function heldDice(id) {
        console.log(id);
        setDice((prevDice) => {
            return prevDice.map( d => {
                return id === d.id ? 
                {...d, isHeld : !d.isHeld} :
                d;
            });
        })
    }

    const tensieDiceElements = dice.map(dice => 
    <TensieDice key={dice.id} isHeld={dice.isHeld} value={dice.value} heldDice={() => heldDice(dice.id)}/>);

    return (
    <div className="card">
            <h5 className="card-header">Play Tensie Game</h5>
            {gameWon && <span className="badge bg-secondary">You won the game!!!{<Confetti/>}</span>}
            <div className="card-body w-100">
            {tensieDiceElements}
            </div>
            <button className="btn btn-danger" onClick={rollDice}>{gameWon?"Reset Game":"Roll"}</button>
           
    </div>
    )
}
