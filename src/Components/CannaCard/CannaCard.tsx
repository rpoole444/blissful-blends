import React, { useState, useEffect } from "react";
import "./CannaCard.css";

interface CannaCardProps {
  id: number;
  strain: string;
  thc: string;
  cbd: string;
  cbg: string;
  strainType: string;
  climate: string;
  difficulty: string;
  fungalResistance: null;
  indoorYieldInGramsMax: number;
  outdoorYieldInGramsMax: number;
  floweringWeeksMin: number;
  floweringWeeksMax: number;
  heightInInchesMin: number;
  heightInInchesMax: number;
  goodEffects: string;
  sideEffects: string;
  imgThumb: string;
  imgAttribution: null;
  imgAttributionLink: null;
  imgCreativeCommons: boolean;
  setFavorited: Function;
  favorites: Array<CannaCardProps>;
}

const CannaCard: React.FC<CannaCardProps> = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const { setFavorited, favorites, id } = props;

  // this will get all of our saved then iterate through to find the specific card and then set it to true, it will only change depending on the props.id.
  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (savedFavorites?.find((f: CannaCardProps) => f.id === id)) {
      setIsSaved(true);
    }
  }, [id]);

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsSaved((prevSaved) => !prevSaved);
    if (!isSaved) {
      setFavorited([...favorites, props]);
    } else {
      setFavorited(favorites.filter((strain: any) => strain.id !== id));
    }
  };
  const buttonClass = isSaved
    ? "cannabis-button-saved"
    : "cannabis-button-unsaved";
  return (
    <div className="CannaCard">
      <div className="card-image">
        <img className="card-image" src={props.imgThumb} alt={props.strain} />
      </div>
      <h2 className="cannabis-title">{props.strain}</h2>
      <p className="cannabis-thc">Strain Type: {props.strainType}</p>
      <p className="cannabis-thc">THC percentage: {props.thc}</p>
      <button className={buttonClass} onClick={(e) => handleClick(e)}>
        {isSaved ? "Remove from Saved" : "Save this Strain"}
      </button>
    </div>
  );
};

export default CannaCard;
