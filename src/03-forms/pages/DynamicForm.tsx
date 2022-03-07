import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';


const initialValues: { [key:string]: any } = {};
const requiredFields: {  [key:string]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if( rule.type === 'required'){
            schema = schema.required('This field is required')
        }

        if( rule.type === 'minLength' ){
            schema = schema.min( (rule as any).value || 2, `This field required ${ (rule as any).value || 2 } characters` )
        }

        if( rule.type === 'email' ){
            schema = schema.email('The email is invalid');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {

    console.log(formJson);
    return (
        <div>
            <h1>Dynamic Forms</h1>
            <Formik
                initialValues={ initialValues }
                onSubmit={ ( values ) => console.log(values) }
                validationSchema={ validationSchema }
            >
                {(formik) => (
                    <Form noValidate>
                        { formJson.map( ({ type, name, label, placeholder, options }) => {

                            if( type === 'input' || type === 'password' || type === 'email' ){
                                return <MyTextInput 
                                    label={ label } 
                                    name={ name } 
                                    type={ (type as any)} 
                                    placeholder={ placeholder } 
                                    key={ name }
                                />
                            }else if( type === 'select'){
                                return (
                                    <MySelect 
                                        key={ name } 
                                        name={ name } 
                                        label={ label }>
                                            <option value=""> Select an option </option>
                                            {
                                                options?.map( ({ id, label }) => (
                                                    <option key={ id } value={ id }> { label } </option>
                                                ))
                                            }
                                    </MySelect>
                                )
                            }

                            throw new Error (`El type ${ type } no es soportado `);
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
