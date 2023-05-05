import React from 'react';
import testi1 from '../Images/testi1.png';
import testi2 from '../Images/testi2.png';

const Testimonials = () => {
  return (
    <div className='conatiner p-5 mt-5'>
        <div className="row">
        <div className="col text-start">
                <h6 className='text-primary'>Practice Advice</h6>
                <h2 className='fw-bold'>Our Expert Teacher</h2>
                <p className='lead'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="row pt-5 mt-5">
                <div className="col-md-6 ">
                    <img src={testi1} alt=""  className='rounded-circle'/>
                    <p className='text-lead pt-3'>Slate helps you see how many more days <br /> you need to work to reach your financial <br /> goal for the month and year.</p>
                    <h5>Regina Miles</h5>
                    <h6>Designer</h6>
                </div>
                <div className="col-md-6">
                    <img src={testi2} alt=""  className='rounded-circle'/>
                    <p className='text-lead pt-3'>Slate helps you see how many more days <br /> you need to work to reach your financial <br /> goal for the month and year.</p>
                    <h5>Regina Miles</h5>
                    <h6>Designer</h6>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Testimonials;