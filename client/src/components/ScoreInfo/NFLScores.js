import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CreateScoreCards";


const GetNFLScores = () => {

const [NFLresults, setNFLResults] = useState([]);
const searchNFLScores = async () => {
  const response = await funcs.scoresBySport('americanfootball_xfl');
  setNFLResults(response);
  console.log(response);
};

useEffect(() => {
  searchNFLScores();
}, []);

return (
  <section>
    {/* <CreateCards results = {NFLresults}/> */}
  </section>
);
}

export default GetNFLScores;