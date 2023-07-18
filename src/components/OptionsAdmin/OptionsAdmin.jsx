import { Icon } from "@iconify/react";
import Aseguradora from "../Aseg/Aseguradora";
import PrincipalText from "../Principal-Text/Principaltext";

export default function(){
    return(
        <div className="container my-5">
            
            <div className="row">            
                <div className="col-md-12">
                    <div className="card rounded-4">
                        <div className="card-header">
                            <PrincipalText />
                            <h3 className="card-title text-center mt-3">                                
                                <Icon icon="mdi:user-circle-outline" /> Admin
                            </h3>
                        </div>
                        <Aseguradora />
                    </div>
                </div>
            </div>
        </div>
    )
}