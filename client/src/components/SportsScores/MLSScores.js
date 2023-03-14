import React from "react";
import * as funcs from "../../utils/sportsApi";
import { useState, useEffect } from "react";
import CreateCards from "../CreateScoreCards";




const GetMLSScores = () => {


const [MLSresults, setMLSResults] = useState([]);
const searchMLSScores = async () => {
  const response = await funcs.scoresBySport('soccer_usa_mls');
  setMLSResults(response);
  console.log(response);
};


useEffect(() => {
  searchMLSScores();
}, []);


return (
  <section>
    <CreateCards results = {MLSresults}/>
  </section>
);
}


export default GetMLSScores;

