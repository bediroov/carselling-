import React from "react";
// import cake from "../assets/img/cake.png"
// import arrow from "../assets/img/arrow.png"

const Cakes = () => {
  return (
    <div>
      <section className="CakesSection">

        <div className="width-90">
            
          <h2 className="headText">
            Our Exclusive <span> Cakes </span>
          </h2>

          <div className="card-parts">

            <div className="row">
                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        {/* <img src={cake} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Cheese Cake</h5>
                            
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-warning">
                                Taste now 
                                {/* <img className="arrow" src={arrow} alt="" /> */}
                            </a>


                            </div>
                        </div>                        
                    </div>
                </div>


                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        {/* <img src={cake} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Cheese Cake</h5>
                            
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Order now 
                                {/* <img className="arrow" src={arrow} alt="" /> */}
                            </a>
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        {/* <img src={cake} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Cheese Cake</h5>
                            
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Order now 
                                {/* <img className="arrow"  src={arrow} alt="" /> */}
                            </a> 
                            </div>
                        </div>                        
                    </div>
                </div>

                <div className="col-6 col-lg-4 col-xl-3">
                    <div className="card mt-4 " >
                        {/* <img src={cake} className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                            <h5 className="card-title cardHeadText">Cheese Cake</h5>
                            
                            <div className="card-bottom-part">
                            <p className="card-price">
                                $20.00
                            </p>
                            <a href="#" className="cardBtn btn btn-primary">
                                Order now 
                                {/* <img className="arrow" src={arrow} alt="" /> */}
                            </a>
                            </div>
                        </div>                        
                    </div>
                </div>
                
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Cakes;