import play from '../assets/img/seta_play.png'
import styled from 'styled-components'
export default function PerguntasFechadas({u,perguntasClicadas2,setPerguntasClicadas2}) {
    function mostrar(pergunta, index){
        setPerguntasClicadas2([...perguntasClicadas2,pergunta])
        console.log(pergunta)
        
      }
    return (
        <PerguntaFechada><p>{u.perguntaF}</p><img src={play} onClick={()=>mostrar(u.perguntaF)}/></PerguntaFechada>
    )
}
const PerguntaFechada = styled.div`
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  img{
    width:20px;
    height:20px;
  }
  p{
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }
`