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

  const viewAllStrains = allStrains?.map(strain => <CannaCard key={strain.id} {...strain} type={card} /> 
  )
  
  
  return(
    <div>
      <Header fetchData={fetchData} allStrains={allStrains} />
      <section className="all-strains-container">
        {viewAllStrains}
      </section>
    </div>
  )
}

export default Library