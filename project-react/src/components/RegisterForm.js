import { useState } from 'react'
import RegisterErrorTexts from './RegisterErrorTexts'
import styles from './RegisterForm.module.css'

function RegisterForm() {

    const registerError = {
        error1: "Name is required",
        error2: "Password is required",
        error3: "Email is required",
        error4: "Adress is required"
    }

    const [name, setName] = useState()
    const [nameUser, setNameUser] = useState()

    const [password, setPassword] = useState()
    const [passwordUser, setPasswordUser] = useState()

    const [email, setEmail] = useState()
    const [emailUser, setEmailUser] = useState()

    const [adress, setAdress] = useState()
    const [adressUser, setAdressUser] = useState()



    function RegisterUser(e) {
        e.preventDefault()

        setNameUser(name)
        setPasswordUser(password)
        setEmailUser(email)
        setAdressUser(adress)
  
        console.log(`user: ${nameUser}, password: ${passwordUser}, email: ${emailUser}, adress: ${adressUser}`)
    }

    return (
        <>
        <form>
            <h1>Register</h1>
            <div className={styles.test}>
                <label htmlFor="form_name" className={styles.test_label}></label>
                <input 
                type="text" 
                name="form_name" 
                id="form_name" 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)}
                className={styles.test_input}
                />
                {nameUser ? (
                    <></>
                ) : (
                    <RegisterErrorTexts errorName={registerError.error1} className={styles.test_error}/>
                )}
            
            </div>
            <div className="RegisterForm">
                <label htmlFor="form_password"></label>
                <input
                 type="password"
                 name="form_password" 
                 id="form_password" 
                 placeholder="Password" 
                 onChange={(e) => setPassword(e.target.value)}
                 />
                 {passwordUser ? (
                    <></>
                ) : (
                    <RegisterErrorTexts errorName={registerError.error2}/>
                )}

                 
            </div>
            <div className="RegisterForm">
                <label htmlFor="form_email"></label>
                <input 
                type="text" 
                name="form_email" 
                id="form_email" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />
                {emailUser === 0 && (
                    <RegisterErrorTexts errorName={registerError.error3}/>
                )}
            </div>
            <div className="RegisterForm">
                <label htmlFor="form_adress"></label>
                <input 
                type="text" 
                name="form_adress" 
                id="form_adress" 
                placeholder="Adress"
                onChange={(e) => setAdress(e.target.value)}
                />
                {adressUser === 0 && (
                    <RegisterErrorTexts errorName={registerError.error4}/>
                )}
            </div>
            <input type="submit" value="Register" onClick={RegisterUser} />
        </form>
        
    
        
        </>
    )
}

export default RegisterForm