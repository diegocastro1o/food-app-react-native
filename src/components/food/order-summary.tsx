import { StyleSheet, Text, View } from 'react-native';
import { foodColors as c } from '@/constants/food-theme';
import { ActionButton, foodStyles as s } from './ui';

// El contenedor entrega el total y la cantidad ya calculados.
export function OrderSummary({ totalLabel, itemCountLabel, onConfirm, disabled = false }: {
  totalLabel: string; itemCountLabel: string; onConfirm?: () => void; disabled?: boolean;
}) {
  return <View style={s.card}><View style={s.row}><Text style={s.muted}>{itemCountLabel}</Text><Text style={styles.currency}>Pesos uruguayos</Text></View>
    <View style={s.row}><Text style={s.sectionTitle}>Total</Text><Text style={styles.total}>{totalLabel}</Text></View>
    <ActionButton label="Confirmar compra" onPress={onConfirm} disabled={disabled} />
  </View>;
}
const styles = StyleSheet.create({ currency: { color: c.muted, fontSize: 12 }, total: { color: c.ink, fontSize: 30, fontWeight: '800' } });
