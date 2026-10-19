import { StyleSheet, Text, View } from 'react-native';
import { QuantityControl } from '@/components/food/quantity-control';
import { OrderSummary } from '@/components/food/order-summary';
import { FoodScreen, ScreenHeading, foodStyles as s } from '@/components/food/ui';
import { foodColors as c } from '@/constants/food-theme';

// Ejemplo visual fijo: no representa una selección real del menú.
export default function CartScreen() {
  return <FoodScreen>
    <ScreenHeading eyebrow="CASI A LA MESA" title="Tu pedido" description="Revisá lo que elegiste antes de confirmar." />
    <View style={s.card}>
      <View style={s.row}><Text style={styles.emoji}>🍔</Text><View style={styles.copy}><Text style={styles.name}>Hamburguesa clásica</Text><Text style={s.muted}>$ 450 por unidad</Text></View></View>
      <View style={s.row}><QuantityControl quantity={2} /><Text style={styles.price}>$ 900</Text></View>
    </View>
    <OrderSummary totalLabel="$ 900" itemCountLabel="2 unidades" />
    <Text style={styles.note}>Cada buen día tiene una buena comida.</Text>
  </FoodScreen>;
}
const styles = StyleSheet.create({
  emoji: { fontSize: 44 }, copy: { flex: 1, gap: 6 }, name: { color: c.ink, fontSize: 18, fontWeight: '700' },
  price: { color: c.ink, fontSize: 22, fontWeight: '800' }, note: { color: c.muted, textAlign: 'center', fontSize: 13, lineHeight: 20 },
});
