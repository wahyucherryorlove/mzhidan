interface FoodProps {
  id: number;
  foodName: string;
  description: string;
  price: number;
  images: string;
  date: string;
}

interface DrinkProps {
  id: number;
  foodName: string;
  description: string;
  price: number;
  images: string;
  date: string;
}

export type { DrinkProps, FoodProps };
