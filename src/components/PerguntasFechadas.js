import play from '../assets/img/seta_play.png'
import certo from '../assets/img/icone_certo.png'
import erro from '../assets/img/icone_erro.png'
import quase from '../assets/img/icone_quase.png'
import styled from 'styled-components'
export default function PerguntasFechadas({setIndex,contador3, setContador3, 
  indice,u,perguntasClicadas2,setPerguntasClicadas2,setPerguntas2,perguntas2}) {
    
    function mostrar(pergunta){
        setPerguntasClicadas2([...perguntasClicadas2,pergunta])
      setPerguntas2(perguntas2)
      console.log("index", indice)
        setIndex(indice)
        setContador3(true)
      }
      console.log("contador3", contador3)
      function icone(){
        if(perguntas2[indice].cor==='#FF3030'){
          return erro
          
        }
        else if(perguntas2[indice].cor==="#2FBE34"){
          return certo
        }
        else if(perguntas2[indice].cor==="#FF922E"){
          return quase
        }
        else{
          return play
        }
      }
      
    return (<>
    <PerguntaFechada data-identifier="flashcard" u={u}cor={perguntas2 [indice].cor} ><p data-identifier="flashcard-index-item">{u.perguntaF}</p><img data-identifier="flashcard-show-btn" src={icone()} 
    onClick={()=>contador3===true?"":perguntas2[indice].cor===""? mostrar(u.perguntaF):""}/></PerguntaFechada>
    </>
        
        
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
    text-decoration:${(props)=>props.u.status!==""?"line-through":""};
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props)=>props.cor};
  }
`