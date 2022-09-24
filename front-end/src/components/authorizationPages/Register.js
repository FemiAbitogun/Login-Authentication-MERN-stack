import React, { useState } from 'react';

export default function Register() {
    const [userImage, setUserImage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState("Lagos");
    const [password, setPassword] = useState("");

    const [comfirmPassword, setComfirmPassword] = useState("");
    const [department, setDepartment] = useState("");

    const OnFileChange = (e) => { setUserImage(e.target.files[0]) ;
    // console.log(e.target.files)
    }
    const Submit=(e)=>{e.preventDefault()}
    

    
    return (
        <div className='Register' >
            <div className='RegistrationForm'>
                <div className='RegistrationFormInner'>
                    <div>
                        <label>Photo</label>
                        <input type="file" accept="image/png, image/jpeg" onChange={(e) => { OnFileChange(e); }} />
                    </div>

                    <div className='user-input-wrp'>
                        <br></br>
                        <input type="text" className="inputText" required onChange={(e)=>setFirstName(e.target.value)}/>
                        <span className="floating-label">First Name</span>
                    </div>

                    <div className='user-input-wrp'>
                        <br></br>
                        <input type="text" className='inputText' required onChange={(e)=>setLastName(e.target.value)} />
                        <span className="floating-label">Last Name</span>
                    </div>

                    <div className='user-input-wrp'>
                        <br></br>
                        <input type="text" className='inputText' required onChange={(e)=>setEmail(e.target.value)}/>
                        <span className="floating-label">Email</span>
                    </div>

                    {/* department */}
                    <div className='user-input-wrp'>
                        <br />
                        <label htmlFor="region">Select Department:</label>
                        <select name='department' id='department' className='SelectTag' >
                            <option
                                onClick={(e) => { setDepartment("Engineering") }}
                            >Engineering</option>

                            <option onClick={(e) => { setDepartment("Production") }}
                            >Production|Optechs</option>

                            <option onClick={(e) => { setDepartment("Utility") }}
                            >Utility</option>

                            <option onClick={(e) => { setDepartment("Management") }}>Management</option>

                        </select>
                    </div>

                    {/* select Region... */}
                    <div className='user-input-wrp'>
                        <br />
                        <label htmlFor="region">Select Region:</label>
                        <select name='region' id='region' className='SelectTag' >

                            <option
                                onClick={(e) => { setRegion("Lagos") }}
                            >Lagos</option>

                            <option onClick={(e) => { setRegion("kano") }}
                            >kano</option>

                            <option onClick={(e) => { setRegion("Abuja") }}>Abuja</option>

                            <option onClick={(e) => { setRegion("Kaduna") }}>Kaduna</option>

                            <option onClick={(e) => { setRegion("Ibadan") }}>Ibadan</option>

                            <option onClick={(e) => { setRegion("Ilorin") }}>Ilorin</option>

                            <option onClick={(e) => { setRegion("Enugu") }}>Enugu</option>

                            <option onClick={(e) => { setRegion("Aba") }}>Aba</option>

                            <option onClick={(e) => { setRegion("Benin") }}>Benin</option>

                        </select>
                    </div>

                    <div className='user-input-wrp'>
                        <br></br>
                        <input type="password" className='inputText' required onChange={(e)=>setPassword(e.target.value)}/>
                        <span className="floating-label">Password</span>
                    </div>

                    <div className='user-input-wrp'>
                        <br></br>
                        <input type="password" className='inputText' required onChange={(e)=>setComfirmPassword(e.target.value)}/>
                        <span className="floating-label">Comfirm Password</span>
                    </div>

                    <div>
                        <button className='Button1' style={{ "color": "white" }} onClick={e=>{Submit(e)}} ><b>Submit</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}