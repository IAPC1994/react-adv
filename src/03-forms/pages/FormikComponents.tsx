import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit = { ( values ) => {
                    console.log( values )
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required('First name is required'),
                        lastName: Yup.string()
                                        .max(10, 'Must be 15 characters or less')
                                        .required('Last name is required'),
                        email: Yup.string()
                                    .email('Invalid email format')
                                    .required('Email is required'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'You should to accept the terms and conditions'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'This option is not allowed')
                                    .required('Job Type is required'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor='firstName'>First Name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component='span'/>

                            <label htmlFor='email'> Email </label>
                            <Field name='email' type='email' />
                            <ErrorMessage name='email' component='span'/>

                            <label htmlFor='jobType'> Job Type </label>
                            <Field name='jobType' as='select'>
                                <option value=''>Select one option...</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span'/>

                            <label> 
                                <Field name='terms' type='checkbox' />
                                Terms and conditions 
                            </label>
                            <ErrorMessage name='terms' component='span'/>
                            
        
                            <button type="submit"> Submit </button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    );
}
