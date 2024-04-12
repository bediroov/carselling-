import React, { useEffect, useState } from 'react'
import mydata from "../assets/data/myData"
// import icon from "../assets/img/icon.png"

const Contactlocation = () => {

  const [datamap, setdatamap] = useState([]);
  const [active,setactive] =useState(2);
 

  useEffect(() => {
    filtermap(3)
  }, [])


  
  const filtermap = (searchmap) => {
    if (searchmap === "all") {
      setdatamap(mydata)
    }
    else {
      const newmap = mydata.filter((item) => item.id === searchmap)
      setdatamap(newmap,active)
    }
  }

  return (
    <>

      <div className="ormadolocation ">
        <div className="mysize-width boxcontainer">
       
         <div className="my">
         <div className="container">
            <div className="titlebox">
              <h1>Select address</h1>
              <p>Quod tempore doloribus blanditiis. Quod quibusdam atque qui blanditiis et nihil atque. Error aut enim. Id et suscipit.</p>
            </div>

            <div className="row">   
              <div className="leftmap col-12 col-xs-12 col-sm-12 col-md-5  col-xl-5">
                <div className="text-box">
                  {mydata.map((item, i) => {
                    return (
                      <div
                        onClick={()=>{
                          filtermap(i);
                          setactive(i);
                        }}
                        className={`${i == 0 ?  "firststage" : i == 1 ? "secondstage" : i == 2 ? "thirdstage" : i == 3 ? "fourthstage" : ""}  ${active == i ? "aktivdir" : ""}  `}
                      >
                        <h6>{item.name}</h6>
                        <h6>{item.email}</h6>
                        <h6>{item.phone}</h6>
                        <h6>{item.hours}</h6>
                        {/* <h6> <img src={icon} alt="" />  <span className="ms-1">23-29 Yusif Memmedaliyev, Baku, 1005 Azerbaijan</span></h6> */}
                      </div>
                    )
                  })}
                </div>
              </div>

              {datamap.map((item) => {
                return (
                  <div className="rightmap  col-12 col-xs-12 col-sm-12  col-md-7  col-xl-7">


                    <div className="map">
                      <iframe className='myiframe' src={item.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>

                )
              })}

            </div>
          </div>
         </div>
        </div>
      </div>



    </>
  )
}

export default Contactlocation