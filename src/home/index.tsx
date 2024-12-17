import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Logo from "../components/Icons/Logo";
import Clipboard from "../components/Icons/Clipboard";
import { styles } from "./styles";
import { Task } from "../components/Task";
import { FeedbackMessage } from "../components/Feedback";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [feedbackColor, setFeedbackColor] = useState<string>("");

  function showFeedback(message: string, color: string) {
    setFeedbackMessage(message);
    setFeedbackColor(color);

    setTimeout(() => {
      setFeedbackMessage(null);
    }, 2000);
  }

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      showFeedback("Essa tarefa já existe!", "#E25858");
      return;
    }

    setTasks((prevState) => [...prevState, taskName]);
    showFeedback(`A tarefa "${taskName}" foi adicionada.`, "#1E6F9F");
    setTaskName("");
  }

  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Você deseja remover a tarefa ${name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task !== name));

          setCompletedTasks((prevState) =>
            prevState.filter((task) => task !== name)
          );
          showFeedback(`A tarefa "${name}" foi removida.`, "#E25858");
        },
      },
    ]);
  }

  function handleTaskComplete(name: string) {
    if (completedTasks.includes(name)) {
      setCompletedTasks((prevState) =>
        prevState.filter((task) => task !== name)
      );
    } else {
      setCompletedTasks((prevState) => [...prevState, name]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            isInputFocused ? { borderColor: "#5E60CE", borderWidth: 2 } : {},
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FeedbackMessage message={feedbackMessage} color={feedbackColor} />

      <View style={styles.taskCountContainer}>
        <View style={styles.leftContainer}>
          <Text style={[styles.taskCountText, { color: "#4EA8DE" }]}>
            Criadas:
          </Text>
          <View style={styles.countCircle}>
            <Text style={styles.countNumber}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={[styles.taskCountText, { color: "#8284FA" }]}>
            Concluídas:
          </Text>
          <View style={styles.countCircle}>
            <Text style={styles.countNumber}>{completedTasks.length}</Text>
          </View>
        </View>
      </View>

      {tasks.length === 0 && <View style={styles.divider} />}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            onRemove={() => handleTaskRemove(item)}
            onComplete={() => handleTaskComplete(item)}
            isCompleted={completedTasks.includes(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Clipboard style={styles.clipboard} />
            <Text style={[styles.listEmptyText, styles.boldText]}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
}
