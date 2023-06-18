import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup";

function LoginForm() {
    const [submitting, setSubmitting]= useState(false);
    const [user, setUser] = useState("Some users");
const login = ()=>{
    setSubmitting(true)
    setTimeout(showUser, 5000)
    function showUser(){
        alert(user)
        setSubmitting(false);
    }
    
}

  return (
    <Formik
    initialValues={{ email: "", password: "", errors: null }}
    onSubmit={(values, { setErrors }) =>
      login(values).catch(() => {
        setErrors({ errors: "Invalid email or password" });
      })
    }
  >
        {({handleSubmit, errors})=>(
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
             <FormField>
             <Field
               placeholder="Email"
               name="email"
             />
             <ErrorMessage name="email" render={error=> <Label basic color="red" content={error}/>}/>
             </FormField>
            
            <FormField>
            <Field
               placeholder="Password"
               name="password"
               type="password"
             />
             <ErrorMessage name="password" render={error=> <Label basic color="red" content={error}/>}/>
            </FormField>
            <ErrorMessage name="errors" render={() => <Label style={{marginBottom: 10}} basic color="red" content={errors.errors} />} />
            <Button loading={submitting} positive content="Login" type="submit" fluid/>
          </Form>
        )}
    </Formik>
  
  )
}

export default LoginForm