import React from 'react'
// import icon from "../assets/img/icon.png"
import mydata from "../assets/data/myData"
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Vacancy = () => {
  return (
    <>
      <div className="Vacancy">
        <div className="container">
          <div className="title">
            <h1>Our <span>Vacancies</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore excepturi quibusdam illum id alias dicta nostrum veritatis, labore magnam?</p>
            <a className='btn btn-warning' href="">Add CV</a>
          </div>
          
          {mydata.map((item) => {
            return (
              <div className="sendingbox mt-5">
                <div className="firstbox col-10">
                  <div className="writingbox">
                    <div className="upperside">
                      <h2>Barista</h2>
                      <a className='timebtn btn btn-primary' href="">20.06.2023 </a>
                    </div>
                    <div className="lowerside mt-2">
                      {/* <img src={icon} alt="" /> */}
                      <h2 className='ms-2 mt-2'>Berlin(Germany)</h2>
                    </div>
                  </div>

                  <div className="click">
                    <Link to={`/vacancy/${slugify(item.name)}`} ><i className="myicon fa-solid fa-chevron-right"></i></Link>
                  </div>



                </div>



                {/* <div className="secondbox col-10 my-5">

            <div className="writingbox">
              <div className="upperside">
                <h2>Barista</h2>
                <a className='timebtn btn btn-primary' href="">20.06.2023 </a>
              </div>
              <div className="lowerside mt-2">
                <img src={icon} alt="" />
                <h2 className='ms-2 mt-2'>Berlin (Germany)</h2>

              </div>
            </div>

            <div className="click">
              <a href="/contact"><i className="myicon fa-solid fa-chevron-right"></i></a>
            </div>

          </div>
          <div className="thirdbox col-10">
            <div className="writingbox">
              <div className="upperside">
                <h2>Barista</h2>
                <a className='timebtn btn btn-primary' href="">20.06.2023 </a>
              </div>
              <div className="lowerside mt-2">
                <img src={icon} alt="" />
                <h2 className='ms-2 mt-2'>Berlin (Germany)</h2>
              </div>
            </div>

            <div className="click">
              <a href="/contact"><i className="myicon fa-solid fa-chevron-right"></i></a>
            </div>
          </div> */}



              </div>

            )
          })}

          <div className="centerbtn  mt-3">
            <button className='lowbtn btn btn-white ' href="">Load more </button>
          </div>

        </div>



      </div>

    </>


  )
}

export default Vacancy