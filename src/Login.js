import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {

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
        }).then((response) => response.json())
        .then((data) => console.log('성공:', data))
        navigate("/")
    }



        return (
            <Container>
                <h1>Login</h1>
                <LoginContainer>
                    <input placeholder="email" onChange={onEmailHandler} /> <br />
                    <input placeholder="password" type="password" onChange={onPasswordHandler} /> <br />
                    <button type="submit" onClick={userLogin}>로그인</button>
                </LoginContainer>
                <Link to="/register" >회원가입 </Link>

            </Container>
        );
        
        }
    const Container = styled.div`
        border: 1px solid transparent;
        max-width: 480px;
        margin: 30px auto;
        background-color: white;
        border-radius: 10px;
        padding: 30px 30px 50px 30px;
        text-align: center;


        a{
            font-size: 12px;
        }
        `;

    const LoginContainer = styled.div`
        input {
            padding: 5px;
            width: 200px;
            margin: 5px 0px;
        }

        button {
            background-color: #FFBD42;
            color:#222;
            padding: 10px;
            border: 1px solid transparent;
            border-radius: 5px;
            width: 214px;
            margin: 10px 0px;


            :hover {
                background-color: #FFBD42;
                color: white;
            }

            :active {
                background-color: #F59300;
            }
        }
        `;



    export default Login;