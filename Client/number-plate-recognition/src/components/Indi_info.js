import React from 'react'

export const Indi_info = ({indi_info}) => {
    return (<>
                            <td>{indi_info.cam_id}</td>
                             <td>{indi_info.license_number}</td>
                            <td>{indi_info.license_number_chars_confidence_list}</td>
                             <td>{indi_info.license_number_confidence_sum}</td>
                            <td>{indi_info.timestamp}</td>
                            <td>{indi_info.vehicle_detection_confidence}</td>

            
            </>
    )
}



