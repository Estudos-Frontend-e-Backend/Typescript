import React from "react";

import { FirstComponent } from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { State } from "./components/State";

export function App() {
  // 1 - variaveis
  const name: string = "matheus";
  const age: number = 30;
  const isWorking: boolean = true;


  // 2 - funções

  const user = (name: string): string => {
    return `Ola, ${name}`;
  }
  return (
    <div className="App">
      <h3>Typescript com react</h3>
      <h4>Nome: {name}</h4>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Esta trabalhando</p>
        </div>
      )}
      <h3>{user(name)}</h3>
      <FirstComponent />
      <SecondComponent 
      name="Alencar"
      title="Developer Frontend"
      content="N/A"
      commentsQty={5}
      tags={['typescript','javascript']}
      />
      <State />
    </div>
  );
}

