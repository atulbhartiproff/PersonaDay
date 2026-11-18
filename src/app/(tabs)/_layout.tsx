import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="activity" options={{ title: "Activity" }} />
      <Tabs.Screen name="social-link" options={{ title: "Social Link" }} />
      <Tabs.Screen name="tarots" options={{title:"Tarots"}}/>
    </Tabs>
  );
}
