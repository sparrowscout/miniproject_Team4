import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { LoginContainer, Container, Msgbox } from "./style/styles";


const Register = () => {
    const [error , setError] = useState("");
    const [pwError, setPwError] = useState(false);
    const [pwConfirm, setPwConfirm] = useState(true);
    const [nickError, setNickError] = useState(false);
    const [emailVaild, setEmailValid] = useState(false);

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
        if (Password.length<4){
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
        };
    }

    const onconfirmPasswordHandler = (event) => {
        setconfirmPassword(event.currentTarget.value)

    }


    let data = {
        email: Email,
        password: Password,
        nickname:Name
    }

    async function userRegister () {
        validCheck();
        if (!isActive){
            return
        }
        await fetch('http://3.39.226.189/api/users/register',{
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

    const [isActive, setIsActive] = useState(true);

// const isValidEmail = Email.includes('@') && Email.includes('.');
// const isValidPassword = confirmPassword === Password && Password.length>5
// const isValidInput = Name.length >= 1 && Email.length >= 1 && Password.length >= 1;


const validPw = () => {
    if (confirmPassword === Password){
        setPwConfirm(true);
    } else {
        setPwConfirm(false);
    };
}
    const validCheck = () => {
        validPw()
     if (nickError && pwConfirm && pwError  === false){
    setIsActive(true);
   } else if (!Name.length >= 1 && Email.length >= 1 && Password.length >= 1){
    setIsActive(false);
    alert('내용을 채워주세요!')
   } else {
    setIsActive(false)
   }   
    }

   


    return (
        <Container>
            <h1>Join us</h1>
            <LoginContainer>
            
                <input placeholder="email" onChange={onEmailHandler}/> <br />
                {error === "중복된 Email이 존재합니다." ? <Msgbox>❗️ {error}</Msgbox> : null}
                <input placeholder="password" type="password"onChange={onPasswordHandler}/> <br />
                {pwError ? <Msgbox>❗️비밀번호는 최소 5자 이상이어야 합니다.</Msgbox> : null}
                <input placeholder="password confirm" type="password" onChange={onconfirmPasswordHandler}/> <br />
                {pwConfirm ? null : <Msgbox>❗️비밀번호가 일치하지 않습니다.</Msgbox>}
                <input placeholder="nickname" onChange={onNameHandler}/> <br />
                {nickError ? <Msgbox>❗️닉네임은 10자 이하여야 합니다.</Msgbox> : null}
                {error === "중복된 닉네임이 존재합니다." ? <Msgbox>❗️ {error}</Msgbox> : null}
                <button onClick={userRegister} type="submit">회원가입</button> 
            </LoginContainer>

            <Link to="/login" >로그인 </Link>


        </Container>
    )
}





export default Register;