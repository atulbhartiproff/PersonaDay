import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E23744",
        tabBarInactiveTintColor: "#888888",
      }}
    >
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="walk-outline" color={String(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="social-link"
        options={{
          title: "Social Link",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="link-outline" color={String(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarots"
        options={{
          title: "Tarots",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="send-outline" color={String(color)} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
