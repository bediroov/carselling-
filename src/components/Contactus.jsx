import React from 'react'

const Contactus = () => {
    return (
        <div className="Contactus">
            <div className="boxcontainer">
                <div className="container">
                    <div className="row">

                        <div className=" col-12  col-lg-6  leftside">
                            <div className=" conbox">
                                <div className="title">
                                    <h1>Contact Us</h1>
                                </div>

                                <div className="middle">
                                    <h1>Have a project! <span>Let’s diascuss</span> </h1>
                                </div>

                                <div className="loremone">
                                    <div className="first">
                                        <h6>Thank you for getting in touch!
                                            Kindly</h6>
                                    </div>
                                    <div className="second">
                                        <h6>Fill the form, have a great day!</h6>
                                    </div>
                                </div>

                            </div>
                        </div>



                        {/* <div className=" col-12 col-sm-8 col-md-8 rightside "> */}
                        <div className=" col-12  col-lg-6  rightside ">
                            <form >
                                <div className="inner">
                                    <div className="container">

                                        <div className="titlebox">
                                            <p>Biling information</p>
                                        </div>

                                        <div className="row g-5">
                                            <div className="col-6">
                                                <div className="inputbox">
                                                    <label htmlFor="">Full name <span>*</span></label>
                                                    <input placeholder='Jon Doe' className='myinput' type="text" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="inputbox">
                                                    <label htmlFor="">Email address<span>*</span></label>
                                                    <input placeholder='example@gmail.com' className='myinput' type="text" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="inputbox">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M19 9L12 15L5 9" stroke="#A19FA1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg> */}
                                                    <label htmlFor="">Country/Region<span>*</span></label>
                                                    <select className='myselect' aria-label="Default select example">
                                                        <option selected><h6 >Select</h6></option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="inputbox">
                                                    <label htmlFor="">Phone<span>*</span></label>
                                                    <input placeholder='___-__-__-__' className='myinput' type="text" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="inputbox">
                                                    <label htmlFor="">Company Name</label>
                                                    <input placeholder='50098 Cordia Key' className='myinput' type="text" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="inputbox">
                                                    <label htmlFor="">Interested in</label>
                                                    <select className='myselect' aria-label="Default select example">
                                                        <option selected>select </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12 ">
                                                <label for="floatingTextarea">Comments</label>
                                                <div className="form-floating">

                                                    <textarea className="form-control" placeholder="Write message...." id="floatingTextarea"></textarea>
                                                    <label for="floatingTextarea">Comments</label>
                                                </div>
                                            </div>

                                            <div className="col-12 btnsubmit my-3">
                                                <button>Submit</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus