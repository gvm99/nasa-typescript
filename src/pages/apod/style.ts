import styled from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
    font-size:48px;
    color:#f0f0f5;
    text-align: center
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    margin-left: 350px;
    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
    } 
    
    button {
        width: 210px;
        height: 70px;
        background: #F6531C;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        transition: background-color: 0.2s;
        &:hover{
            background: ${shade(0.2, "#F6531C")};
        };
        
    }
`;

export const ApodDiv = styled.div`
    margin-top: 110px;
    max-width: 700px;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display:block;
    display: flex;
    align-itens:center;
    margin-left: 350px;
    img{
        width: 50%;
        margin-right: 50px;
        object-fit: contain;
        max-height: 80vh;
    }
`;

export const LinkDiv = styled.div`
    
    a{
        color: #F6531C;
        text-align: center;
        margin-left: 500px;
        margin-top: 50px;
    }
`;