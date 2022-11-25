import { useState } from 'react'

function RegisterForm() {
    function RegisterUser(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(email)
        console.log(adress)
        console.log("User Registered")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [adress, setAdress] = useState()

    return (
        <>
        <form onSubmit={RegisterUser}>
            <h1>Register</h1>
            <div className="RegisterForm">
                <label htmlFor="form_name"></label>
                <input 
                type="text" 
                name="form_name" 
                id="form_name" 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="RegisterForm">
                <label htmlFor="form_password"></label>
                <input
                 type="text"
                 name="form_password" 
                 id="form_password" 
                 placeholder="Password" 
                 onChange={(e) => setPassword(e.target.value)}
                 />
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
            </div>
            <input type="submit" value="Register" />
        </form>
        </>
    )
}

export default RegisterForm