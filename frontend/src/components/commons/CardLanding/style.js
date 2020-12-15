
import styled from "styled-components";

export const StyledCardLanding = styled.div`



.cards{
    display: flex;
    justify-content: center;
}
.container{
    position:relative;
    
}

.container .box{
    position: relative;
    width: calc(400px - 30px);
    height: calc(300px - 30px);
    background: #D3D3D3;
    float: left;
    margin: 1rem 1rem;
    box-sizing: border-box;
    overflow: hidden;
    border-radius:10px;
    box-shadow: 0px 0px 5px 1px black;

}

.Cardicon{
    
    margin-top: 7%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 100px;
}

.title {

    margin-top: 2rem;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem; 
}
`

