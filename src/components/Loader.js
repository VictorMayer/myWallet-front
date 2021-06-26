import styled from 'styled-components';
import preloader from '../images/preloader2.svg';

export default function Loader(){
    return(
        <PreloaderStyle>
            <img src={preloader} alt="preloader"></img>
            <p>Loading . . .</p>
        </PreloaderStyle>
    )
}

const PreloaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:60vh;
    p{
        margin-right:5px;
        margin-top:25px;
        color:white;
        font-size: 20px;
    }
    img{
        height:20vh;
    }
`