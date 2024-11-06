import { useEffect, useState } from "react";
import Home from "./src/screen/home";
import { initializeDb } from "./src/services/db";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const setup = async () => {
      await initializeDb();
      setDbInitialized(true);
    };

    setup();
  }, []);

  if (!dbInitialized) {
    return (
      <SafeAreaView>
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#0f172a"} />
      <Home />
    </SafeAreaView>
  );
}
