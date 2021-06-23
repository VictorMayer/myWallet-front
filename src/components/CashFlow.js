import { useState } from "react";
import { useParams } from "react-router"
import styled from "styled-components";


export default function CashFlow(){
    const {type} = useParams();
    const [data, setData] = useState({value:"", description:""});
    
    function newFund(e){
        e.preventDefault();
    }

    return(
        <CashflowPage>
            <p className="title">{type === "income" && type !== "expense" ? "Nova Entrada" : "Nova Saída"}</p>
            <form onSubmit={newFund}>
                <input type="text" required value={data.value} onChange={(e)=>setData({...data, value:e.target.value})}></input>
                <input type="text" requiter value={data.description} onChange={(e)=>setData({...data, description:e.target.value})}></input>
                <button type="submit">{type === "income" && type !== "expense" ? "Salvar entrada" : "Salvar saída" }</button>
            </form>
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

            &:hover{
                font-size: 21px;
            }
        }
    }

`