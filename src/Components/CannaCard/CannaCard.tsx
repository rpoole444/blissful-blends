import React from "react";
import "./CannaCard.css"

interface CannaCardProps {
  id: number
  strain: string
  thc:string
  cbd:string
  cbg:string
  strainType:string
  climate:string
  difficulty:string
  fungalResistance:null
  indoorYieldInGramsMax:number
  outdoorYieldInGramsMax:number
  floweringWeeksMin:number
  floweringWeeksMax:number
  heightInInchesMin:number
  heightInInchesMax:number
  goodEffects:string
  sideEffects:string
  imgThumb:string
  imgAttribution:null
  imgAttributionLink:null
  imgCreativeCommons:boolean
}

const CannaCard: React.FC<CannaCardProps> = (props) => {
    const [isSaved, setIsSaved] = React.useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
  };
  
  return (
        <div className="CannaCard">
            <div className="card-image">
                <img className="card-image"src={props.imgThumb} alt={props.strain}/>
            </div>
                <h2 className="cannabis-title">{props.strain}</h2>
                <p className="cannabis-thc">THC percentage: {props.thc}</p>
            <button className="cannabis-button">Save</button>
        </div>
    )
}

export default CannaCard