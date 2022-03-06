import { Formik,  Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstract = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>
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
                            <MyTextInput label='First Name' name='firstName' placeholder='First Name'/>
                            <MyTextInput label='Last Name' name='lastName' placeholder='Last Name'/>
                            <MyTextInput label='Email' name='email' placeholder='Email' type='email'/>

                            <MySelect label='Job Type' name='jobType'>
                                <option value=''>Select one option...</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT Junior</option>
                            </MySelect>
                        
                            <MyCheckbox label='Terms and conditions' name='terms'/>
        
                            <button type="submit"> Submit </button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    );
}
