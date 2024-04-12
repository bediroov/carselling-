import React from 'react'
import { useParams } from 'react-router-dom'
import mydata from "../assets/data/myData"
import slugify from 'slugify';
const VacancyDetail = () => {

    const { url } = useParams();
    const detaildata = mydata.find(p => slugify(p.name) === url)
    
    
    return (
        <>
            {detaildata === undefined ? <h1 className='text-center'>loading</h1> :
                <div className="VacancyDetail mt-5">
                    <div className="container">
                        <div className="title">
                            <h1>Barista</h1>
                        </div>

                        <div className="firstbox ">
                            <div className="upperside ">
                                <h5 >Responsibilities</h5>
                                <div className="one"></div>    <p>Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already</p>
                                <div className="two"></div>    <p>Ormado Kaffeehaus is an international German brand. Our story started in</p>
                                <div className="three"></div>                            <p>Ormado Kaffeehaus is an international </p>
                               
                            </div>
                        </div>

                        <div className="firstbox my-5 ">
                            <div className="upperside ">
                                <h5  >Working conditions</h5>
                                <div className="two"></div>      <p>Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already</p>
                                <div className="three"></div>                    <p>Ormado Kaffeehaus is an international German brand. Our story started in</p>
                              
                            </div>
                        </div>

                        <div className="firstbox ">
                            <div className="upperside ">
                                <h5 >Requirements</h5>
                                <div className="two"></div>       <p>Ormado Kaffeehaus is an international German brand. Our story started in Berlin in 2017. We are proud to have already</p>
                                     <div className="three"></div>         <p>Ormado Kaffeehaus is an international German brand. Our story started in</p>
                                
                            </div>
                        </div>

                        <a className='btn btn-warning' href="">Apply</a>
                    </div>
                </div>}

        </>
    )
}

export default VacancyDetail