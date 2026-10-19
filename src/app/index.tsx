import { StyleSheet, Text, View } from 'react-native';
import { FoodCard } from '@/components/food/food-card';
import { FoodScreen, ScreenHeading, foodStyles as s } from '@/components/food/ui';
import { foodColors as c } from '@/constants/food-theme';
import { previewFoods } from '@/data/food-preview';

export default function MenuScreen() {
  return <FoodScreen>
    <View style={s.row}><Text style={styles.brand}>food<Text style={styles.brandAccent}>app.</Text></Text><Text style={styles.tag}>HECHO CON GANAS</Text></View>
    <ScreenHeading eyebrow="FRESCO · RICO · A TU GUSTO" title={'¿Qué comemos\nhoy?'} description="Elegí tu próximo favorito. Nosotros ponemos el sabor." />
    <View style={styles.banner}><Text style={styles.bannerEmoji}>🍴</Text><View style={styles.bannerCopy}><Text style={styles.bannerTitle}>Tu pausa más rica</Text><Text style={styles.bannerText}>Comida que te alegra el día.</Text></View></View>
    <View style={s.row}><Text style={s.sectionTitle}>Nuestro menú</Text><Text style={s.muted}>Para todos los antojos</Text></View>
    {previewFoods.map((food) => <FoodCard key={food.id} food={food} />)}
  </FoodScreen>;
}
const styles = StyleSheet.create({
  brand: { fontSize: 26, fontWeight: '900', color: c.ink, letterSpacing: -1 }, brandAccent: { color: c.primary },
  tag: { fontSize: 9, color: c.muted, letterSpacing: 1.2, fontWeight: '700' },
  banner: { backgroundColor: c.green, padding: 20, borderRadius: 20, flexDirection: 'row', gap: 16, alignItems: 'center' },
  bannerEmoji: { fontSize: 34 }, bannerCopy: { flex: 1, gap: 5 }, bannerTitle: { color: '#FFFFFF', fontWeight: '700', fontSize: 18 }, bannerText: { color: '#E4EDD9', fontSize: 14 },
});
