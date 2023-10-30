import React from 'react';
import './Icon.css'
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const Icon = () => {
    return (
        <div className="icon-section">
            <div className="icons">
                <LocalShippingIcon className="ui-icon" style={{ color:'#F2C66D', fontSize:'40px'}}/>
                <div className="title">Delivery</div>
                <p> " Swiftly processed orders ensuring your purchases arrive on time. Experience our commitment to reliability with every delivery. "</p>
            </div>
            <div className="icons">
                <SupportAgentOutlinedIcon className="ui-icon" style={{ color:'#F2C66D' , fontSize:'40px'}}/>
                <div className="title">Customer Care</div>

                <p>" Your satisfaction is our utmost priority. Reach out any time, and our team is ready to assist, making sure your experience is seamless. "</p>
            </div>
            <div className="icons">
                {/* icon */}
                <PaymentsOutlinedIcon className="ui-icon" style={{ color:'#F2C66D' , fontSize:'40px' }}/>
                <div className="title">Payment Security</div>

                {/* text  */}
                <p>" Your safety, our responsibility. Each transaction is guarded with the highest security standards. Sleep easy knowing your details remain confidential and secure. "</p>
            </div>
        </div>
    )
}

export default Icon