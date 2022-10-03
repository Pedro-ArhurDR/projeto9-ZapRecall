import LogoG from './LogoG';
import { useState } from 'react';
import PerguntasAbertas from './PerguntasAbertas';
import PerguntasFechadas from './PerguntasFechadas';

export default function ContainerCards({clicados,contador ,setContador,setClicados,setPerguntasClicadas2,perguntasClicadas2,colorir,color,setPerguntas2,perguntas2}) {
    return(
        <>
        <LogoG/>
        {perguntas2.map((u,i)=> perguntasClicadas2.includes(u.perguntaF)?
        <PerguntasAbertas clicados={clicados} setClicados={setClicados} u={u} perguntas2={perguntas2} setPerguntas2={setPerguntas2}/>
        :<PerguntasFechadas contador={contador} setContador={setContador} i={i} clicados={clicados} setClicados={setClicados} color={color} colorir={colorir} u={u} perguntas2={perguntas2} setPerguntas2={setPerguntas2} setPerguntasClicadas2={setPerguntasClicadas2} perguntasClicadas2={perguntasClicadas2}/>)}
        </>
        
    )
}

