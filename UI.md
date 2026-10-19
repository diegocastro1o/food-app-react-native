# Food App · UI

Interfaz de React Native con Expo Router basada en la consigna de Food App Mobile.

## Pantallas

- `src/app/index.tsx`: menú con nombre, descripción, precio y stock.
- `src/app/cart.tsx`: pedido de ejemplo con cantidad y resumen.
- `src/app/explore.tsx`: formulario para agregar comida.

La navegación entre las tres pantallas está conectada. Los datos son estáticos y el pedido es un ejemplo independiente: agregar desde el menú todavía no lo modifica.

## Componentes

En `src/components/food/`:

- `FoodCard`: recibe `food` y `onAdd`.
- `QuantityControl`: recibe `quantity`, `onIncrease`, `onDecrease` y estados de deshabilitado.
- `OrderSummary`: recibe `totalLabel`, `itemCountLabel`, `onConfirm` y `disabled`. No calcula el total.
- `FoodForm`: recibe `values`, `onChangeField`, `errors`, `onSubmit` y `disabled`. Sin `values`, los campos se pueden editar como una vista previa sin guardar datos.
- `ActionButton`, `FormField`, `FoodScreen`, `ScreenHeading` y `EmptyState`: elementos visuales compartidos.

Los tipos están en `src/types/food.ts`, la paleta en `src/constants/food-theme.ts` y los datos de muestra en `src/data/food-preview.ts`. Los cuatro campos principales usan los nombres del backend: `nombre`, `descripcion`, `precio` y `cantidad`.

## Pendiente para implementar

Estado, selección, límites de cantidad, cálculo de totales, validaciones, GET/POST/PATCH, actualización del stock y confirmación de compra. Los callbacks quedan expuestos para conectar tu implementación.

```tsx
<FoodCard food={menu} onAdd={() => agregar(menu)} />
<FoodForm
  values={formulario}
  onChangeField={cambiarCampo}
  errors={errores}
  onSubmit={guardar}
/>
```

## Ejecutar

```sh
pnpm start
pnpm exec tsc --noEmit
pnpm lint
```
