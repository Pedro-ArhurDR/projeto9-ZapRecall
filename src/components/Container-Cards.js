import LogoG from './LogoG';
import { useState } from 'react';
import PerguntasAbertas from './PerguntasAbertas';
import PerguntasFechadas from './PerguntasFechadas';

export default function ContainerCards({setPerguntasClicadas2,perguntasClicadas2 }) {
    const[ perguntas2,setPerguntas2]= useState([
      {perguntaF:'Pergunta1',
        pergunta:'O que é JSX?',
    resposta:'Uma extensão de linguagem do JavaScript'
  },
    {perguntaF:'Pergunta2',
      pergunta:'O React é __' ,
    resposta:
    'uma biblioteca JavaScript para construção de interfaces'},
    {perguntaF:'Pergunta3',
      pergunta:
    'Componentes devem iniciar com __',
    resposta:
    'letra maiúscula'},
    {perguntaF:'Pergunta4',
      pergunta:
    'Podemos colocar __ dentro do JSX',
    resposta:
   ' expressões'},
    {perguntaF:'Pergunta5',
      pergunta:
   ' Usamos o npm para __' ,
    resposta:
    'gerenciar os pacotes necessários e suas dependências'},
    {perguntaF:'Pergunta6',
      pergunta:
    'Usamos props para __',
    resposta:
     'passar diferentes informações para componentes' },
    {perguntaF:'Pergunta7',
      pergunta:
    'Usamos estado (state) para __',
    resposta:
    'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
    {perguntaF:'Pergunta8',
      pergunta:
    'O ReactDOM nos ajuda __' ,
    resposta:
    'interagindo com a DOM para colocar componentes React na mesma'}])
    return(
        <>
        <LogoG/>
        {perguntas2.map((u,i)=> perguntasClicadas2.includes(u.perguntaF)?
        <PerguntasAbertas  u={u} perguntas2={perguntas2} setPerguntas2={setPerguntas2}/>
        :<PerguntasFechadas u={u} setPerguntasClicadas2={setPerguntasClicadas2} perguntasClicadas2={perguntasClicadas2}/>)}
        </>
        
    )
}

