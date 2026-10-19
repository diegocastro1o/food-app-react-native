import { View } from 'react-native';
import type { FoodFormValues } from '@/types/food';
import { ActionButton, FormField, foodStyles } from './ui';

type Props = {
  values?: FoodFormValues;
  errors?: Partial<Record<keyof FoodFormValues, string>>;
  onChangeField?: (field: keyof FoodFormValues, value: string) => void;
  onSubmit?: () => void;
  disabled?: boolean;
};

export function FoodForm({ values, errors, onChangeField, onSubmit, disabled }: Props) {
  return <View style={foodStyles.card}>
    <FormField label="Nombre" placeholder="Ej. Hamburguesa clásica" value={values?.nombre} onChangeText={(text) => onChangeField?.('nombre', text)} error={errors?.nombre} />
    <FormField label="Descripción" placeholder="Contá qué lleva y cómo se prepara" multiline value={values?.descripcion} onChangeText={(text) => onChangeField?.('descripcion', text)} error={errors?.descripcion} />
    <FormField label="Precio (UYU)" placeholder="Ej. 450" keyboardType="decimal-pad" value={values?.precio} onChangeText={(text) => onChangeField?.('precio', text)} error={errors?.precio} />
    <FormField label="Cantidad disponible" placeholder="Ej. 15" keyboardType="number-pad" value={values?.cantidad} onChangeText={(text) => onChangeField?.('cantidad', text)} error={errors?.cantidad} />
    <ActionButton label="Agregar al menú" onPress={onSubmit} disabled={disabled} />
  </View>;
}
