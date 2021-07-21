import React from 'react'



export const Indi_info = ({ indi_info }) => {

    function manual(e, image_id) {
        e.preventDefault();
        const final_value = document.getElementById(indi_info.image_id).value;
        let data = {
            "manually_entered_LP_number": final_value
        }
        fetch(`http://localhost:5000/${image_id}/manual_lp`, {
            method: 'POST',
            headers: {
                "x-access-token": sessionStorage.getItem("token"),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => alert(data["message"]))
    }
    if (indi_info.manually_enter_LP_number) {
        return (<>
            <td>{indi_info.cam_id}</td>
            <td>{indi_info.license_number}</td>
            <td>{indi_info.license_number_chars_confidence_list}</td>
            <td>{indi_info.license_number_confidence_sum}</td>
            <td>{indi_info.timestamp}</td>
            <td>{indi_info.vehicle_detection_confidence}</td>
            {/* <td>{indi_info.image_id}</td> */}
<<<<<<< HEAD
            <td><center><a href={`http://127.0.0.1:5000/static/images/${indi_info.image_id}`} target="_blank"><img src={`http://127.0.0.1:5000/static/images/${indi_info.image_id}`} target="_blank" height="150"/></a></center></td>
=======
            <td><center><a href={`http://127.0.0.1:5000/static/images/${indi_info.image_id}`}><img src={`http://127.0.0.1:5000/static/images/${indi_info.image_id}`} height="150" width="250"/></a></center></td>
>>>>>>> acfe588d096924c8c98a26b4e7d118d50ab89389
            <td><input type="text" defaultValue={indi_info.manually_enter_LP_number} id={indi_info.image_id}></input>
                <button type="button" onClick={(e) => manual(e, indi_info.image_id,)}>Submit</button>
            </td>



        </>
        )
    }
    else {
        return (<>
            <td>{indi_info.cam_id}</td>
            <td>{indi_info.license_number}</td>
            <td>{indi_info.license_number_chars_confidence_list}</td>
            <td>{indi_info.license_number_confidence_sum}</td>
            <td>{indi_info.timestamp}</td>
            <td>{indi_info.vehicle_detection_confidence}</td>
            {/* <td>{indi_info.image_id}</td> */}
            <td><center><a href={`http://127.0.0.1:5000/static/images/${indi_info.image_id}`}><img src={`http://127.0.0.1:5000/static/images/${indi_info.image_id}`} height="150" width="250"/></a></center></td>

        </>)
    }

    
}



