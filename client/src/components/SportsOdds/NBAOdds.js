import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CardCreate/CreateAllCards";




const GetNBAScores = () => {


// const [NBAresults, setNBAResults] = useState([]);
// const searchNBAScores = async () => {
//   const response = await funcs.scoresBySport('basketball_nba');
//   setNBAResults(response);
//   console.log(response);
// };


// useEffect(() => {
//   searchNBAScores();
// }, []);

const [oddsResults, setoddsResults] = useState([]);
const searchNBAOdds = async () => {
  const response = await funcs.getOddsBySport('basketball_nba', 'us', 'american', 'h2h,totals,spreads');
  setoddsResults(response);
  console.log(response);
};

useEffect(() => {
  searchNBAOdds();
}, []);


return (
  <section>
    <CreateCards results = {oddsResults}/>
  </section>
);
}


export default GetNBAScores;
