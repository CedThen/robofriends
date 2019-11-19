import React from 'react'
import Card from './Card.js';


const CardList = ({robots}) =>
{
   

    // const cardComponent = robots.map((user,i) => {
    //     return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    // });
    let CardArray = robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
    });

    return(
        <div>
            {CardArray}
        </div>
    );
}


export default CardList;