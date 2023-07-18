import help from "./imgs/help.png";
import "./Help.css"

export default function Help(){
    return (        
        <div className="img mt-5" id="help-section">
            <img src={help} className="rounded img-fluid w-75 tama" alt=""/>
        </div>        
    )
}