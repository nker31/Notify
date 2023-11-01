import React from 'react'
import './Donate.css'

function Donate() {
    return (
        <>
            <div className='donate-page-container'>
                <p className='total-donation-head-text'>
                    Total raised
                </p>
                <br />
                <h2 className='total-donation'>
                    100,000 THB
                </h2>

                <div className='donate-body'>

                    <div className='donate-body-left'>
                        
                    </div>

                    <div className='donate-body-right'>
                        <div className='donate-info-head'>Donate to help victims of natural disasters</div>
                        <br />
                        <div className='donate-info-subhead'>Your donations will go directly to those in need</div>
                        <br />
                        <div className='donate-info'>We are a non-profit organization dedicated to helping victims of natural disasters.  We are committed to using 100% of donations to provide relief to those affected by disasters</div>
                        <br />
                        <div className='donate-info-subhead'>How we works</div>
                        <br />
                        <div className='donate-info'>When you donate to our website, your donation will be processed immediately.   We will then distribute the funds to our partners in the field, who will use them to provide food, water, shelter, and other essential supplies to those in need.</div>
                        <br />
                        <div className='donate-info-subhead'>Our partners</div>
                        <br />
                        <div className='donate-info'>We partner with local organizations in the affected areas to ensure that your donations are used effectively.  Our partners have a proven track record of providing relief to victims of natural disasters.</div>
                        <br />
                        <div className='donate-info-subhead'>Thank you for your support</div>
                        <br />
                        <div className='donate-info'>Your donation will help make a difference in the lives of those who have been affected by a natural disaster.  Thank you for your generosity.</div>
                    </div>

                </div>

                <div className="donate-button">
                    DONATE
                </div>

            </div>

        </>
    )
}

export default Donate