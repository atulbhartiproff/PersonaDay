import { NativeTabs } from 'expo-router/native-tabs'

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="activity">
        <NativeTabs.Trigger.Label>Activity</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="figure.walk" md="directions_walk"/>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="social-link">
        <NativeTabs.Trigger.Label>Social Link</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.2" md="groups"/>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tarots">
        <NativeTabs.Trigger.Label>Tarots</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="sparkles" md="auto_awesome"/>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
