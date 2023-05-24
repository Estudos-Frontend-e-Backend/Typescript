import React, { useState, ChangeEvent, FormEvent } from "react";

//CSS
import styles from "./TaskForm.module.css";
// Interface
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskForm({ btnText, taskList, setTaskList }: Props) {
//   const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  function addTaskHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  }
  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo: </label>
        <input
          type="text"
          name="title"
          placeholder="Titulo da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade: </label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}
