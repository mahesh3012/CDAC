import React,{useState,useEffect} from 'react'
import {Redirect } from "react-router-dom";
import {Indi_info} from './Indi_info'


export const All_info = ({uuid,authorized}) => {
    const [all_info, setall_info] = useState([])
  useEffect(() => {
   fetch(`/${uuid}`).then(response => response.json().then(
      data =>{
       setall_info(data);
     }));
 }, []);

 if(authorized){ 
    return (
        <>
        <p><strong>uuid:</strong> {uuid}</p>
        <table>
            <thead><tr><th><strong>cam_id</strong></th> <th><strong> license_number</strong></th> <th><strong> license_number_chars_confidence_list</strong></th> <th><strong> license_number_confidence_sum</strong></th> <th><strong> timestamp </strong></th> <th><strong> vehicle_detection_confidence</strong></th> </tr></thead>
            <tbody>
            {
                all_info.map(indi_info =>
                    <tr key={indi_info.sno}>
                        <Indi_info indi_info={indi_info}/>
                            
                    </tr>

                )
            }
            </tbody>
        </table>    

        </>
    )
}

 else{
     return <Redirect to ="/"/>;
 }
}