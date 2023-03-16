import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CardCreate/CreateAllCards";




const GetMLBOdds = () => {


// const [MLBresults, setMLBResults] = useState([]);
// const searchMLBScores = async () => {
//   const response = await funcs.scoresBySport('baseball_mlb_preseason');
//   setMLBResults(response);
//   console.log(response);
// };

// useEffect(() => {
//   searchMLBScores();
// }, []);

const [oddsResults, setoddsResults] = useState([]);
const searchMLBOdds = async () => {
  const response = await funcs.getOddsBySport('baseball_mlb_preseason', 'us', 'american', 'h2h,totals,spreads');
  setoddsResults(response);
  console.log(response);
};

useEffect(() => {
  searchMLBOdds();
}, []);



return (
  <section>
    <CreateCards 
    // scoreresults = {MLBresults}
    results = {oddsResults} />
  </section>
);
}


export default GetMLBOdds;

