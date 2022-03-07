import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1> Register Formik Page </h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values)
                }} 
                validationSchema = {
                    Yup.object({
                    name: Yup.string()
                                .min(2, 'The name must be 2 characters or more')
                                .max(15, 'The name must be 15 characters or less')
                                .required('Name is required'),
                    email: Yup.string()
                                .email('The email is not valid')
                                .required('Email is required'),
                    password1: Yup.string()
                                .min(6, 'Must be 6 characters or more')
                                .required('Password is required'),
                    password2: Yup.string()
                                .oneOf([ Yup.ref('password1') ], 'The passwords must be equals')
                                .required('Repeat the password is required')
        
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput label='Name' name='name' placeholder='Enter your name' />
                            <MyTextInput label='Email' name='email' placeholder='Enter your email' type='email' />
                            <MyTextInput label='Password' name='password1' placeholder='******' type='password' />
                            <MyTextInput label='Repeat your password' name='password2' placeholder='******' type='password' />
                        
                            <button type="submit"> Create </button>
                            <button type="button" onClick={ handleReset }> Clean </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
