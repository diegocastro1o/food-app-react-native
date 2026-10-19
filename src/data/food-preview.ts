import type { Food } from '@/types/food';

// Datos estáticos para previsualizar la UI, sin conexión al backend.
export const previewFoods: Food[] = [
  { id: '7', nombre: 'Hamburguesa clásica', descripcion: 'Carne, cheddar, lechuga y tomate en pan brioche, con papas.', precio: 450, cantidad: 15, emoji: '🍔' },
  { id: '6', nombre: 'Pizza margherita', descripcion: 'Salsa de tomate, muzzarella fresca y albahaca.', precio: 420, cantidad: 12, emoji: '🍕' },
  { id: '10', nombre: 'Spaghetti carbonara', descripcion: 'Panceta, yema de huevo, parmesano y pimienta negra.', precio: 440, cantidad: 10, emoji: '🍝' },
  { id: '16', nombre: 'Crumble de manzana', descripcion: 'Frutas horneadas con cobertura crocante y helado.', precio: 240, cantidad: 0, emoji: '🥧' },
];
