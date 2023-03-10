import React, { FC, ReactElement } from 'react';
import GameContainer from './components/GameContainer';

import './styles/style.scss';


const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <header>Tiny Tina's Memory Game</header>
      <GameContainer/>
    </div>
    
  );
}

export default App;
