import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppTabs from '@/components/app-tabs';

export default function RootLayout() {
  return <SafeAreaProvider><StatusBar style="dark" /><AppTabs /></SafeAreaProvider>;
}
