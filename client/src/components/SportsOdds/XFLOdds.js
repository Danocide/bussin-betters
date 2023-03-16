import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CardCreate/CreateAllCards";




const GetXFLOdds = () => {


// const [NFLresults, setNFLResults] = useState([]);
// const searchNFLScores = async () => {
//   const response = await funcs.scoresBySport('americanfootball_xfl');
//   setNFLResults(response);
//   console.log(response);
// };


// useEffect(() => {
//   searchNFLScores();
// }, []);

const [oddsResults, setoddsResults] = useState([]);
const searchXFLOdds = async () => {
  const response = await funcs.getOddsBySport('americanfootball_xfl', 'us', 'american', 'h2h,totals,spreads');
  setoddsResults(response);
  console.log(response);
};

useEffect(() => {
  searchXFLOdds();
}, []);


return (
  <section>
    <CreateCards results = {oddsResults}/>
  </section>
);
}


export default GetXFLOdds;
