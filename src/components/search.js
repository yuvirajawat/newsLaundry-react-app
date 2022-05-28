import React, { useState } from "react";
export default function Search({getFilteredItems}){
    const [searchField, setSearchField]=useState("");
    return (
        <div className="search-box">
            <div className="input-container">
                <input onChange={e=>setSearchField(e.target.value)}
                    onKeyDown={()=>getFilteredItems(searchField)}
                    placeholder="Search Headline"
                    type="text"
                />
            </div>
            <button onClick={()=>getFilteredItems(searchField)} className="search-btn">Search</button>
        </div>);
}