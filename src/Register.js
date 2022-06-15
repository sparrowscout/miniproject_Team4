import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Link } from "react-router-dom";


const Register = () => {
    const [error , setError] = useState("");
    const [pwError, setPwError] = useState(false);
    const [pwConfirm, setPwConfirm] = useState(false);
    const [nickError, setNickError] = useState(false);

    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
        if (Password.length<5){
            setPwError(true);
        } else {
            setPwError(false)
        }
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
        if (Name.length>10){
            setNickError(true);
        } else {
            setNickError(false);
        }
    }

    const onconfirmPasswordHandler = (event) => {
        setconfirmPassword(event.currentTarget.value)
        if (confirmPassword === Password) {
            setPwConfirm(false);
        } else {
            setPwConfirm(true);
        }
    }


    let data = {
        email: Email,
        password: Password,
        nickname:Name
    }

    async function userRegister () {
        await fetch('/api/users/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data)=> {
            if(!data.result){
                console.log(data.err_msg)
                setError(data.err_msg)
            } else {
                alert('회원가입 성공!')
                navigate("/login")
            }
        })
    }





    return (
        <Container>
            <h1>Join us</h1>
            <LoginContainer>
                <input placeholder="email" onChange={onEmailHandler}/> <br />
                {error !== "" ? <Msgbox>❗️ {error}</Msgbox> : null}
                <input placeholder="password" type="password"onChange={onPasswordHandler}/> <br />
                {pwError ? <Msgbox>❗️비밀번호는 최소 5자 이상이어야 합니다.</Msgbox> : null}
                <input placeholder="password confirm" type="password" onChange={onconfirmPasswordHandler}/> <br />
                {pwConfirm ? <Msgbox>❗️비밀번호가 일치하지 않습니다.</Msgbox> : null}
                <input placeholder="nickname" onChange={onNameHandler}/> <br />
                {nickError ? <Msgbox>❗️닉네임은 10자 이하여야 합니다.</Msgbox> : null}
                <button onClick={userRegister} type="submit">회원가입</button>
            </LoginContainer>

            <Link to="/login" >로그인 </Link>


        </Container>
    )
}

const Container = styled.div`
border: 1px solid transparent;
max-width: 480px;
margin: 30px auto;
background-color: white;
border-radius: 10px;
padding: 30px 30px 80px 30px;
text-align: center;

a{
            font-size: 12px;

            :link{
                color: #FF8A00;
            }

            :visited{
                color: #FF8A00;
            }
            :hover{
                color: #222;
            }
            :active{
                color:#FFE2BF;
            }
        }
`;

const LoginContainer = styled.div`


span {
    font-display: unset;
}

input {
    padding: 5px;
    width: 200px;
    margin: 10px 0px 0px;
    background-color: white;
    border: 0px solid transparent;
    border-bottom: 1px #FFBD42 solid;
    padding: 10px;

}

button {
    background-color: #FFBD42;
    color: #222;    
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


const ErrMsg = styled.span`

`;

const Msgbox = styled.div`
margin: 3px 0px 9px;
color: #e74c3c;
font-size: 12px;
text-align: center;
`;
export default Register;