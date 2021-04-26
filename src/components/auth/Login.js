import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey } from "./authSettings"
// import "./Login.css"


export const Login = ({setAuthUser}) => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem(userStorageKey, exists.id)
                    setAuthUser(exists)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Writers Block!</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register for an account</Link>
            </section>
        </main>
    )
}






















// import React, { useRef, useState } from "react"
// import { Link, useHistory } from "react-router-dom";
// import "./Login.css"


// export const Login = () => {
//     const [loginUser, setLoginUser] = useState({ email: "" })
//     const [existDialog, setExistDialog] = useState(false)

//     const history = useHistory()

//     const handleInputChange = (event) => {
//         const newUser = { ...loginUser }
//         newUser[event.target.id] = event.target.value
//         setLoginUser(newUser)
//     }


//     const existingUserCheck = () => {
        
//         return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
//             .then(res => res.json())
//             .then(user => user.length ? user[0] : false)
//     }

//     const handleLogin = (e) => {
//         e.preventDefault()

//         existingUserCheck()
//             .then(exists => {
//                 if (exists) {
                   
//                     sessionStorage.setItem("writersBlock_user", exists.id)
//                     history.push("/")
//                 } else {
//                     setExistDialog(true)
//                 }
//             })
//     }

//     return (
//         <main className="container--login">
//             <dialog className="dialog dialog--auth" open={existDialog}>
//                 <div>User does not exist</div>
//                 <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
//             </dialog>
//             <section>
//                 <form className="form--login" onSubmit={handleLogin}>
//                     <h1>Writer's Block</h1>
//                     <h2>Please sign in</h2>
//                     <fieldset>
//                         <label htmlFor="inputEmail"> Email address </label>
//                         <input type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Email address"
//                             required autoFocus
//                             value={loginUser.email}
//                             onChange={handleInputChange} />
//                     </fieldset>
//                     <fieldset>
//                         <button type="submit">
//                             Sign in
//                         </button>
//                     </fieldset>
//                 </form>
//             </section>
//             <section className="link--register">
//                 <Link to="/register">Register for an account</Link>
//             </section>
//         </main>
//     )
// }





// import React, { useRef } from "react"
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { WritersBlock } from "./WritersBlock";
// import "./Login.css"
// export const Login = ({setAuthUser}) => {
//     const email = useRef()
//     const existDialog = useRef()
//     const history = useHistory()
//     const existingUserCheck = () => {
//         return fetch(`http://localhost:8088/users?email=${email.current.value}`)
//             .then(res => res.json())
//             .then(user => user.length ? user[0] : false)
//     }
//     const handleLogin = (e) => {
//         e.preventDefault()
//         existingUserCheck()
//             .then(exists => {
//                 if (exists) {
//                     WritersBlock.setAuthUser(exists)
//                     history.push("/")
//                 } else {
//                     existDialog.current.showModal()
//                 }
//             })
//     }
//     return (
//         <main className="container--login">
//             <dialog className="dialog dialog--auth" ref={existDialog}>
//                 <div>User does not exist</div>
//                 <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
//             </dialog>
//             <section>
//                 <form className="form--login" onSubmit={handleLogin}>
//                     <h1>Writer's Block!</h1>
//                     <h2>Please sign in</h2>
//                     <fieldset>
//                         <label htmlFor="inputEmail"> Email address </label>
//                         <input ref={email} type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Email address"
//                             required autoFocus />
//                     </fieldset>
//                     <fieldset>
//                         <button type="submit">
//                             Sign in
//                         </button>
//                     </fieldset>
//                 </form>
//             </section>
//             <section className="link--register">
//                 <Link to="/register">Not a member yet?</Link>
//             </section>
//         </main>
//     )
// }