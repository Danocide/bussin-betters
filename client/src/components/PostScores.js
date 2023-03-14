import React from "react";
import * as funcs from "../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "./CreateScoreCards";


const GetScores = () => {
const [results, setResults] = useState([]);

const searchScores = async () => {
  const response = await funcs.scoresBySport('baseball_mlb_preseason');
  setResults(response);
  console.log(response);
};

useEffect(() => {
  searchScores();
}, []);

return (
  <section>
    <CreateCards results = {results}/>
  </section>
);
}

export default GetScores;