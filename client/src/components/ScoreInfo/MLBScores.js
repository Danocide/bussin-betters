import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CreateScoreCards";


const GetMLBScores = () => {

const [MLBresults, setMLBResults] = useState([]);
const searchMLBScores = async () => {
  const response = await funcs.scoresBySport('baseball_mlb_preseason');
  setMLBResults(response);
  console.log(response);
};

useEffect(() => {
  searchMLBScores();
}, []);

return (
  <section>
    {/* <CreateCards results = {MLBresults}/> */}
  </section>
);
}

export default GetMLBScores;