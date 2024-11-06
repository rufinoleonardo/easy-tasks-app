import { Container, Subtitle, Title } from "./styles";
import { TaskForm } from "../../components/Form";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";
import Actions from "../../components/Actions";

export default function Home() {
  const [filter, setFilter] = useState(false);
  return (
    <Container>
      <Title>Easy tasks</Title>
      <Subtitle>Crie e gerencie tarefas</Subtitle>

      <Actions
        filter={filter}
        updateFilter={(status: boolean) => setFilter(status)}
      />
      <TaskForm />
      {filter && <Tasks completed={filter} />}
      {!filter && <Tasks completed={filter} />}
    </Container>
  );
}
