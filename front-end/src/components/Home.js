import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pingServer } from '../api/post';




export default function Home() {
 
 
    useEffect(() => {  
        AwaitableInitialRun();
    }, []);

    const AwaitableInitialRun = async () => {
        // console.log("pinging from register page")
      return  await pingServer();
    }


    const _info = () => {
        const valueResult = document.getElementsByClassName('AboutProject');
        // console.log(valueResult[0]);
        valueResult[0].style.display = "block";
    }
    const _infoClose = () => {
        const valueResult = document.getElementsByClassName('AboutProject');

        valueResult[0].style.display = "none";
    }

    return (
        <div className='Home'>
            <div className='AboutProject' style={{ display: "none" }}>
                <span onClick={() => { _infoClose() }} className='CloseInfo'>&#10008;</span>
                {/* <span onClick={() => { _infoClose() }} className='CloseInfo'>&#10008;</span> */}

                {/* <span onClick={() => { _infoClose() }} className='CloseInfo'>Learn More....</span> */}
                {/* &#10009 + bold; */}
                {/* &#10005 x; */}
                {/* &#10007 style x */}
                {/* &#10006 x mark_b */}
                {/* &#10000 pencil */}
                {/* &#10001 spanner */}
                {/* &#10002 plier */}
                {/* &#10003 pass mark */}
                {/* &#10004 pass mark bold */}
                {/* &#10003 pass mark */}
                <div className='WriteUp'>

                    <div className='WriteUpInner'>
                        <p>This application is designed to ease your troubleshooting proccess
                            and of immense importance for departments such as
                            <mark><b> Manufacturing,</b></mark>
                            <mark><b> Engineering</b></mark> ,<mark><b>Production</b> </mark> , <mark><b>Quality</b></mark>,<mark><b>Store Management</b></mark> and <mark><b>Safety</b></mark> .
                        </p>
                        <p>You can search for issues that might have occured in your region and also modify your search Criteria by Quering other region of <b> <mark> 7up Plant Nationwide</mark></b></p>
                        <p>Should you encounter any breakdown or technical challenges ,which is eventually overcome, you can report this events with attached pictures,if any.This will ensure any employee in other region will have access to this resource and make job easier!</p>


                        <p>Operation manuals, Circuit diagram,SOPs,Machine PLC programs e.t.c. can also be uploaded for each individual region,this way, ease to resources for all plants nationwide is gurranted</p>

                        <p><mark><b>Project Supervisor</b></mark> : Ali Nassereddine . Factory Manager, 7up Bottling Company  Ltd., Kano plant.
                        </p>
                        <p> <mark><b>Software Developer</b></mark> : Femi Tope Abitogun . Automation Engineer, 7up Bottling Company Ltd., Kano plant.
                        </p>
                        <p><mark><b>Contributor</b> </mark>    : Engr. Adesina Adeniran,National Automation Manager. 7up Bottling Company Ltd.
                        </p>
                        <Link className="websiteLink" to={{ pathname: "https://femi-abitogun.netlify.app/" }}
                            target="_blank" >Visit my Website</Link>
                    </div>

                </div>
            </div>
            <div className='Info'>
                {/* <button onClick={() => { _info() }}><h2>&#10000;</h2></button> */}
                <button onClick={() => { _info() }}>Learn More....</button>
            </div>
            <div className='SbcLogo'>
                <img src={require('../images/SBC_Identity_New.webp')} />
            </div>
            <div className='HomeHero'>
                <div className='ImageWrapRotor'>

                    <div className='ImageDiv Photo1'>
                        <img src={require('../images/pepsi.jpg')} />
                    </div>

                    <div className='ImageDiv  Photo2'>
                        <img src={require('../images/7up.webp')} />
                    </div>

                    <div className='ImageDiv Photo3'>
                        <img src={require('../images/dew.jpg')} />
                    </div>


                    <div className='ImageDiv Photo4'>
                        <img src={require('../images/Aquafina.jfif')} />
                    </div>

                    <div className='ImageDiv Photo5'>
                        <img src={require('../images/mirindaOrange.png')} />
                    </div>

                    <div className='ImageDiv Photo6'>
                        <img src={require('../images/SUPA.webp')} />
                    </div>

                    <div className='ImageDiv Photo7'>
                        <img src={require('../images/teem.jpg')} />
                    </div>

                    <div className='ImageDiv Photo8'>
                        <img src={require('../images/lipton2.png')} />
                    </div>
                    <div className='ImageDiv Photo9'>
                        <img src={require('../images/mirindaApple.jpg')} />
                    </div>
                    <div className='ImageDiv Photo10'>
                        <img src={require('../images/mirindaRed.jpg')} />
                    </div>
                </div>

            </div>

            <div className='HomeQuotes'>
                <blockquote>
                    <h1><b style={{ "color": "crimson", "fontSize": "2em" }}>W</b>elcome!</h1>
                    <p></p>
                    The  <span style={{ "color": "gold", "fontSize": "2em" }}><b>SABI </b></span>Troubleshooting  {<b style={{ color: "yellow", "fontSize": "1.7em" }}> Experience</b>}

                </blockquote>
            </div>

        </div >
    )
}
