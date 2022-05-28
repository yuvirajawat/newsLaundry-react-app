import React, {useEffect, useState } from "react";
import Card from "./card";
export default function CardContainer(props){
    const [cards,setCards]=useState();
    const fillCards=React.useCallback(()=>{
        setCards(props.items.map((item)=>(<Card item={item} key={item.id} id={item.id} />)))
    },[props.items]);
    useEffect(()=>{fillCards()},[fillCards]);
    return (
    <div className="cards-container">
    {cards}
    </div>
    );
}