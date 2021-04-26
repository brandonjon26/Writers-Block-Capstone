import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { authApi, userStorageKey } from "./authSettings"
// import "./Login.css"

export const Register = ({setAuthUser}) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem(userStorageKey, createdUser.id)
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Application Name</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                </fieldset>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}


















// import React, { useState } from "react"
// import { useHistory } from "react-router-dom";
// import "./Login.css"

// export const Register = () => {

//     const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
//     const [conflictDialog, setConflictDialog] = useState(false)

//     const history = useHistory()

//     const handleInputChange = (event) => {
//         const newUser = { ...registerUser }
//         newUser[event.target.id] = event.target.value
//         setRegisterUser(newUser)
//     }

//     const existingUserCheck = () => {
        
//         return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
//             .then(res => res.json())
//             .then(user => !!user.length)
//     }

//     const handleRegister = (e) => {
//         e.preventDefault()

//         existingUserCheck()
//             .then((userExists) => {
//                 if (!userExists) {
                  
//                     fetch("http://localhost:8088/users", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify({
//                             email: registerUser.email,
//                             name: `${registerUser.firstName}_${registerUser.lastName}`
//                         })
//                     })
//                         .then(res => res.json())
//                         .then(createdUser => {
//                             if (createdUser.hasOwnProperty("id")) {
                                
//                                 sessionStorage.setItem("writersBlock_user", createdUser.id)
//                                 history.push("/")
//                             }
//                         })
//                 }
//                 else {
//                     setConflictDialog(true)
//                 }
//             })

//     }

//     return (
//         <main style={{ textAlign: "center" }}>

//             <dialog className="dialog dialog--password" open={conflictDialog}>
//                 <div>Account with that email address already exists</div>
//                 <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
//             </dialog>

//             <form className="form--login" onSubmit={handleRegister}>
//                 <h1 className="h3 mb-3 font-weight-normal">Please Register for Application Name</h1>
//                 <fieldset>
//                     <label htmlFor="firstName"> First Name </label>
//                     <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="lastName"> Last Name </label>
//                     <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="inputEmail"> Email address </label>
//                     <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
//                 </fieldset>
//                 <fieldset>
//                     <button type="submit"> Sign in </button>
//                 </fieldset>
//             </form>
//         </main>
//     )
// }









// import React, { useRef } from "react"
// import { useHistory } from "react-router-dom"
// import "./Login.css"
// export const Register = ({setAuthUser}) => {
//     const firstName = useRef()
//     const lastName = useRef()
//     const email = useRef()
//     const conflictDialog = useRef()
//     const history = useHistory()
//     const existingUserCheck = () => {
//         return fetch(`http://localhost:8088/users?email=${email.current.value}`)
//             .then(res => res.json())
//             .then(user => !!user.length)
//     }
//     const handleRegister = (e) => {
//         e.preventDefault()
//         existingUserCheck()
//             .then((userExists) => {
//                 if (!userExists) {
//                     fetch("http://localhost:8088/users", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify({
//                             email: email.current.value,
//                             name: `${firstName.current.value} ${lastName.current.value}`
//                         })
//                     })
//                         .then(res => res.json())
//                         .then(createdUser => {
//                             if (createdUser.hasOwnProperty("id")) {
//                                 setAuthUser(createdUser)
//                                 history.push("/")
//                             }
//                         })
//                 }
//                 else {
//                     conflictDialog.current.showModal()
//                 }
//             })
//     }
//     return (
//         <main style={{ textAlign: "center" }}>
//             <dialog className="dialog dialog--password" ref={conflictDialog}>
//                 <div>Account with that email address already exists</div>
//                 <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
//             </dialog>
//             <form className="form--login" onSubmit={handleRegister}>
//                 <h1 className="h3 mb-3 font-weight-normal">Please Register for Finding Bliss</h1>
//                 <fieldset>
//                     <label htmlFor="firstName"> First Name </label>
//                     <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="lastName"> Last Name </label>
//                     <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="inputEmail"> Email address </label>
//                     <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
//                 </fieldset>
//                 <fieldset>
//                     <button type="submit"> Sign in </button>
//                 </fieldset>
//             </form>
//         </main>
//     )
// }

