import React, { useEffect } from "react";
import './Library.css'
import Header from "../Header/Header";
import CannaCard from "../CannaCard/CannaCard";
interface LibraryProps {
  fetchData: () => void;
  allStrains: Array<any>;
  card: string
}

const Library: React.FC<LibraryProps> = ({fetchData, allStrains, card}) => {
  
  useEffect(() => {

  }, [allStrains])

  const allStrainCards = allStrains?.map(strain => <CannaCard key={strain.id} {...strain} type={card} />)
  const hybridCards = allStrains?.map(strain => {
    if(strain.strainType === "Hybrid"){
      return <CannaCard key={strain.id} {...strain} type={card} />
    }
  })

  const sativaCards = allStrains?.map(strain => {
    if(strain.strainType === "Sativa"){
      return <CannaCard key={strain.id} {...strain} type={card} />
    }
  })
  const indicaCards = allStrains?.map(strain => {
    if(strain.strainType === "Indica"){
      return <CannaCard key={strain.id} {...strain} type={card} />
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