import React from 'react'
import { Grid } from 'semantic-ui-react'
import LoginForm from '../User/LoginForm'
import owner from "../../Assets/owner.png"
import {Segment, Header} from 'semantic-ui-react'

function Login() {
  return (
    <>
        <Segment className="m-1 bg-custom paddings-3">
    <Header>
      <h1 className="ui icon center aligned header">Login</h1>
    </Header>
    </Segment>
    <div className='container loginForm'>
      <section className="aboutSection ui greybg">
            <div className='sm-conatiner'>
            <div className="sideImage">
            <img src={owner} alt="restaurant" width="400" />
          </div>
            <div className="aboutText">
            <h2 className="ui ui grey inverted header">Enter Credentials</h2>
            <LoginForm/>          
            </div> 
          </div> 
        </section>
    </div>
    </>
   
                

  )
}

export default Login