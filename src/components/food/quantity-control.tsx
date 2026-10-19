import { Pressable, StyleSheet, Text, View } from 'react-native';
import { foodColors as c } from '@/constants/food-theme';

export function QuantityControl({ quantity, onDecrease, onIncrease, decreaseDisabled = false, increaseDisabled = false }: {
  quantity: number; onDecrease?: () => void; onIncrease?: () => void;
  decreaseDisabled?: boolean; increaseDisabled?: boolean;
}) {
  return <View style={s.control}>
    <Pressable accessibilityRole="button" accessibilityLabel="Disminuir cantidad" accessibilityState={{ disabled: decreaseDisabled }} disabled={decreaseDisabled} onPress={onDecrease} style={[s.button, decreaseDisabled && s.disabled]}><Text style={s.sign}>−</Text></Pressable>
    <Text accessibilityLabel={`Cantidad: ${quantity}`} style={s.quantity}>{quantity}</Text>
    <Pressable accessibilityRole="button" accessibilityLabel="Aumentar cantidad" accessibilityState={{ disabled: increaseDisabled }} disabled={increaseDisabled} onPress={onIncrease} style={[s.button, increaseDisabled && s.disabled]}><Text style={s.sign}>+</Text></Pressable>
  </View>;
}
const s = StyleSheet.create({
  control: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  button: { width: 44, height: 44, borderRadius: 12, backgroundColor: c.primarySoft, alignItems: 'center', justifyContent: 'center' },
  sign: { color: c.primary, fontSize: 23 }, quantity: { color: c.ink, fontSize: 16, fontWeight: '700', minWidth: 22, textAlign: 'center' }, disabled: { opacity: 0.35 },
});
