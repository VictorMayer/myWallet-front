import Log from "./Log"
import styled from "styled-components";
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";


export default function Home(){

    function goToNewFunds(type){
        
    }

    return(
        <HomePage>
            <div className="title">
                <p>Olá, fulano</p>
                <span><RiLogoutBoxRLine className="icon"/></span>
            </div>
            
            <Log/>
            
            <div className="new-transaction-options">
                <div className="funds-option" onClick={()=>goToNewFunds("income")}>
                    <RiAddCircleLine className="icon"/>
                    <p>Nova<br/> entrada</p>
                </div>
                <div className="funds-option" onClick={()=>goToNewFunds("expense")}>
                    <RiIndeterminateCircleLine className="icon"/>
                    <p>Nova<br/> saída</p>
                </div>
            </div>
        </HomePage>
    )
}

const HomePage = styled.div`
    margin-top:30px;
    margin-bottom:16px;
    height: calc(100vh - 46px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 26px;
        font-size: 26px;
        font-weight: 700;
        color:#fff;

        .icon{
            position: fixed;
            right: 25px;
            top: 25px;
            color: #fff;
            font-size: 32px;
        }
    }

    .new-transaction-options{
        margin-top:13px;
        display: flex;
        justify-content: space-between;

        .funds-option{
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            background: #A328D6;
            color: #fff;
            height:114px;
            padding:10px;
            font-size: 17px;
            font-weight: 700;
            column-gap: 15px;
            border-radius: 5px;
            min-width: 125px;
            width: calc(50vw - 33px);
            .icon{
                font-size: 22px;
            }
        }
    }

`