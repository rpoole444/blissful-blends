import React, {useState, useEffect} from "react";



const Welcome = () =>{
  const [allStrains, setAllStrains] = useState([])
  const [ fetching, setFetch] = useState(false)

//   const fetchData = () => {
//      const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY || '' ,
// 		'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
// 	}
// };

//  return fetch('https://weed-strain1.p.rapidapi.com/?ordering=-strain', options)
// 	.then(response => response.json())
// 	.then(data => setAllStrains(data))
// 	.catch(err => console.error(err));
//   }

// useEffect(() => {
//   if(!fetching){
//     fetchData()
//     setFetch(true)
//     }
// }, [allStrains, fetching])
// console.log("allStrains: ", allStrains)
  return (
    <body className="App">
      <h1>Blissful Blends</h1>
      <section>
        <section>
          <div>
            <img />
            <section>
              <h2>Hybrid</h2>
              <p>Combination Strains</p>
            </section>
          </div>
        </section>
      </section>
    </body>
  );
}
export default Welcome