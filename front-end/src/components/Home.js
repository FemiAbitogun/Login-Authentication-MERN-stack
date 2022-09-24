import React, { } from 'react';



export default function Home() {


    return (
        <div className='Home'>


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
                    <h2><b style={{ "color": "red" }}>W</b>elcome!!!</h2>
                    <p></p>
                    <h3>Automate your troubleshooting process </h3>
                </blockquote>
            </div>

        </div>
    )
}
