import React, {useState, useEffect} from "react";
import "./Welcome.css"
import Header from "../Header/Header";
import { apiCalls } from "../apiCalls";


const Welcome = () =>{
  const [allStrains, setAllStrains] = useState([])
  const [ fetching, setFetch] = useState(false)

  const fetchData = (): void => {
  apiCalls.getAllStrains()
	  .then(data => setAllStrains(data))
	  .catch(err => console.error(err));
  }

useEffect(() => {
  if(!fetching){
    fetchData()
    setFetch(true)
    }
}, [allStrains, fetching])
console.log("allStrains: ", allStrains)
  return (
    <section className="App">
      <Header fetchData={fetchData} allStrains={allStrains}/>
      <section>
        <section className="card-container">
          <section>
            <section className="main-page-boxs">
              <img />   
              <h2>Hybrid</h2>
              <p>Combination Strains</p>
            </section>
          </section>
          <section className="sativa-indica-container">
            <section className="main-page-boxs">
                <img /> 
                <h2>Sativa</h2>
                <p>Combination Strains</p>
              </section>
              <section className="main-page-boxs">
                <img />
                <h2>Indica</h2>
                <p>Combination Strains</p>
              </section>
          </section>
        </section>
      </section>
    </section>
  );
}
export default Welcome