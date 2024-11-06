import { Task } from "@prisma/client";
import {
  DeleteBtn,
  ActionsContainer,
  Container,
  TaskText,
  CheckBtn,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { prismaClient } from "../../services/db";

export interface TaskProps {
  data: Task;
}

export function TaskItem({ data }: TaskProps) {
  async function handleDeleteTask() {
    await prismaClient.task.delete({
      where: {
        id: data.id,
      },
    });
  }

  async function handleUpdateTask() {
    await prismaClient.task.update({
      data: {
        completed: true,
      },
      where: {
        id: data.id,
      },
    });
  }

  return (
    <Container>
      <TaskText>{data.title}</TaskText>

      <ActionsContainer>
        <DeleteBtn onLongPress={handleDeleteTask}>
          <Ionicons name="trash-outline" size={22} color={"#FFF"} />
        </DeleteBtn>
        {!data.completed && (
          <CheckBtn onLongPress={handleUpdateTask}>
            <Ionicons name="checkmark-outline" size={22} color={"#FFF"} />
          </CheckBtn>
        )}
      </ActionsContainer>
    </Container>
  );
}
