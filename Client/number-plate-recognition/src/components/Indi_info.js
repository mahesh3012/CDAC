import React from 'react'

export const Indi_info = ({indi_info}) => {
    function manual(e,image_id){
        e.preventDefault();
        const final_value=document.getElementById(indi_info.image_id).value;
        console.log(final_value)
        fetch(`/${image_id}/manual_lp`, {
            method: 'POST',
            headers: {
                "x-access-token":sessionStorage.getItem("token"),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        body:{
            "manually_entered_LP_number":final_value
        }}).then(res => res.json).then(data =>console.log(data))
    }
    if(indi_info.manually_enter_LP_number){
    return (<>
                            <td>{indi_info.cam_id}</td>
                             <td>{indi_info.license_number}</td>
                            <td>{indi_info.license_number_chars_confidence_list}</td>
                             <td>{indi_info.license_number_confidence_sum}</td>
                            <td>{indi_info.timestamp}</td>
                            <td>{indi_info.vehicle_detection_confidence}</td>
                            <td>{indi_info.image_id}</td>
                            <td><input type="text" defaultValue={indi_info.manually_enter_LP_number} id={indi_info.image_id}></input>
                            <input type="button" onClick={(e)=>manual(e,indi_info.image_id,)} value="Submit"></input>
                            </td>
                            

            
            </>
    )
    }
    else{
        return(<>
                            <td>{indi_info.cam_id}</td>
                             <td>{indi_info.license_number}</td>
                            <td>{indi_info.license_number_chars_confidence_list}</td>
                             <td>{indi_info.license_number_confidence_sum}</td>
                            <td>{indi_info.timestamp}</td>
                            <td>{indi_info.vehicle_detection_confidence}</td>
                            <td>{indi_info.image_id}</td>
        </>)
    }
}



