import axios from 'axios';
import {useContext, useState} from 'react';
import Context from '../context/Context';

const Login = () => {

    const {setToken} = useContext(Context);
    const [values, setValues] = useState(
        {login: "", password: "", showPassword: false}
    );

    const showPasswordOn = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://profitmodel-server.herokuapp.com/api/auth/login', {
            phone: values.login,
            password: values.password
        })
        .then(res=>{
            localStorage.setItem('token', res.data.data);
            setToken(res.data.data);
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="container">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Log In"
                            onChange={e => setValues({...values, login: e.target.value })}/>
                        <label forhtml="floatingInput">Log In</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type={values.showPassword
                                ? "text"
                                : "password"}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={e => setValues({...values, password: e.target.value })}/>
                        <button
                            type='button'
                            className='w-100 btn btn-lg btn-info mt-3'
                            onClick={showPasswordOn}>show password</button>
                        <label forhtml="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login