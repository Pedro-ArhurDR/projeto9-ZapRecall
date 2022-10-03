import styled from 'styled-components';
import ContainerButton from './Container-Button';
import ContainerCards from './Container-Cards';
import { useState } from 'react';
export default function Container() {
    const [perguntasClicadas2, setPerguntasClicadas2] = useState([])
    const [contador,setContador] = useState(0)
    const [color,setColor] = useState('#FFFFF')
    const [index, setIndex] = useState(-1)
    const[ perguntas2,setPerguntas2]= useState([
        {perguntaF:'Pergunta1',
          pergunta:'O que é JSX?',
      resposta:'Uma extensão de linguagem do JavaScript',
      status:"",
      cor:"",
    },
      {perguntaF:'Pergunta2',
        pergunta:'O React é __' ,
      resposta:
      'uma biblioteca JavaScript para construção de interfaces',
      status:"",
      cor:""},
      {perguntaF:'Pergunta3',
        pergunta:
      'Componentes devem iniciar com __',
      resposta:
      'letra maiúscula',
      status:"",
      cor:""},
      {perguntaF:'Pergunta4',
        pergunta:
      'Podemos colocar __ dentro do JSX',
      resposta:
     ' expressões',
     status:"",
      cor:""},
      {perguntaF:'Pergunta5',
        pergunta:
     ' Usamos o npm para __' ,
      resposta:
      'gerenciar os pacotes necessários e suas dependências',
      status:"",
      cor:""},
      {perguntaF:'Pergunta6',
        pergunta:
      'Usamos props para __',
      resposta:
       'passar diferentes informações para componentes',
       status:"",
      cor:"" },
      {perguntaF:'Pergunta7',
        pergunta:
      'Usamos estado (state) para __',
      resposta:
      'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
      status:"",
      cor:""},
      {perguntaF:'Pergunta8',
        pergunta:
      'O ReactDOM nos ajuda __' ,
      resposta:
      'interagindo com a DOM para colocar componentes React na mesma',
      status:"",
      cor:""}])
      const [clicados, setClicados] = useState(["undefined",])
      const [contador2, setContador2] = useState(0)
      const [contador3,setContador3]=useState(false)
    function colorir(c){
        const novoarray = perguntasClicadas2.shift()
        setPerguntasClicadas2(perguntasClicadas2)
        setColor([c])
        setPerguntas2(perguntas2[index].status=1)
        setPerguntas2(perguntas2[index].cor=c)
        setContador2(0)
        setContador3(false)
        if(contador<=8){
         setContador(contador+1)
        }
       }
    return(
        <Cntn>
            <ContainerCards contador3={contador3} setContador3={setContador3}  contador2={contador2} 
            setContador2={setContador2} setIndex={setIndex} clicados={clicados} setClicados={setClicados} perguntas2={perguntas2} 
            setPerguntas2={setPerguntas2} perguntasClicadas2={perguntasClicadas2} setPerguntasClicadas2={setPerguntasClicadas2} />
           <ContainerButton contador2={contador2} index={index} 
            perguntas2={perguntas2} setPerguntas2={setPerguntas2} 
           colorir ={colorir} contador={contador}
          />
        </Cntn>
    )
}


const Cntn = styled.div`
    background-color: #FB6B6B;
  width: 100vw;
  min-height: 168vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;