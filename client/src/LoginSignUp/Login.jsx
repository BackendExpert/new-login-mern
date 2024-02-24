import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = () => {
    
  return (
    <div className="container">
        <form>
            <div className="">
                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    className="form-control rounded-0"
                    name="email"
                    onChangeCapture={} 
                    placeholder="Email"/>
            </div>
            <div className="">
                <label htmlFor="">Password</label>
                <input 
                    type="password"
                    className="form-control rounded-0"
                    name="email"
                    onChangeCapture={} 
                    placeholder="Email"/>
            </div>
        </form>
    </div>
  )
}

export default Login