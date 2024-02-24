import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"

const SignUp = () => {
    const [name, SetName] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()
    const navigate = useNavigate()

    const headleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {
            navigate('/')
        }).catch(err => console.log(err))
    }

  return (
    <div>
        <div className="container">
            <form onSubmit={headleSubmit}>
                <div className="">
                    <label htmlFor="">Name</label>
                    <input 
                        type="text"
                        className="form-control rounded-0"
                        name="uname"
                        onChange={(e) => SetName(e.target.value)}
                        />
                </div>
                <div className="">
                    <label htmlFor="">Email</label>
                    <input 
                        type="email"
                        className="form-control rounded-0"
                        name="uname"
                        onChange={(e) => SetEmail(e.target.value)}
                        />
                </div>
                <div className="">
                    <label htmlFor="">Password</label>
                    <input 
                        type="password"
                        className="form-control rounded-0"
                        name="uname"
                        onChange={(e) => SetPassword(e.target.value)}
                        />
                </div>
                <div className="">
                    <button className="btn btn-success" type="submit">Login</button>
                </div>
            </form>
            <div className="">
                <p>Already have an account ? <Link to={'/'}>Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp