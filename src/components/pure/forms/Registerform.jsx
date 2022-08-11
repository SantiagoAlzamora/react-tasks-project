import React from 'react'
import { User } from '../../../models/user.class'
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik"
import * as Yup from "yup"
import { ROLES } from '../../../models/roles.enum'

export default function Registerform() {

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER

  }

  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(2, "Too short")
        .max(12, "Too long")
        .required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], "Select one").required("Required"),
      password: Yup.string().min(8, "Too short").required("required"),
      confirm: Yup.string().when("password", {
        is: value => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "The passwords must match")
      }).required("Required")

    }
  )

  function submit(values) {
    const user = new User();
  }

  return (
    <div>
      <h4>Registerform</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2))
        }

        }
      >
        {
          ({ values ,touched, errors, isSubmitting }) => (
            <Form>
              <label htmlFor="username">Username
                <Field id="username" name="username" type="text" placeholder="Username..." />
              </label>
              {
                errors.username && touched.username &&
                (
                  <ErrorMessage name='username' component='div' />
                )
              }
              <label htmlFor="email">Email
                <Field id="email" name="email" type="email" placeholder="Email..." />
              </label>
              {
                errors.email && touched.email &&
                (
                  <ErrorMessage name='email' component='div' />
                )
              }

              <Field component="select" id="role" name="role" >
                <option value={ROLES.ADMIN}>Admin</option>
                <option value={ROLES.USER}>User</option>
              </Field>

              <label htmlFor="password">Password
                <Field id="password" name="password" type="password" placeholder="Password..." />
              </label>
              {
                errors.password && touched.password &&
                (
                  <ErrorMessage name='password' component='div' />
                )
              }

              <label htmlFor="confirm">Confirm password
                <Field id="confirm" name="confirm" type="password" placeholder="Password..." />
              </label>
              {
                errors.confirm && touched.confirm &&
                (
                  <ErrorMessage name='confirm' component='div' />
                )
              }

              <button type='submit'>Sign Up</button>
              {isSubmitting ? (<p>Creating the user</p>):null}


            </Form>
          )
        }

      </Formik>
    </div>
  )
}
