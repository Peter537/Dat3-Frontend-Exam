import { useState } from "react";
import TodoList from "./TodoList";
import QuestionElement from "../../../components/question-element/QuestionElement";

function ComponentBasic() {
  const [todos, setTodos] = useState([
    { task: "Complete assignment", completed: false },
    { task: "Make React project", completed: true },
  ]);

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>React - Components Basics</h2>
      <QuestionElement
        questions={[
          "2. What is a React component?",
          "3. Explain the benefits of using components compared to how you would build a web application in vanilla javascript.",
        ]}
      />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default ComponentBasic;
