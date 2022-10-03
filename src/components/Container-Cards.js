import LogoG from './LogoG';
import PerguntasAbertas from './PerguntasAbertas';
import PerguntasFechadas from './PerguntasFechadas';

export default function ContainerCards({contador3, setContador3,clicados
  ,setIndex,setClicados,setPerguntasClicadas2,perguntasClicadas2,setPerguntas2,perguntas2,contador2, setContador2}) {
    return(
        <>
        <LogoG/>
        {perguntas2.map((u,indice)=> perguntasClicadas2.includes(u.perguntaF)?
        <PerguntasAbertas contador2={contador2} setContador2={setContador2} 
        clicados={clicados} setClicados={setClicados} u={u} perguntas2={perguntas2} setPerguntas2={setPerguntas2}/>
        :<PerguntasFechadas contador3={contador3} 
        setContador3={setContador3} setIndex={setIndex} indice={indice}
        u={u} perguntas2={perguntas2} setPerguntas2={setPerguntas2} 
        setPerguntasClicadas2={setPerguntasClicadas2} perguntasClicadas2={perguntasClicadas2}/>)}
        </>
        
    )
}

