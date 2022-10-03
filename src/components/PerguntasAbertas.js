import virar from '../assets/img/seta_virar.png'
import styled from 'styled-components'
import { useState } from 'react'
export default function PerguntasAbertas({contador2, setContador2,u,perguntas2,setPerguntas2,clicados, setClicados}) {
    const [perguntasClicadas, setPerguntasClicadas] = useState([])
    console.log("CONTADOR",contador2)
    function clicou(pergunta){
        if(!perguntasClicadas.includes(pergunta)){
          setPerguntasClicadas([...perguntasClicadas,pergunta])
        setPerguntas2([...perguntas2])
        setClicados([...clicados,pergunta.perguntaF])
        setContador2(contador2+1)
        }
      }
    return (
        <PerguntaAberta data-identifier="flashcard-question">{perguntasClicadas.includes(u)?u.resposta:u.pergunta}<img data-identifier="flashcard-turn-btn" onClick={()=>clicou(u)} src={virar}/></PerguntaAberta>
    )
}
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
`
