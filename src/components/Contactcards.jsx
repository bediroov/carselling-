import React from 'react'

// import first from "../assets/img/first.png"
// import second from "../assets/img/second.png"
// import third from "../assets/img/third.png"
// import fourth from "../assets/img/fourth.png"

const Contactcards = () => {
  return (
   <div className="Contactcards">
    <div className="innercard">
      <div className="container">
        <div className="row g-5 mt-3">
          <div className="col-12 col-sm-6 col-md-6">
            <div className="image1">
              {/* <img src={first} alt="" /> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <div className="image2">
              {/* <img src={second} alt="" /> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <div className="image3">
              {/* <img src={third} alt="" /> */}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6">
          <div className="image4">
              {/* <img src={fourth} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Contactcards