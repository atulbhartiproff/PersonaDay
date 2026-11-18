import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false , tabBarActiveTintColor :"#E23744" , tabBarInactiveTintColor:"#888888"}}>
      <Tabs.Screen name="activity" options={{ title: "Activity" }} />
      <Tabs.Screen name="social-link" options={{ title: "Social Link" }} />
      <Tabs.Screen name="tarots" options={{ title: "Tarots" }} />
    </Tabs>
  );
}
