import React, { createContext } from "react";

import { FirstComponent } from "./components/FirstComponent";
import { Category, SecondComponent } from "./components/SecondComponent";
import { State } from "./components/State";
import Context from "./components/Context";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

export function App() {
  // 1 - variaveis
  const name: string = "matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções
  const user = (name: string): string => {
    return `Ola, ${name}`;
  };

  // 8 - Type
  type textOrNull = string | null;

  const myText: textOrNull = "Tem  algum texto";
  let mySecondText: textOrNull = null;

  mySecondText = "ola";

  // 9 context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          tags={["typescript", "javascript"]}
          category={Category.JS}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}
