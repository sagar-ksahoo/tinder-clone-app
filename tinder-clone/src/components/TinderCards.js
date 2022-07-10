import {React, useState} from 'react'
import "./TinderCards.css"

import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: 
            "https://media.wired.com/photos/628fe072319fcfcacdc6b8b3/3:2/w_1280%2Cc_limit/Elon-Musk-Twitter-Free-Speech-Business-1395371348.jpg"
        },
        
        {
            name: "Jeff Bezos",
            url: 
            "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);

        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");


    }

  return (
    <div className="tinderCards">

        <div className="tinderCards__cardContainer">
            {
                people.map((character) => (
                    <TinderCard
                        className='swipe'
                        key={character.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen = {() => outOfFrame(character.name)}
                    >
                        

                    <div
                        style={{backgroundImage: `url(${character.url})`}}
                        className="card"
                    >

                        <h3>{character.name}</h3>

                    </div>

                    </TinderCard>
                ))
            }
        </div>

        
    </div>
  )
}

export default TinderCards