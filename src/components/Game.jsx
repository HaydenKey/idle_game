import React, { useState, useEffect } from 'react';
import BuyButton from './BuyButton';

function Game() {
    const [money, setMoney] = useState(0);
    const [numMiners, setNumMiners] = useState(0);
    const [numDrillers, setNumDrillers] = useState(0);
    const [numMiningTeam, setNumMiningteam] = useState(0);
    const [numMiningCompanies, setNumMiningCompanies] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMoney(money => money + 
                ((numMiners * 1) + 
                (numDrillers * 5) +
                (numMiningTeam * 10) + 
                (numMiningCompanies * 50))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>${money}</p>

            <p>Number of Miners: {numMiners}</p>
            <button onClick={() => {setNumMiners(numMiners + 1)}}>
                Buy Miner
            </button>

            <p>Number of Drillers: {numDrillers}</p>
            <button onClick={() => setNumDrillers(numDrillers + 1)}>
                Buy Driller
            </button>

            <p>Number of Mining Teams: {numMiningTeam}</p>
            <button onClick={() => setNumMiningteam(numMiningTeam + 1)}>
                Buy Mining Team
            </button>

            <p>Number of Mining Companies: {numMiningCompanies}</p>
            <button onClick={() => setNumMiningCompanies(numMiningCompanies + 1)}>
                Buy Mining Company
            </button>

            <br></br>
            <br></br>
            <button onClick={() => setMoney(money + 1)}>
                hit rock
            </button>

        </div>
    );
}

export default Game;