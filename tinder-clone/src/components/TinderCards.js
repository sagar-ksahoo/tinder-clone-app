import {React, useEffect, useState} from 'react'
import "./TinderCards.css"

import axios from '../axios';

import TinderCard from "react-tinder-card"
//import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, [])

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
                        style={{backgroundImage: `url(${character.imgUrl})`}}
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