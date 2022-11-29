import { useState } from "react";
import neneData from "./assets/nene_data.json";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from "./components/CardList";
import Team from "./components/Team";
import Navi from "./components/Navi";
import ConditionBar from "./components/ConditionBar";

neneData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [sortType, setSortType] = useState("rarity");
  const [cardType, setCardType] = useState("all");
  const [skillType, setSkillType] = useState("all");
  const [myTeam, setMyTeam] = useState([]);
  const [data, setData] = useState(neneData.sort((a, b) => {
    return a.star - b.star;
  }));

  const changeSortType = (type) => {
    if (type !== sortType) {
      setSortType(type);
      if (type === "release") {
        console.log("if");
        setData([...(neneData.sort((a, b) => {
          return a.date - b.date;
        }))])
      } else {
        console.log("else");
        setData([...(neneData.sort((a, b) => {
          return a.star - b.star;
        }))])
      }
    }
  }
  const changeCardType = (type) => {
    if (type !== cardType) {
      setCardType(type);
      setData(neneData.filter((item) => {
        return ((type === "all") ? 1 : item.type === type) 
        && 
        ((skillType === "all") ? 1 : item.skillType === skillType) ;
      }))
    }
  }
  const changeSkillType = (type) => {
    if (type !== skillType) {
      setSkillType(type);
      setData(neneData.filter((item) => {
        return ((cardType === "all") ? 1 : item.type === cardType) 
        && 
        ((type === "all") ? 1 : item.skillType === type) ;
      }))
    }
  }

  const onoffTeam = (item)  => {
    if (!myTeam.includes(item)) {
      setMyTeam([...myTeam, item]);
    } else {
      myTeam.splice(myTeam.indexOf(item), 1);
      setMyTeam([...myTeam]); // must do deep copy here, otherwise React will not rerender
    }
  }
  const reset = () => {
    setMyTeam([]);
  };

  return (
    <div className="App" style={{backgroundColor: '#34DD9A'}}>
      <Navi />
      <h1 className='my-4' idName='#top'>Welcome to Project Sekai Card Info Cheatsheet (Nene Only Demo)</h1>

      <div className='pt-3 pb-5 mb-5' style={{backgroundColor: '#23CC89'}}>
        <Team team={myTeam} reset={reset}/>
      </div>

      <div className='pb-5 mb-5'>
        <div className='pb-5'>
          <ConditionBar 
          sortType={sortType} 
          skillType={skillType} 
          cardType={cardType} 
          changeSortType={changeSortType} 
          changeCardType={changeCardType}
          changeSkillType={changeSkillType}
          />
        </div>

        <div>
          <CardList data={data} onClickOp={onoffTeam} />
        </div>
      </div>
    </div>
  );
}

export default App;
