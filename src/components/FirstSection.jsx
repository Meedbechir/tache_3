import React from 'react';
import image4 from '../Images/image4.png';
import image5 from '../Images/image5.png';
import image6 from '../Images/image6.png';
import Rectangle52 from '../Images/Rectangle52.png';
import Rectangle53 from '../Images/Rectangle53.png';

const FirstSection = () => {
  return (
    <div className='container-fluid p-5 mt-5'>
        <div className="row">
            <div className="col-md-6">
                <h3 className='fs-1 pt-3'>Packages that are <br /> aprodable</h3>
                <p className='lead pt-3'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: <br /> Newtonian mechanics</p>
                <p className='text-primary'>Learn More <span>&#8594;</span> </p>
            </div>
            <div className="col-md-6 position-relative">
                <img src={image4} alt="I" />
                <div className="position-absolute top-50 start-0 translate-middle">
                    <img src={image5} alt="I" />
                </div>
                <div className="position-absolute top-100 start-0 translate-middle">
                     <img src={image6} alt="I" />
                </div>
                <div class="position-absolute top-0 start-0 translate-middle">
                    <img src={Rectangle52} alt="I" />
                </div>
                <div className="position-absolute top-100 start-100 translate-middle">
                     <img src={Rectangle53} alt="I" />
                </div>
              
            </div>
        </div>

    </div>
  )
}

export default FirstSection;