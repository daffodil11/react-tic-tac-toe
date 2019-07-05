import React from 'react';
import Square from './Square';

const Grid = () => {
    return (
        <section>
            <div>
                {Array.from({ length: 9 }, _ => <Square />)}
            </div>
            <p>Player 1 wins</p>            
        </section>
    );
};

export default Grid;