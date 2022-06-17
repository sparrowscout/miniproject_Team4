import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, LoginContainer, ErrMsg } from "./style/styles";


const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [error , setError] = useState("");

    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    let data = {
        email: Email,
        password: Password
    }

    async function userLogin() {
        await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                if(!data.result){
                    console.log(data.err_msg)
                    setError(data.err_msg)
                } else {
                    setIsLogin(true);
                    console.log(isLogin)
                    window.location.replace("/");
                }

            })
        }


    return (
        <Container>
            <h1>Login</h1>
            <LoginContainer>
                <input placeholder="email" onChange={onEmailHandler} /> <br />
                <input placeholder="password" type="password" onChange={onPasswordHandler} /> <br />
                {error !== "" ? <><ErrMsg>❗️ {error}</ErrMsg><br/></> : null}
                <button type="submit" onClick={userLogin}>로그인</button>
            </LoginContainer>
            <Link to="/register" >회원가입</Link>

        </Container>
    );

}



export default Login;