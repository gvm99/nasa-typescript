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
    background: #fff;
    border-radius: 5px;
    margin-top: 50px;

`;

export const LinkDiv = styled.div`
    
    a{
        color: #F6531C;
        text-align: center;
        margin-left: 500px;
    }
`;

export const Table = styled.table`
  width: 100%; 
  /* Faz o componente ocupar 100% da largura da tela*/
  /* Navega entre os filhos do table até o tr */
  & > thead > tr {
    font-size: 1.2em; 
    /*Determina o tamanho da fonte */ 
    /* como 1.5 vezes o tamanho atual */
  }
  /* navega até o th do cabeçalho para alinhar */
  /* a esquerda e adicionar uma espaço ao redor */
  & > thead > tr > th {
    
    /* Coloca o texto do cabeçalho alinhado a esquerda*/
    text-align: left; 
    
    /* Top/Bottom Left/Right || Top Left Bottom Right */
    padding: 5px 10px; 
  }
  /* Navega até o tr do tbody e usa o hover para colorir */ 
  /* a linha em que o mouse está */
  & > tbody > tr:hover {
    /* Adiciona um delay para que as alterações */ 
    /* abaixo aconteçam */
    transition: 1s; 
    
    background: #c6c7c4;
  }
  /* navega até o td do corpo para alinhar a esquerda */
  /* e adicionar uma espaço ao redor */
  & > tbody > tr td {
    text-align: left;
    padding: 5px 10px;
    
    border-bottom: 1px solid #aaa; 
    /* Adiciona uma borda inferior de 1pixel de espessura*/
  }
  /* Somente telas com no maximo 767px de largura */
  /* irão visualizar o codigo abaixo */
  @media (max-width: 767px) {
    & {
      display: block;
      position: relative;
      width: 100%;
    }
    & thead,
    & tbody,
    & th,
    & td,
    & tr {
      display: block;
    }
    & td,
    & th {
      height: 35px;
    }
    & thead {
      float: left; /* Alinha o titulo a esquerda*/
    }
    & thead tr {
      font-size: 1em;
      
    }
    & tbody {
      width: auto;
      position: relative;
      overflow-x: auto; 
      
      /* tudo que ultrapassar os limites do componente na 
      horizontal recebera uma barra de rolagem*/
      -webkit-overflow-scrolling: touch; 
      
      /* informa que a barra de rolagem sera 
      touch screen em dispositivos que possuem*/
      white-space: nowrap; /* não deixa o texto quebrar de linha*/
    }
    & tbody tr {
      display: inline-block;
    }

    & a{
        color: #F6531C;
    }
  }
`;
