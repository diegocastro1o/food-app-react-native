import { StyleSheet, Text, View } from 'react-native';
import { foodColors as c } from '@/constants/food-theme';
import type { Food } from '@/types/food';
import { ActionButton, foodStyles as s } from './ui';

export function FoodCard({ food, onAdd }: { food: Food; onAdd?: () => void }) {
  const soldOut = food.cantidad === 0;
  return <View style={styles.card}>
    <View style={[styles.art, soldOut && styles.soldOutArt]}><Text style={styles.emoji}>{food.emoji ?? '🍽️'}</Text>
      <View style={[styles.badge, soldOut && styles.soldOutBadge]}><Text style={[styles.badgeText, soldOut && styles.soldOutText]}>{soldOut ? 'Agotado' : `${food.cantidad} disponibles`}</Text></View>
    </View>
    <View style={styles.details}><Text accessibilityRole="header" style={styles.name}>{food.nombre}</Text><Text style={s.muted}>{food.descripcion}</Text>
      <View style={s.row}><View><Text style={styles.currency}>UYU</Text><Text style={styles.price}>$ {food.precio}</Text></View>
        <ActionButton label={soldOut ? 'Sin stock' : '+ Agregar'} disabled={soldOut} onPress={onAdd} />
      </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderColor: c.border, borderRadius: 24, overflow: 'hidden', backgroundColor: c.surface },
  art: { height: 150, backgroundColor: '#F3EBDD', alignItems: 'center', justifyContent: 'center' },
  soldOutArt: { backgroundColor: '#EDEDE7' }, emoji: { fontSize: 76 },
  badge: { position: 'absolute', top: 14, left: 14, backgroundColor: c.greenSoft, borderRadius: 20, paddingVertical: 7, paddingHorizontal: 12 },
  badgeText: { color: c.green, fontWeight: '700', fontSize: 12 }, soldOutBadge: { backgroundColor: '#E0E1DC' }, soldOutText: { color: c.muted },
  details: { padding: 20, gap: 12 }, name: { color: c.ink, fontSize: 21, fontWeight: '700' },
  currency: { color: c.muted, fontSize: 11, letterSpacing: 1 }, price: { color: c.ink, fontSize: 25, fontWeight: '800' },
});
