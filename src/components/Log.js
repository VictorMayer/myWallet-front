import styled from "styled-components"

export default function Log(){
    return(
        <LogContainer>
            <p>Não há registros de<br/> entrada ou saída</p>
        </LogContainer>
    )
}

const LogContainer = styled.div`
    background:#fff;
    width:100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    color: #868686;
    font-size: 20px;
`