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

  // this says if the setFavorited function is called, then parse through our saved favorites JSON and then set them 
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorited(savedFavorites);
  }, [setFavorited]);

//this one senses the favorites and only changes adds or subtracts favorites upon click.
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const allStrainCards = allStrains?.map(strain => <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites} />)
  
  const favoritedCards = favorites?.map(strain => <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites} />)
 
  const hybridCards = allStrains?.map(strain => {
    return strain.strainType === "Hybrid" 
    ? <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites}/>
    : null
  })

  const sativaCards = allStrains?.map(strain => {
    return strain.strainType === "Sativa"
      ? <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites}/>
      :null
  })

  const indicaCards = allStrains?.map(strain => {
    return strain.strainType === "Indica"
      ? <CannaCard key={strain.id} {...strain} type={card} setFavorited={setFavorited} favorites={favorites}/>
      : null
    })
  
  const determineRender = () => {
            if(card === 'Hybrids') {
                return allStrains.length > 0 ? hybridCards : <p>No Hybrids Available</p>
            } else if(card === 'Sativas'){
                return allStrains.length > 0 ? sativaCards : <p>No Sativas available.</p>
            }else if(card === 'Indicas'){
                return allStrains.length > 0 ? indicaCards : <p>No Indicas available.</p>
            }else if(card === 'allStrains'){
                return allStrains.length > 0 ? allStrainCards : <p>No Strains available.</p>
            }else if(card === 'Matches'){
                return favorites.length > 0 ? favoritedCards : <p>You haven't favorited any strains.</p>
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