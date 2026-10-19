import { StyleSheet, Text, View } from 'react-native';
import { FoodForm } from '@/components/food/food-form';
import { FoodScreen, ScreenHeading } from '@/components/food/ui';
import { foodColors as c } from '@/constants/food-theme';

export default function AddFoodScreen() {
  return <FoodScreen>
    <ScreenHeading eyebrow="UN NUEVO FAVORITO" title="Sumá algo rico" description="Agregá una comida para darle más sabor al menú." />
    <View style={styles.tip}><Text style={styles.emoji}>🧑‍🍳</Text><Text style={styles.tipText}>Un buen nombre abre el apetito. Una buena descripción hace el resto.</Text></View>
    <FoodForm />
  </FoodScreen>;
}
const styles = StyleSheet.create({
  tip: { backgroundColor: c.greenSoft, padding: 18, borderRadius: 18, flexDirection: 'row', gap: 12, alignItems: 'center' },
  emoji: { fontSize: 30 }, tipText: { color: c.green, fontSize: 14, lineHeight: 21, flex: 1 },
});
