import React from "react";
// import franchise from "../assets/img/franchise.png"


const Franchise = () => {
  return (
    <section className="myfranchise">
      <div className="container">
        <div className="franc-con">
          <div className="left">
           
            <div className="text">
              <p>
                WHY <span className="ormado">ORMADO</span> FRANCHISE ?
              </p>
            </div>

            <div className="ormado-about">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
            <div className="ormado-button">  
              <button>INQUIRE NOW</button>
            </div>     
          </div>
       
          <div className="right">
          {/* <img className="img-fluid" src={franchise} alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;