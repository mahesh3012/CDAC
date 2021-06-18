import React,{useState,useEffect} from 'react'
import {Redirect} from "react-router-dom";
import {Indi_info} from './Indi_info'


export const All_info = () => {
    const [all_info, setall_info] = useState([]);
    const [auth,setAuth]=useState(1);/*For checking authorization */
    const [editing_rights,setEditing_rights]=useState(0);/*For checking editing rights to populate table*/
  useEffect(() => {
   fetch(`/info`, {
    method: 'GET',
    headers: {
        "x-access-token":sessionStorage.getItem("token"),
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }}).then(response => response.json().then(
      data =>{
        if(data["message"]){setAuth(0);}
        else{
       setall_info(data);
       if(data[0].manually_enter_LP_number){
           setEditing_rights(1);
       }
    }
     })).catch(error=>console.log(error));
 }, []);

if(auth===0){return <Redirect to="/"/>}
console.log(editing_rights);
if(editing_rights==1){
    return (
        <>
        <table>
            <thead><tr><th><strong>cam_id</strong></th> <th><strong> license_number</strong></th> <th><strong> license_number_chars_confidence_list</strong></th> <th><strong> license_number_confidence_sum</strong></th> <th><strong> timestamp </strong></th> <th><strong> vehicle_detection_confidence</strong></th><th><strong>image_id</strong></th><th><strong>manually_enter_LP_number</strong></th></tr></thead>
            <tbody>
            {
                all_info.map(indi_info =>
                    <tr key={indi_info.image_id}>
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
            return (
                <>
                <table>
                    <thead><tr><th><strong>cam_id</strong></th> <th><strong> license_number</strong></th> <th><strong> license_number_chars_confidence_list</strong></th> <th><strong> license_number_confidence_sum</strong></th> <th><strong> timestamp </strong></th> <th><strong> vehicle_detection_confidence</strong></th><th><strong>image_id</strong></th></tr></thead>
                    <tbody>
                    {
                        all_info.map(indi_info =>
                            <tr key={indi_info.image_id}>
                                <Indi_info indi_info={indi_info}/>
                            </tr>
                                    
        
                        )
                    }
                    </tbody>
                </table>    
        
                </>
            ) 
        }

}