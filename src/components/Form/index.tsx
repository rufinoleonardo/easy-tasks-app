import { useState } from "react";
import { Container, Input, SubmitBtn, SubmitText } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { prismaClient } from "../../services/db";
import { Keyboard } from "react-native";

export function TaskForm() {
  const [task, setTask] = useState("");

  async function handleNewTask() {
    if (task === "") return;

    try {
      await prismaClient.task.create({
        data: {
          title: task,
          completed: false,
        },
      });

      setTask("");
      Keyboard.dismiss();
    } catch (err) {
      console.log("Erro ao cadastrar.", err);
    }
  }

  return (
    <Container>
      <Input
        placeholder="Digite sua próxima tarefa..."
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      <SubmitBtn onPress={handleNewTask}>
        <SubmitText>Adicionar</SubmitText>
        <Ionicons name="add" size={24} color={"#FFF"} />
      </SubmitBtn>
    </Container>
  );
}
