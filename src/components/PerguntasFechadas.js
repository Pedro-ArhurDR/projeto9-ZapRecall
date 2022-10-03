import play from '../assets/img/seta_play.png'
import certo from '../assets/img/icone_certo.png'
import erro from '../assets/img/icone_erro.png'
import quase from '../assets/img/icone_quase.png'
import styled from 'styled-components'
export default function PerguntasFechadas({i,u,perguntasClicadas2,setPerguntasClicadas2,colorir,color,setPerguntas2,perguntas2,clicados,contador ,setContador}) {
    function mostrar(pergunta, index){
        setPerguntasClicadas2([...perguntasClicadas2,pergunta])
      setPerguntas2(perguntas2)
        
      }

      function icone(){
        if(perguntas2[i].cor==='#FF3030'){
          return erro
        }
        else if(perguntas2[i].cor==="#2FBE34"){
          return certo
        }
        else if(perguntas2[i].cor==="#FF922E"){
          return quase
        }
        else{
          return play
        }
      }
      
      console.log("POSIÇÃO: ",perguntas2[i])
    return (<>
    <PerguntaFechada u={u}cor={perguntas2[i].cor} ><p>{u.perguntaF}</p><img src={icone()} 
    onClick={()=>perguntas2[i].cor===""?mostrar(u.perguntaF)&& colorir():""}/></PerguntaFechada>
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