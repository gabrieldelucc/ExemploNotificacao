import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//importar recursos do expo-notifications
import * as Notifications from "expo-notifications";

// importar permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//define como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    // mostrar alerta quando a notificação fir recebida
    shouldShowAlert: true,

    // reproduz som ao receber notificação
    shouldPlaySound: false,

    //número de notificações no ícone do app
    shouldSetBadge: false,
  }),
});

export default function App() {
  const handleCallNotifications = async () => {
    // obtém os status da permissão
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("você não deixou as notificações ativas");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao Senai.",
        body: "Notificação recebida.",
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "80%",
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 24,
  },
});
