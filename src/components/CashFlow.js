import { useContext, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import axios from 'axios';

export default function CashFlow(){
    const history = useHistory();
    const {type} = useParams();
    const {user} = useContext(UserContext);
    const [data, setData] = useState({value:"", description:""});
    
    function newFund(e){
        e.preventDefault();
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const body = {
            value: data.value,
            description: data.description,
            type: type
        }
        const promisse = axios.post("https://my-walliet.herokuapp.com/user",body,config);
        promisse.then((answer)=> {
            console.log(answer);
            history.push("/");
        }).catch((answer)=>{
            console.log(answer.response);
        })
    }

    function goToHome(){
        history.push("/");
    }

    return(
        <CashflowPage>
            <p className="title">{type === "income" && type !== "expense" ? "Nova Entrada" : "Nova Saída"}</p>
            <form onSubmit={newFund}>
                <input type="number" required placeholder="Valor" value={data.value} onChange={(e)=>setData({...data, value:e.target.value})}></input>
                <input type="text" required placeholder="Descrição" value={data.description} onChange={(e)=>setData({...data, description:e.target.value})}></input>
                <button type="submit">{type === "income" && type !== "expense" ? "Salvar entrada" : "Salvar saída" }</button>
            </form>
            <IoArrowBackCircleOutline className="icon" onClick={goToHome}/>
        </CashflowPage>
    )
}

const CashflowPage = styled.div`
    display: flex;
    flex-direction: column;
    height:100vh;
    width:100%;
    margin-top:25px;
    
    .title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 36px;
        font-size: 26px;
        font-weight: 700;
        color:#fff;
    }

    .icon{
        position:fixed;
        color:#fff;
        font-size: 30px;
        right:25px;
        top:22px;
        &:hover{
            font-size: 34px;
            right:23px;
            top:20px;
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
            padding: 0px 15px;
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

            &:hover{
                font-size: 21px;
            }
        }
    }

`