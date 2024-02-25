import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Login = () => {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const headleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
            if(res.data.Status === "Success"){
                if(res.data.role === "admin"){
                    navigate('/Dashboard')
                }
            }
        }).catch(err => console.log(err))
    }
  return (
    <div className="container">
        <form onSubmit={headleLogin}>
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
            <div className="">
                <button type="submit" className="btn btn-success">Login</button>
            </div>
        </form>
        <div className="">
            <p>Don't have an Account ? <Link to={'/SignUp'}>SignUp</Link></p>
        </div>
    </div>
  )
}

export default Login