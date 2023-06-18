import React from 'react'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../User/LoginForm'
import owner from "../../Assets/owner.png"

function Login() {
  return (
    <div className='container loginForm'>
      <section className="aboutSection">
            <div className='sm-conatiner'>
            <div className="sideImage">
            <img src={owner} alt="restaurant" width="400" />
          </div>
            <div className="aboutText">
            <h1>Login</h1>
            <LoginForm/>          
            </div> 
          </div> 
        </section>
    </div>
                

  )
}

export default Login