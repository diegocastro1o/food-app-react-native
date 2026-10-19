export type Food = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  emoji?: string;
};

// Los valores del formulario son texto; convertí los números al implementar el envío.
export type FoodFormValues = {
  nombre: string;
  descripcion: string;
  precio: string;
  cantidad: string;
};
