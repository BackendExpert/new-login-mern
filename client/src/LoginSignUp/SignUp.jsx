import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const SignUp = () => {
    const [name, SetName] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()

  return (
    <div>
        <div className="container">
            <form>
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
        </div>
    </div>
  )
}

export default SignUp