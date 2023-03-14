import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CreateScoreCards";




const GetNBAScores = () => {


const [NBAresults, setNBAResults] = useState([]);
const searchNBAScores = async () => {
  const response = await funcs.scoresBySport('basketball_nba');
  setNBAResults(response);
  console.log(response);
};


useEffect(() => {
  searchNBAScores();
}, []);


return (
  <section>
    <CreateCards results = {NBAresults}/>
  </section>
);
}


export default GetNBAScores;
