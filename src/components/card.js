import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Card(props){
    const [isfav, setFav]=useState(()=>{
        return JSON.parse(localStorage.getItem(props.id));
    });
    function handleFav(){
    if(isfav==null){setFav(true);}
    else{
        setFav(!isfav);
    }
    }
    useEffect(()=>{localStorage.setItem(props.id,JSON.stringify(isfav))},[props.id,isfav]);
        return (
                    <div className="card" id={props.id}>
                    <img className="hero-img" src="https://qtstage-01.gumlet.com/ace/2020-05/c780cbb8-9321-4481-b45b-acca73ba2f12/1e01fe9ad9084af59f74f32dc92deee2_18.jpg" alt="hero-img"/>
                        <div className="card-content">
                            <div className="row">
                            <p className="slug">entertainment</p>
                            {isfav ?<FavoriteIcon className="markFav Fav" onClick={handleFav}/>:<FavoriteBorderIcon className="markFav" onClick={handleFav}/>}
                            </div>
                            <h3 className="card-headline">{props.item.story.headline}</h3>
                            <div className="publication">
                                <p className="author">{props.item.story["author-name"]}</p>
                                <p className="date">{new Date(props.item.story["last-published-at"]).toDateString().split(" ").slice(1).join(" ")}</p>
                            </div>
                        </div>
                    </div>
         );
}