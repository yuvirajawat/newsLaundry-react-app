import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header";
import Search from "./components/search";
import CardContainer from './components/card-container';

function App() {
  const [items,setItems]=useState([]);
  const [filteredItems, setFilteredItems]=useState([]);
  const [isFiltered,setIsFiltered]=useState(false);
  const [searchFieldValue, setSearchFieldValue]=useState("");
  const REQUEST_API_URL="https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment#";
  
  const getFilteredItems=(childData)=>{
  setSearchFieldValue(childData);
  setIsFiltered(true);
  renderFiltered();
  if(searchFieldValue===""){
    setItems(items)
    setIsFiltered(false);
  }
  }
  function renderFiltered()
  {
    const searchableString=searchFieldValue.toLowerCase();
    const itemsData= items.filter((item)=>{ return item.story.headline.toLowerCase().includes(searchableString)});
    setFilteredItems(itemsData);
  }
  async function getItems(){
    await fetch(REQUEST_API_URL)
                  .then((res) => res.json())
                  .then((json) => {
                      setItems(json.items);
                  })
  }
  useEffect(()=>{
    getItems();
  },[])
  return (
    <div className="App">
     <Header />
      <div className="body">
      <Search getFilteredItems={getFilteredItems}/>
        <h2 className="card-container-heading">Latest</h2>
          {isFiltered?<CardContainer items={filteredItems}/>:<CardContainer items={items}/>}
      </div>
    </div>
  );
}

export default App;
