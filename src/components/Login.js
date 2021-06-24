import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Loader from './Loader';
import axios from "axios";

export default function Login(){

    const [data, setData] = useState({email:"", password:""});
    const [requesting, setRequesting] = useState(false);
    const { setUser } = useContext(UserContext);
    const history = useHistory();
    
    function login(e){
        e.preventDefault();
        setRequesting(true);
        const body = {
            email: data.email,
            password:data.password
        }
        const promisse = axios.post("http://localhost:4000/sign-in",body);
        promisse.then((answer)=>{
            setRequesting(false);
            console.log(answer);
            setUser(answer.data);
            history.push("/");
        }).catch((err)=>{
            console.log(err.response);
            setRequesting(false);
        })
    }

    function goToSignUp(){
        history.push("/sign-up");
    }

    return(
        <>
        <PageContainer>
            {requesting ? <Loader/> :
            <>
            <p className="logo">MyWallet</p>
            <form onSubmit={login}>
                <input required type="email" placeholder="E-mail" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}></input>
                <input required type="password" placeholder="Senha" value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}></input>
                <button type="submit">Entrar</button>
            </form>
            <p onClick={goToSignUp} className="toggle-sign">Primeira Vez? Cadastre-se!</p>
            </>
            }
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
        margin-bottom: 36px;
        font-size: 32px;
        font-family: 'Saira Stencil One', cursive; 
        color:#fff;
        &:hover{
            font-size: 32.75px;
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
            background: #fff;
            height:58px;
            width: 90vw;
            max-width: 500px;
            font-size:20px;

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
                font-size: 21px;
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
            text-decoration: underline;
            font-size: 15.5px;
        }
    }

`