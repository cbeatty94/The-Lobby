import React, { useState } from 'react'
import './PlayerCards.css'
import TinderCard from 'react-tinder-card'


function PlayerCards() {
    const [people, Setpeople] = useState([
        {
            name: 'Dolphin',
            url: "https://cdn.pixabay.com/photo/2016/07/30/21/37/mario-1558062_960_720.jpg"
        },
        {
            name: 'BadLarry',
            url: 'https://cdn.pixabay.com/photo/2016/07/30/14/28/yoschi-1557253_960_720.jpg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <div className="playerCards">
            <div className="playerCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})` }}
                                className="card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                    </TinderCard>
                ))}

            </div>

        </div>
    )
}

export default PlayerCards
