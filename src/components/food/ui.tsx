import type { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import type { TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { foodColors as c } from '@/constants/food-theme';

export function FoodScreen({ children }: PropsWithChildren) {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={s.screen}>
      <KeyboardAvoidingView style={s.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={s.content}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function ScreenHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <View style={s.heading}><Text style={s.eyebrow}>{eyebrow}</Text><Text accessibilityRole="header" style={s.title}>{title}</Text><Text style={s.body}>{description}</Text></View>;
}

export function ActionButton({ label, onPress, disabled = false, secondary = false }: {
  label: string; onPress?: () => void; disabled?: boolean; secondary?: boolean;
}) {
  return <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress}
    style={({ pressed }) => [s.button, secondary && s.secondary, disabled && s.disabled, pressed && s.pressed]}>
    <Text style={[s.buttonText, secondary && s.secondaryText]}>{label}</Text>
  </Pressable>;
}

export function FormField({ label, error, ...props }: TextInputProps & { label: string; error?: string }) {
  return <View style={s.field}><Text style={s.label}>{label}</Text>
    <TextInput accessibilityLabel={label} placeholderTextColor={c.muted} {...props}
      style={[s.input, props.multiline && s.multiline, !!error && s.inputError, props.style]} />
    {!!error && <Text accessibilityRole="alert" style={s.error}>{error}</Text>}
  </View>;
}

export function EmptyState({ title, description, emoji = '🍽️' }: { title: string; description: string; emoji?: string }) {
  return <View style={s.empty}><Text style={s.emptyEmoji}>{emoji}</Text><Text style={s.subtitle}>{title}</Text><Text style={[s.body, s.center]}>{description}</Text></View>;
}

export const foodStyles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  sectionTitle: { fontSize: 21, fontWeight: '700', color: c.ink },
  muted: { color: c.muted, fontSize: 14, lineHeight: 21 },
  card: { backgroundColor: c.surface, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: c.border, gap: 16 },
});

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: c.background },
  content: { width: '100%', maxWidth: 620, alignSelf: 'center', padding: 24, paddingBottom: 36, gap: 24 },
  heading: { gap: 10, paddingTop: 12 },
  eyebrow: { color: c.primary, fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  title: { fontSize: 36, lineHeight: 42, fontWeight: '800', color: c.ink, letterSpacing: -1.2 },
  body: { color: c.muted, fontSize: 16, lineHeight: 24 },
  button: { backgroundColor: c.primary, borderRadius: 16, paddingHorizontal: 20, minHeight: 52, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  secondary: { backgroundColor: c.primarySoft }, secondaryText: { color: c.primary },
  disabled: { backgroundColor: c.disabled }, pressed: { opacity: 0.75 },
  field: { gap: 8 }, label: { fontSize: 14, fontWeight: '700', color: c.ink },
  input: { minHeight: 54, borderWidth: 1, borderColor: c.border, backgroundColor: c.surface, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, color: c.ink, fontSize: 16 },
  multiline: { minHeight: 116, textAlignVertical: 'top' }, inputError: { borderColor: c.primary },
  error: { fontSize: 13, color: c.primary }, empty: { padding: 32, gap: 12, alignItems: 'center' },
  emptyEmoji: { fontSize: 48 }, subtitle: { color: c.ink, fontSize: 20, fontWeight: '700', textAlign: 'center' }, center: { textAlign: 'center' },
});
