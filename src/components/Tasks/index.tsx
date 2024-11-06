import { Container, TasksList } from "./styles";
import { prismaClient } from "../../services/db";
import { TaskItem } from "../TaskItem";

export function Tasks({ completed }: { completed: boolean }) {
  const tasks = prismaClient.task.useFindMany({
    where: {
      completed: completed,
    },
  });

  console.log(tasks);
  return (
    <Container>
      <TasksList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <TaskItem data={item} />}
      />
    </Container>
  );
}
