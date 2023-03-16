import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateMLSCards from "../CardCreate/CreateMLSCards";




const GetMLSOdds = () => {


// const [MLSresults, setMLSResults] = useState([]);
// const searchMLSScores = async () => {
//   const response = await funcs.scoresBySport('soccer_usa_mls');
//   setMLSResults(response);
//   console.log(response);
// };


// useEffect(() => {
//   searchMLSScores();
// }, []);

const [oddsResults, setoddsResults] = useState([]);
const searchMLSOdds = async () => {
  const response = await funcs.getOddsBySport('soccer_usa_mls', 'us', 'american', 'h2h,totals,spreads');
  setoddsResults(response);
  console.log(response);
};

useEffect(() => {
  searchMLSOdds();
}, []);



return (
  <section>
    <CreateMLSCards results = {oddsResults}/>
  </section>
);
}


export default GetMLSOdds;

