// import React from "react"

// export default function Login(){
//     const [loginFormDetails, setLoginFormDetails]  = React.useState({
//         emailAddress : "" ,
//         password : "" ,
//     })
//     function handleChange(event){
//         const { name,value,type,checked } = event.target
//         setLoginFormDetails(prevForm => ({
//             ...prevForm ,
//             [name]: value

//         }))
//     }
//     function handleSubmit(event){
//         event.preventDefault()
//         console.log(loginFormDetails)
//     }
//     return(
//         <form onClick={handleSubmit}>
//             <h1>Sign in to your account</h1>
//             <input 
//                 type="email" placeholder="Email address"
//                 name="emailAddress"
//                 value={loginFormDetails.emailAddress}
//                 onChange={handleChange}
//             />
//             <input 
//                 type="password" placeholder="Password"
//                 name="password"
//                 value={loginFormDetails.password}
//                 onChange={handleChange}
//             />
//             <button>Log in</button>
//         </form>
//     )
// }
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}