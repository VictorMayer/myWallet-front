import { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

export default function Registrations() {

    const [data, setData] = useState({name:"", email:"", password:"", confirmPassword:""});
    const [requesting, setRequesting] = useState(false);
    const history = useHistory();

    function register(e){
        e.preventDefault();
        setRequesting(true);
        if(data.password !== data.confirmPassword){
            alert("As senhas devem ser iguais!");
            return;
        }
        const body = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        const promisse = axios.post("https://my-walliet.herokuapp.com/sign-up",body);
        promisse.then((answer)=>{
            console.log(answer);
            setRequesting(false);
            alert("Cadastro Concluído!");
            setData({name:"", email:"", password:"", confirmPassword:""});
            history.push("/login");

        }).catch((err)=>{
            setRequesting(false);
            setData({...data, password:"", confirmPassword:""});
            console.log(err);
        });
    }
    
    function goToLogin(){
        history.push("/login");
    }

    return(
        <>
        <PageContainer request={requesting}>
            <p className="logo">MyWallet</p>
            <form onSubmit={register}>
                <input disabled={requesting} required type="text" placeholder="Nome" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}></input>
                <input disabled={requesting} required type="email" placeholder="E-mail" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}></input>
                <input disabled={requesting} required type="password" placeholder="Senha" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}></input>
                <input disabled={requesting} required type="password" placeholder="Confirme a senha" value={data.confirmPassword} onChange={(e)=>setData({...data, confirmPassword:e.target.value})}></input>
                <button disabled={requesting} type="submit">{requesting ? "Cadastrando..." : "Cadastrar" }</button>
            </form>
            <p onClick={goToLogin} className="toggle-sign">Já tem uma conta? Entre agora!</p>
        </PageContainer>
        </>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    width:100%;

    .logo{
        margin-bottom: 40px;
        font-size: 32px;
        font-family: 'Saira Stencil One', cursive; 
        color:#fff;
        cursor: default;
        &:hover{
            font-size: 34px;
            margin-bottom: 38px;
        }
    }

    form{
        display: flex;
        flex-direction:column;
        align-items: center;
        row-gap: 13px;
        
        input{
            border-style: none;
            outline-style: none;
            border-radius: 5px;
            padding-left: 15px;
            background: ${props => props.request ? "#ccc" : "#fff" };
            height:58px;
            width: 90vw;
            max-width: 500px;
            font-size: 20px;

            &::placeholder{
                font-size: 20px;
                color:#000;
            }
        }

        button{
            height:58px;
            width: 90vw;
            max-width: 500px;
            font-size: 20px;
            font-weight: 700;
            border-radius: 5px;
            border-style: none;
            background: #A328D6;
            color:#fff;
            cursor:pointer;
            &:hover{
                font-size: 21.5px;
            }
        }
    }

    .toggle-sign{
        margin-top: 40px;
        font-size: 15px;
        font-weight: 700;
        color:#fff;
        cursor: pointer;

        &:hover{
            font-size: 15.5px;
        }
    }

`