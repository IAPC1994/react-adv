import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { onChange, name, email, password1, password2, reset, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event:FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        reset();
    }

    return (
        <div>
            <h1> Register Page </h1>
            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }
                />
                { name.trim().length <= 0 && <span>The field is require</span> }
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ onChange }
                    className={ `${ !isValidEmail( email )  && 'has-error' }` }
                />
                { !isValidEmail( email )  && <span>The email is invalid</span> }
                <input 
                    type="password"
                    name="password1"
                    placeholder="Password"
                    value={ password1 }
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && <span>The field is require</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>The password expect 6 or more characters </span> }
                <input 
                    type="password"
                    name="password2"
                    placeholder="Repeat Password"
                    value={ password2 }
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>The field is require</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>The passwords need to be the same </span> }

                <button type="submit"> Create </button>
                <button type="button" onClick={ reset }> Clean </button>
            </form>
        </div>
    )
}
