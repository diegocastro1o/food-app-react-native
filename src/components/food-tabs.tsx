import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import type { TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { foodColors as c } from '@/constants/food-theme';

export default function AppTabs() {
  return <Tabs style={styles.container}>
    <TabSlot style={styles.container} />
    <TabList asChild><SafeAreaView edges={['bottom', 'left', 'right']} style={StyleSheet.flatten([styles.bar, styles.tabs])}>
        <TabTrigger name="menu" href="/" asChild><TabButton icon="🍴">Menú</TabButton></TabTrigger>
        <TabTrigger name="cart" href="/cart" asChild><TabButton icon="🛍️">Mi pedido</TabButton></TabTrigger>
        <TabTrigger name="add" href="/explore" asChild><TabButton icon="＋">Agregar</TabButton></TabTrigger>
    </SafeAreaView></TabList>
  </Tabs>;
}

function TabButton({ children, icon, isFocused, ...props }: Omit<TabTriggerSlotProps, 'ref'> & { icon: string }) {
  return <Pressable {...props} accessibilityRole="tab" accessibilityState={{ selected: isFocused }} style={styles.tab}>
    <View style={[styles.iconWrap, isFocused && styles.selected]}><Text style={styles.icon}>{icon}</Text></View>
    <Text style={[styles.label, isFocused && styles.activeLabel]}>{children}</Text>
  </Pressable>;
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: c.background }, bar: { backgroundColor: c.surface, borderTopWidth: 1, borderColor: c.border },
  tabs: { flexDirection: 'row', width: '100%', maxWidth: 620, alignSelf: 'center', paddingVertical: 8 },
  tab: { flex: 1, alignItems: 'center', gap: 4, minHeight: 56 }, iconWrap: { paddingHorizontal: 22, paddingVertical: 3, borderRadius: 20 },
  selected: { backgroundColor: c.primarySoft }, icon: { fontSize: 22, color: c.primary }, label: { fontSize: 11, color: c.muted, fontWeight: '600' }, activeLabel: { color: c.primary },
});
