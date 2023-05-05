import React from 'react';
import ph1 from '../Images/ph1.png';
import ph2 from '../Images/ph2.png';
import ph3 from '../Images/ph3.png';
import ph4 from '../Images/ph4.png';

const SecondSection = () => {
    const cardList = [
        {
          img: ph1 ,
          titre: "English",
          statut: "Graphic design", 
          para: "We focus on egronomics and meeting you", 
          vente: "15 sales",
          prix: "$16,48 $6,48",
        },
        {
          img: ph2,
          titre: "English", 
          statut: "Graphic design", 
          para: "We focus on egronomics and meeting you",
          vente: "15 sales",
          prix: "$16,48 $6,48",
        },
        {
          img: ph3,
          titre: "English", 
          statut: "Graphic design",
          para: "We focus on egronomics and meeting you",
          vente: "15 sales",
          prix: "$16,48 $6,48",
        },
        {
          img: ph4 ,
          titre: "English", 
          statut: "Graphic design", 
          para: "We focus on egronomics and meeting you",
          vente: "15 sales",
          prix: "$16,48 $6,48",
        },
        
    ];
  return (
    <div className='container p-5 mt-5'>
        <div className="row">
            <div className="col-md text-start">
                <h6 className='text-primary'>Practice Advice</h6>
                <h2 className='fw-bold'>Make online education accesible</h2>
                <p className='lead'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="row pt-5">
                {cardList.map((cardList) =>(
                    <div className="col-md-3 text-start">
                        <img src = {cardList.img} alt="T" className='me-3' />
                        <h6 className='text-primary pt-3'>{cardList.titre}</h6>
                        <h5>{cardList.statut}</h5>
                        <p>{cardList.para}</p>
                        <p>{cardList.vente}</p>
                        <p>{cardList.prix}</p>
                        <button class="btn btn-outline-primary rounded-pill px-4 bg-light">Learn More <span>&#8594;</span></button>
                    </div>

                ))}
            </div>
            </div>
        </div>
  )
}

export default SecondSection;