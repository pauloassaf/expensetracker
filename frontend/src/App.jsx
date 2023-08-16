import { useState, useMemo } from 'react';
import styled from "styled-components";
import bg from './img/bg.jpg';
import {MainLayout, InnerLayout} from "./style/Layouts";
import Orb from "./components/Orb";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import {useGlobalContext} from "./context/globalContext";

function App() {

  const [active, setActive] = useState(1)

  const global = useGlobalContext()  

  const displayData = () => {
    switch(active){
      case 1: 
        return <Dashboard />
      case 2:
        return <Income />
      case 3:
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />    
  },[])
 

  return (
    <AppStyled bg={bg}>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>     
    </AppStyled>

  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    border: 3px solid #FFFFFF;
    border-radius: 32px;
    background: rgba(204, 255, 255, 0.3);
    backdrop-filter: blur(4.5px);
    overflow: auto;
    overflow-x: hidden;
    &::webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App
