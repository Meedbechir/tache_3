import React from 'react';

const Contact = () => {
  return (
    <div className='container p-5 mt-5'>
        <div className="row">
        <div className="col-12 text-center">
                <h6 className='text-primary'>Practice Advice</h6>
                <h2 className='fw-bold'>Featured Products</h2>
                <p className='lead'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="col-md text-center">
            <div className="input-group mb-3 pt-1 mt-5 w-75 mx-auto">
                <input type="text" className="form-control p-3" placeholder="Your email" aria-label="Recipient's username" aria-describedby="basic-addon2"  />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary bg-primary text-white p-3" type="button">Subscribe</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact