import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '../../context/ContextGlobal';
import { registerNewUserAsync } from '../../api/post'
export default function Register() {
    const history = useHistory();
    const { CheckSignedAsync, signedIn } = useContext(globalContext);
    // const AwaitableInitialRun = async () => {
    //     console.log(await CheckSignedAsync());
    // }
    // useEffect(() => { AwaitableInitialRun(); }, []);
    // datas from form................
    const [userImage, setUserImage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegion] = useState("Lagos");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState("Engineering");
    const [comfirmPassword, setComfirmPassword] = useState("");
    const [registerError, setRegisterError] = useState(undefined);
    const OnFileChange = (e) => {
        setUserImage(e.target.files[0]);
    }
    const Submit = async (e) => {

        const getPostTag = document.getElementsByClassName("RegNewUserBtn");

        if (firstName !== "" && lastName !== "" && userImage !== "" && email !== "" && comfirmPassword !== "" && password !== "") {
            if (password === comfirmPassword) {
                // console.log("clicked..."+ getPostTag[0])
                e.preventDefault();
                getPostTag[0].disabled = true;
                getPostTag[0].textContent = "Sending..";
                getPostTag[0].style.backgroundColor = "green";
                const formData = new FormData();
                formData.append("userImage", userImage);
                formData.append("password", password);
                formData.append("firstName", firstName);
                formData.append("lastName", lastName);
                formData.append("email", email);
                formData.append("region", region);
                formData.append("department", department);

                let returnedData = await registerNewUserAsync(formData);
                if (returnedData===true) {
                    getPostTag[0].textContent = "Done!!"
                    history.push('/login');
                }
                else {
                    setRegisterError(returnedData);
                    setTimeout(() => {
                        setRegisterError("");
                        getPostTag[0].disabled = false;
                        getPostTag[0].textContent = "Submit";
                        getPostTag[0].style.backgroundColor = "red";
                    }, 2000);
                    return;
                }
                ;


            }
            else {
                setRegisterError("Password and Confirm password does not match");
                setTimeout(() => {
                    setRegisterError("");
                }, 2000);
                // console.log(registerError)
                return;
            }

        }
        else {
            setRegisterError("All entries must be filled");
            setTimeout(() => {
                setRegisterError("");
            }, 2000);
            // console.log(registerError)
            return
        }
    }


    const _setRegion = (region) => {
        setRegion(region);
        // console.log(region);
    }
    const _setDepartment = (department) => {
        setDepartment(department);
        // console.log(department);

    }
    const Cancel = (e) => {
        history.push('/');
    }
    const display = () => {
        return (
            <div className='Register' >
                {registerError && <div className='RegisterErrorMessage'>{registerError} !!</div>}
                <div className='RegistrationForm'>
                    <div className='RegistrationFormInner'>
                        <div className='ImageReg'>
                            <label>Photo</label>
                            <input type="file" accept="image/png, image/jpeg" required onChange={(e) => { OnFileChange(e); }} />
                        </div>

                        <div className='user-input-wrp'>
                            <br></br>
                            <input type="text" className="inputText" required onChange={(e) => setFirstName(e.target.value)} />
                            <span className="floating-label">First Name</span>
                        </div>

                        <div className='user-input-wrp'>
                            <br></br>
                            <input type="text" className='inputText' required onChange={(e) => setLastName(e.target.value)} />
                            <span className="floating-label">Last Name</span>
                        </div>

                        <div className='user-input-wrp'>
                            <br></br>
                            <input type="text" className='inputText' required onChange={(e) => setEmail(e.target.value)} />
                            <span className="floating-label">Email</span>
                        </div>

                        {/* department */}
                        <div className='user-input-wrp'>
                            <br />
                            <label htmlFor="department">Select Department:</label>
                            <select onChange={(event) => { _setDepartment(event.target.value) }} className='SelectTag'>
                                <option value="Engineering" >Engineering</option>
                                <option value="Production" >Production(STLs)</option>
                                <option value="Utility" >Utility</option>
                                <option value="Quality" >Quality</option>
                                <option value="Store" >Store</option>
                            </select>
                        </div>

                        {/* select Region... */}
                        <div className='user-input-wrp'>
                            <br />
                            <label htmlFor="region">Select Region:</label>
                            <select onChange={(event) => { _setRegion(event.target.value) }} className='SelectTag' >
                                <option value="Lagos">Lagos</option>
                                <option value="Kano" >Kano</option>
                                <option value="Abuja" >Abuja</option>
                                <option value="Kaduna" >Kaduna</option>
                                <option value="Ibadan" >Ibadan</option>
                                <option value="Ilorin" >Ilorin</option>
                                <option value="Enugu" >Enugu</option>
                                <option value="Aba" >Aba</option>
                                <option value="Benin" >Benin</option>
                            </select>
                        </div>

                        <div className='user-input-wrp'>
                            <br></br>
                            <input type="password" className='inputText' required onChange={(e) => setPassword(e.target.value)} />
                            <span className="floating-label">Password</span>
                        </div>

                        <div className='user-input-wrp'>
                            <br></br>
                            <input type="password" className='inputText' required onChange={(e) => setComfirmPassword(e.target.value)} />
                            <span className="floating-label">Comfirm Password</span>
                        </div>

                        <div className='RegistrationButtons'>
                            <button className='Button1 RegNewUserBtn' style={{ "color": "white" }} onClick={e => { Submit(e) }} ><b>Submit</b></button>
                            <button className='Button1 CancelRegBtn' style={{ "color": "white" }} onClick={e => { Cancel(e) }} ><b>Cancel</b></button>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {display()}
        </>
    )
}