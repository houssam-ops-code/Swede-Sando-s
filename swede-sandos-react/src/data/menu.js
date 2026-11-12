const photos = {
  smoky: '/images/sandwiches/smokyturkey.jpg',
  club: '/images/sandwiches/combo.avif',
  garden: '/images/sandwiches/garden.avif',
  custom: '/images/sandwiches/personnalizedsandwich.jpg',
  breakfast: '/images/breakfast/breakfast.avif',
  burrito: '/images/sandwiches/burrito.avif',
  salad: '/images/breakfast/salad.avif',
  fries: '/images/sandwiches/fries.avif',
  dessert: '/images/desserts/dessert.avif',
  drink: '/images/drinks/juice.jpg',
  combo: '/images/sandwiches/combo.avif',
  kids: '/images/sandwiches/kids.avif'
};
export const menu = [
  { id: 1, name: 'The Smoky Swede', category: 'Signature', price: 8, description: 'Smoked turkey, Swiss, crisp greens, tomato and a creamy house sauce.', tag: 'Guest favorite', image: photos.smoky },
  { id: 2, name: 'The Prairie Club', category: 'Signature', price: 8, description: 'Roasted chicken, bacon, cheddar, lettuce and tomato on fresh bread.', tag: 'Hearty pick', image: photos.club },
  { id: 3, name: 'The Garden Stack', category: 'Signature', price: 8, description: 'Avocado, cucumber, tomato, greens and a bright herb spread.', tag: 'Veggie friendly', image: photos.garden },
  { id: 4, name: 'Build Your Own', category: 'Build your own', price: 9, description: 'Choose your bread, protein, cheese, vegetables and sauce.', tag: 'Make it yours', image: photos.custom },
  { id: 5, name: 'Breakfast Sando', category: 'Breakfast', price: 6, description: 'Egg, cheese and your choice of bacon or sausage.', tag: 'Morning fuel', image: photos.breakfast },
  { id: 6, name: 'Breakfast Burrito', category: 'Breakfast', price: 6, description: 'Egg, potato, cheese and salsa wrapped up for the day ahead.', tag: 'Easy to go', image: photos.burrito },
  { id: 7, name: 'Soup or Side Salad', category: 'Sides', price: 5, description: 'A simple side to round out your lunch.', tag: 'Add a side', image: photos.salad },
  { id: 8, name: 'Fries or Gourmet Chips', category: 'Sides', price: 3, description: 'A crunchy, satisfying extra.', tag: 'Classic side', image: photos.fries },
  { id: 9, name: 'Fresh-Baked Treat', category: 'Treats & drinks', price: 3, description: 'A rotating cookie, brownie or cinnamon-roll selection.', tag: 'Something sweet', image: photos.dessert },
  { id: 10, name: 'Fountain Drink', category: 'Treats & drinks', price: 2, description: 'A refreshing drink to complete your meal.', tag: 'Cool refreshment', image: photos.drink },
  { id: 11, name: 'Sandwich Combo', category: 'Combos', price: 11, description: 'A handcrafted sandwich, side and drink together.', tag: 'Best value', image: photos.combo },
  { id: 12, name: 'Kids Meal', category: 'Combos', price: 6, description: 'A smaller sandwich, side and juice.', tag: 'Family friendly', image: photos.kids }
];
export const categories = ['All', 'Signature', 'Build your own', 'Breakfast', 'Sides', 'Combos', 'Treats & drinks'];
