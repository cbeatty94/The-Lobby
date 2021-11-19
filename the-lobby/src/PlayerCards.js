import React, { useState } from 'react'
import './PlayerCards.css'
import TinderCard from 'react-tinder-card'


function PlayerCards() {
    const [people, Setpeople] = useState([
        {
            name: 'Dolphin',
            url: "https://pixnio.com/free-images/2018/06/13/2018-06-13-16-18-34-850x567.jpg"
        },
        {
            name: 'BadLarry',
            url: 'https://pixnio.com/free-images/2018/08/28/2018-08-28-18-02-58-850x567.jpg'
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
