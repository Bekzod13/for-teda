import {useContext, useState} from 'react';
import Context from '../context/Context';

// import icons
import {BsEyeSlash, BsEye} from 'react-icons/bs';
import {FiSun, FiMoon} from 'react-icons/fi';
import Api from '../api/Api';

const Login = () => {

    const {setToken, setDark, dark} = useContext(Context);
    const [values, setValues] = useState(
        {login: "", password: "", showPassword: false}
    );

    const showPasswordOn = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await Api.post('auth/login', {
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
        <div className="login-container">
            <div className="dark-btn" onClick={()=>setDark(!dark)}>
                {
                    dark ? 
                    <FiSun/>:
                    <FiMoon/>
                }
            </div>
            <main className="login">
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login-form">
                        <input placeholder='Login' type="text" onChange={e => setValues({...values, login: e.target.value })}/>
                    </div>
                    <div className="login-form">
                        <input
                            type={values.showPassword
                                ? "text"
                                : "password"}
                                placeholder="Password"
                                onChange={e => setValues({...values, password: e.target.value })}/>
                        <span className='show-eye' onClick={showPasswordOn}>
                            {
                                values.showPassword ?
                                <BsEyeSlash/>:
                                <BsEye/>

                            }
                        </span>
                    </div>
                    <button className="login-btn" type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login