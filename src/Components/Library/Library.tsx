import React, { useEffect } from "react";
import './Library.css'
import Header from "../Header/Header";
import CannaCard from "../CannaCard/CannaCard";
interface LibraryProps {
  fetchData: () => void;
  allStrains: Array<any>;
  card: string;
  setFavorited: (favorites: Array<any>) => void;
  favorites: Array<any>;
}

const Library: React.FC<LibraryProps> = ({fetchData, allStrains, card, setFavorited, favorites}) => {
  
  // useEffect(() => {

  // }, [allStrains])
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorited(savedFavorites);
  }, [setFavorited]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const allStrainCards = allStrains?.map(strain => <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites} />)
  const hybridCards = allStrains?.map(strain => {
    if(strain.strainType === "Hybrid"){
      return <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites} />
    }
  })

  const sativaCards = allStrains?.map(strain => {
    if(strain.strainType === "Sativa"){
      return <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites}/>
    }
  })
  const indicaCards = allStrains?.map(strain => {
    if(strain.strainType === "Indica"){
      return <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites}/>
    }
  })
  
  const determineRender = () => {
            if(card === 'Hybrids') {
                return allStrains.length > 0 ? hybridCards : <p>No Hybrids Available</p>
            } else if(card === 'Sativas'){
                return allStrains.length > 0 ? sativaCards : <p>No Sativas available.</p>
            }else if(card === 'Indicas'){
                return allStrains.length > 0 ? indicaCards : <p>No Sativas available.</p>
            }else if(card === 'allStrains'){
                return allStrains.length > 0 ? allStrainCards : <p>No Sativas available.</p>
            }
        }

  
  return(
    <div>
      <Header fetchData={fetchData} allStrains={allStrains} />
      <section className="all-strains-container">
        {determineRender()}
      </section>
    </div>
  )
}

export default Library