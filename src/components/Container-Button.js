import styled from 'styled-components';
import { useState } from 'react';

export default function ContainerButton({perguntasClicadas2,contador,colorir,perguntas2,setPerguntas2,clicados, setClicados}) {

    const red= '#FF3030';
    const verde = "#2FBE34";
    const amarelo ="#FF922E";
    return (
        <Footer>
        <Botoes><Botao onClick={()=>colorir(red)&setPerguntas2(perguntas2)} cor={red}>Não lembrei</Botao>
        <Botao onClick={()=>colorir(amarelo)&setPerguntas2(perguntas2)} cor={amarelo}>Quase não lembreo</Botao>
        <Botao onClick={()=>colorir(verde)&setPerguntas2(perguntas2)} cor={verde}>Zap!</Botao></Botoes> 
        {contador}/8 Concluidos</Footer>
    )
}

const Footer = styled.div`
width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;


`
const Botoes = styled.div`
    display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;

`
const Botao = styled.div`
width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props => props.cor};
  border-radius: 5px;
  border: 1px solid ${props => props.cor};;
  padding:5px;`

