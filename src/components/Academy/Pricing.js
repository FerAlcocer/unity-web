import React, { useEffect } from 'react';

export const Pricing = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="row animate__animated animate__fadeIn mt-5">
    <div  className="col-md-3"></div>
    <div  className="col-md-2">

    <h4>WALK-INS:</h4>
      <p>
        <strong>Mat fees</strong> 
        <br />$500 per day
        <br />$2500 per month
      </p>

      <p>
        <strong>Month to Month</strong> 
        <br />$2500/mo - Unlimited classes
      </p>
    </div>

    <div  className="col-md-2">

      <h4>Adult:</h4>
        <p>
          <strong>6 Month Contract</strong> 
          <br />$2000/mo - Unlimited classes
        </p>

        <p>
          <strong>Month to Month</strong> 
          <br />$2500/mo - Unlimited classes
        </p>
    </div>
      
    <div  className="col-md-2">

    <h4>Kids:</h4>
      <p>
        <strong>6 Month Contract</strong> 
        <br />$2000/mo - Unlimited classes
      </p>

      <p>
        <strong>Month to Month</strong> 
        <br />$2500/mo - Unlimited classes
      </p>
      </div>

    <div  className="col-md-3"></div>
    </div >
    </>
  );
};
