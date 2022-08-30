import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Task } from '../../../models/task.class'
import { LEVELS } from '../../../models/levels.enum'

export default function TaskFormik({ add }) {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        completed: false
    }

    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                .max(25, "Too long")
                .required("Required"),
            description: Yup.string().required("Required"),
        }
    )

    return (
        <div>
            <h4>TaskFormik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        add(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
                }

                }
            >
                {
                    ({ values, touched, errors, isSubmitting }) => (
                        <Form>
                            <label htmlFor="name">Username
                                <Field id="name" name="name" type="text" placeholder="Name..." />
                            </label>
                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name='name' component='div' />
                                )
                            }
                            <label htmlFor="description">Email
                                <Field id="description" name="description" type="text" placeholder="Description..." />
                            </label>
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name='description' component='div' />
                                )
                            }

                            <Field component="select" id="level" name="level" >
                                <option value={LEVELS.NORMAL}>NORMAL</option>
                                <option value={LEVELS.URGENT}>URGENT</option>
                                <option value={LEVELS.BLOCKING}>BLOCKING</option>
                            </Field>

                            <button type='submit'>Create a task</button>
                            {isSubmitting ? (<p>Creating the task</p>) : null}


                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
