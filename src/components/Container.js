import styled from 'styled-components';
import ContainerButton from './Container-Button';
import ContainerCards from './Container-Cards';
import { useState } from 'react';
export default function Container() {
    const [perguntasClicadas2, setPerguntasClicadas2] = useState([])
    console.log(perguntasClicadas2.length)
    return(
        <Cntn>
            <ContainerCards perguntasClicadas2={perguntasClicadas2} setPerguntasClicadas2={setPerguntasClicadas2} />
           <ContainerButton perguntasClicadas2={perguntasClicadas2} setPerguntasClicadas2={setPerguntasClicadas2}/>
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