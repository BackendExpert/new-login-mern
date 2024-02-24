import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = () => {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()

    const headleLogin = (e) => {}
  return (
    <div className="container">
        <form>
            <div className="">
                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    className="form-control rounded-0"
                    name="email"
                    onChangeCapture={(e) => SetEmail(e.target.value)} 
                    placeholder="Email"/>
            </div>
            <div className="">
                <label htmlFor="">Password</label>
                <input 
                    type="password"
                    className="form-control rounded-0"
                    name="email"
                    onChangeCapture={(e) => SetPassword(e.target.value)} 
                    placeholder="Password"/>
            </div>
        </form>
        <div className="">
            <p>Don't have an Account ? <Link to={'/SignUp'}>SignUp</Link></p>
        </div>
    </div>
  )
}

export default Login