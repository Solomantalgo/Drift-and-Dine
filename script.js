const menuItems = [
  { category: 'featured', name: 'Beef Steak', price: 'UGX 25,000', description: 'Juicy marinated steak with your choice of chips, wedges, mash or rice.', image: 'images/NewImages/food/beef-steak-compressed.jpg' },
  { category: 'featured', name: 'Chicken Pilau', price: 'UGX 20,000', description: 'Fragrant spiced rice with tender chicken, served with kachumbari.', image: 'images/NewImages/food/chicken-pilau-compressed.jpg' },
  { category: 'featured', name: 'Chicken Wrap', price: 'UGX 25,000', description: 'Stir-fried chicken toasted in sweet chilli with tomatoes, onions and pepper, wrapped in tortilla bread.', image: 'images/NewImages/food/chicken-wrap-compressed.jpg' },
  { category: 'featured', name: 'Beef Pizza', sizes: { small: 'UGX 35,000', large: 'UGX 45,000' }, description: 'Diced beef, carrots and green pepper in tomato sauce, finished with mixed herbs and cheese.', image: 'images/NewImages/food/beef-pizza-compressed.jpg' },
  { category: 'beef', name: 'Beef Steak', price: 'UGX 25,000', description: 'Juicy marinated steak, served with chips, wedges or mash.', image: 'images/NewImages/food/beef-steak-compressed.jpg' },
  { category: 'beef', name: 'Beef Curry', price: 'UGX 25,000', description: 'Beef cubes marinated and prepared with vegetables.', image: 'images/NewImages/food/beef-corner-category-compressed.jpg' },
  { category: 'beef', name: 'Beef Stew / Steak', price: 'UGX 25,000', description: 'Wet-fry beef steak, served with your choice of accompaniment.', image: 'images/NewImages/food/beef-corner-category-compressed.jpg' },
  { category: 'beef', name: 'Beef Stroganoff', price: 'UGX 25,000', description: 'Julienne-cut beef in a rich, creamy sauce.', image: 'images/NewImages/food/beef-stroganoff-compressed.jpg' },
  { category: 'beef', name: 'Pan Fried Beef', price: 'UGX 25,000', description: 'Marinated pan-fried beef with sautéed vegetables.', image: 'images/NewImages/food/beef-corner-category-compressed.jpg' },
  { category: 'pilau', name: 'Chicken Pilau', price: 'UGX 20,000', description: 'Fragrant rice cooked with tender chicken and spices, served with kachumbari.', image: 'images/NewImages/food/chicken-pilau-compressed.jpg' },
  { category: 'pilau', name: 'Chicken Wrap', price: 'UGX 25,000', description: 'Stir-fried chicken toasted in sweet chilli with tomatoes, onions and pepper, wrapped in tortilla bread.', image: 'images/NewImages/food/chicken-wrap-compressed.jpg' },
  { category: 'pilau', name: 'Beef Pilau', price: 'UGX 20,000', description: 'Fragrant rice cooked with tender beef and spices, served with kachumbari.', image: 'images/NewImages/food/pilau-category-compressed.jpg' },
  { category: 'pilau', name: 'Goat Pilau', price: 'UGX 20,000', description: 'Fragrant rice cooked with tender goat meat and spices, served with kachumbari.', image: 'images/NewImages/food/pilau-category-compressed.jpg' },
  { category: 'pilau', name: 'Egg Wrap', price: 'UGX 15,000', description: 'Spanish omelette with Thousand Island dressing, lettuce, tomatoes and onions in tortilla bread.', image: 'images/NewImages/food/spanish-omelette-compressed.jpg' },
  { category: 'pizza', name: 'Beef Pizza', sizes: { small: 'UGX 35,000', large: 'UGX 45,000' }, description: 'Diced beef, carrots and green pepper in tomato sauce, finished with mixed herbs and cheese.', image: 'images/NewImages/food/beef-pizza-compressed.jpg' },
  { category: 'pizza', name: 'Chicken Pizza', sizes: { small: 'UGX 35,000', large: 'UGX 45,000' }, description: 'Diced chicken, carrots and green pepper in tomato sauce, finished with mixed herbs and cheese.', image: 'images/NewImages/food/chicken-pizza-compressed.jpg' },
  { category: 'pizza', name: 'Margherita Pizza', sizes: { small: 'UGX 25,000', large: 'UGX 30,000' }, description: 'Sweet pomodoro sauce, olives, oregano and cheese.', image: 'images/NewImages/food/pizza-category-compressed.jpg' },
  { category: 'pizza', name: 'Hawaiian Pizza', sizes: { small: 'UGX 35,000', large: 'UGX 45,000' }, description: 'Ham, pineapple and cheese.', image: 'images/NewImages/food/pizza-category-compressed.jpg' },
  { category: 'pizza', name: 'Tuna Pizza', sizes: { small: 'UGX 35,000', large: 'UGX 45,000' }, description: 'Tuna, onions, green pepper and cheese.', image: 'images/NewImages/food/pizza-category-compressed.jpg' },
  { category: 'platters', name: 'Platter for 4 pax', price: 'UGX 90,000', description: 'Grilled chicken, wet-fry goat, nyama choma, rice, chapati and kachumbari.', image: 'images/NewImages/food/sharing-platter-for-four-compressed.jpg' },
  { category: 'platters', name: 'Platter for 8 pax', price: 'UGX 170,000', description: 'A generous spread of grilled chicken, wet-fry goat, nyama choma, rice, chapati and kachumbari.', image: 'images/NewImages/food/platters-category-compressed.jpg' },
  { category: "breakfast", name: "Egg (Style of choice)", price: "UGX 6,000", description: "Egg prepared in your style of choice.", image: "images/NewImages/food/Breakfast/Egg-choice-of-style.jpg" }, { category: "breakfast", name: "Pair of Sausages", price: "UGX 8,000", description: "Two sausages served as a breakfast favourite.", image: "images/NewImages/food/Breakfast/Pair of Sausages.jpg" }, { category: "breakfast", name: "Spanish Omelette", price: "UGX 10,000", description: "Spanish omelette with a generous, satisfying finish.", image: "images/NewImages/food/Breakfast/Spanish Omelette.jpg" }, { category: "breakfast", name: "Chapati", price: "UGX 3,000", description: "Freshly prepared chapati.", image: "images/NewImages/food/Breakfast/Chapati.jpg" }, { category: "breakfast", name: "Pair of Samosa", price: "UGX 5,000", description: "Two crisp samosas.", image: "images/NewImages/food/Breakfast/Pair of Samosas.jpg" }, { category: "hotdrinks", name: "Hot Chocolate", price: "UGX 10,000", description: "Rich, comforting hot chocolate.", image: "images/NewImages/food/Breakfast/Hot Chocolate.jpg" }, { category: "hotdrinks", name: "African Coffee", price: "UGX 10,000", description: "A full-bodied African coffee.", image: "images/NewImages/food/Breakfast/African Coffee.jpg" }, { category: "hotdrinks", name: "Black Coffee", price: "UGX 8,000", description: "Bold black coffee.", image: "images/NewImages/food/Breakfast/Black Coffee.jpg" }, { category: "hotdrinks", name: "Cappuccino", price: "UGX 10,000", description: "Espresso with steamed milk and foam.", image: "images/NewImages/food/Breakfast/Cappuccino.jpg" }, { category: "hotdrinks", name: "Espresso (Single)", price: "UGX 5,000", description: "A single shot of espresso.", image: "images/NewImages/food/Breakfast/Espresso (Single).jpg" }, { category: "hotdrinks", name: "Espresso (Double)", price: "UGX 6,000", description: "A double shot of espresso.", image: "images/NewImages/food/Breakfast/Espresso (Double).jpg" }, { category: "hotdrinks", name: "Macchiato", price: "UGX 6,000", description: "Espresso marked with milk.", image: "images/NewImages/food/Breakfast/Macchiato.jpg" }, { category: "hotdrinks", name: "Affogato", price: "UGX 10,000", description: "Espresso poured over a sweet finish.", image: "images/NewImages/food/Breakfast/Affogato.jpg" }, { category: "hotdrinks", name: "Cafe Mocha", price: "UGX 10,000", description: "Espresso, chocolate and steamed milk.", image: "images/NewImages/food/Breakfast/Cafe Mocha.jpg" }, { category: "hotdrinks", name: "Cafe Latte (Single)", price: "UGX 8,000", description: "A single cafe latte.", image: "images/NewImages/food/Breakfast/Cafe Latte (Single).jpg" }, { category: "hotdrinks", name: "Cafe Latte (Double)", price: "UGX 10,000", description: "A double cafe latte.", image: "images/NewImages/food/Breakfast/Cafe Latte (Double).jpg" }, { category: "hotdrinks", name: "Americano", price: "UGX 6,000", description: "Espresso topped with hot water for a smooth, bold cup.", image: "images/NewImages/food/Breakfast/Black Coffee.jpg" }, { category: "goat", name: "Wetfry Goat Meat (Kilo)", price: "UGX 45,000", description: "Wet-fry goat meat.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "goat", name: "Wetfry Goat Meat (Half)", price: "UGX 25,000", description: "Wet-fry goat meat.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "goat", name: "Wetfry Goat Meat (Quarter)", price: "UGX 15,000", description: "Wet-fry goat meat.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "goat", name: "Dryfry Goat Meat (Kilo)", price: "UGX 45,000", description: "Dry-fry goat meat.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "goat", name: "Dryfry Goat Meat (Half)", price: "UGX 25,000", description: "Dry-fry goat meat.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "goat", name: "Goat Choma (Kilo)", price: "UGX 45,000", description: "Goat choma.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "goat", name: "Goat Choma (Half)", price: "UGX 25,000", description: "Goat choma.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Sukuma Wiki", price: "UGX 3,000", description: "Sukuma wiki side dish.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Posho", price: "UGX 3,000", description: "Posho side dish.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Chapati", price: "UGX 3,000", description: "Freshly prepared chapati.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Cabbage", price: "UGX 3,000", description: "Cabbage side dish.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Kachumbari", price: "UGX 4,000", description: "Fresh kachumbari.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Rice", price: "UGX 5,000", description: "Steamed rice.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Mashed Matoke", price: "UGX 5,000", description: "Mashed matoke.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Mashed Potato", price: "UGX 10,000", description: "Mashed potato.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Gravy", price: "UGX 5,000", description: "Rich gravy.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Chips", price: "UGX 10,000", description: "Crisp chips.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "sides", name: "Wedges", price: "UGX 10,000", description: "Seasoned potato wedges.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "fish", name: "Whole Fish, Deep Fried", price: "UGX 35,000", description: "Well marinated, deep fried, served with salad, wedges and chips.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "fish", name: "Whole Fish, Wetfry", price: "UGX 35,000", description: "Well marinated pan-fried fish served with chips, posho, wedges or rice.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "fish", name: "Fish Fingers", price: "UGX 25,000", description: "Served with rice, wedges or chips.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "fish", name: "Grilled Fish Fillet", price: "UGX 30,000", description: "Marinated and grilled fish fillet served with potato wedges, steamed vegetables or chips.", image: "images/NewImages/food/platters-category-compressed.jpg" }, { category: "chicken", name: "Chicken Brochette", price: "UGX 30,000", description: "Marinated 250g chicken cubes, skewered. Served with seasonal vegetables and chips or rice.", image: "images/NewImages/food/Chicken/Chicken Brochette.jfif" }, { category: "chicken", name: "Stir Fried Chicken", price: "UGX 30,000", description: "Strip-cut chicken, cabbage, carrots, garlic and soy sauce. Served with rice or chips.", image: "images/NewImages/food/Chicken/Stir Fried Chicken.jfif" }, { category: "chicken", name: "Chicken (local) Wet Fry (Full)", price: "UGX 70,000", description: "Freshly prepared local chicken wet fry.", image: "images/NewImages/food/Chicken/Chicken (Local), Wet Fry.jfif" }, { category: "chicken", name: "Chicken (local) Wet Fry (Half)", price: "UGX 40,000", description: "Freshly prepared local chicken wet fry.", image: "images/NewImages/food/Chicken/Chicken (Local), Wet Fry.jfif" }, { category: "chicken", name: "Chicken (local) Wet Fry (Quarter)", price: "UGX 25,000", description: "Freshly prepared local chicken wet fry.", image: "images/NewImages/food/Chicken/Chicken (Local), Wet Fry.jfif" }, { category: "chicken", name: "Chicken (local) Boiled (Full)", price: "UGX 65,000", description: "Freshly prepared local chicken, boiled.", image: "images/NewImages/food/Chicken/Chicken (Local), Boiled.jfif" }, { category: "chicken", name: "Chicken (local) Boiled (Half)", price: "UGX 35,000", description: "Freshly prepared local chicken, boiled.", image: "images/NewImages/food/Chicken/Chicken (Local), Boiled.jfif" }, { category: "chicken", name: "Chicken (local) Boiled (Quarter)", price: "UGX 20,000", description: "Freshly prepared local chicken, boiled.", image: "images/NewImages/food/Chicken/Chicken (Local), Boiled.jfif" }, { category: "chicken", name: "Oven Grilled Chicken (Full)", price: "UGX 50,000", description: "Freshly prepared oven grilled chicken.", image: "images/NewImages/food/Chicken/Oven Grilled Chicken.jfif" }, { category: "chicken", name: "Oven Grilled Chicken (Half)", price: "UGX 25,000", description: "Freshly prepared oven grilled chicken.", image: "images/NewImages/food/Chicken/Oven Grilled Chicken.jfif" }, { category: "chicken", name: "Oven Grilled Chicken (Quarter)", price: "UGX 15,000", description: "Freshly prepared oven grilled chicken.", image: "images/NewImages/food/Chicken/Oven Grilled Chicken.jfif" },
];

const categoryImages = {
  breakfast: 'images/NewImages/food/Breakfast/Cover image.jpg',
  hotdrinks: 'images/NewImages/food/Breakfast/Cappuccino.jpg',
  goat: 'images/NewImages/food/Goat-Corner/Wet-Fry Goat Meat.png',
  fish: 'images/NewImages/food/Fish/whole-fish-wetfry.jpg',
  chicken: 'images/NewImages/food/Chicken/Chicken (Local), Wet Fry.jfif',
  beef: 'images/NewImages/food/Beef/Beef Steak.jfif',
  pizza: 'images/NewImages/food/Pizza/Margherita Pizza.jfif'
};
const breakfastImages = {
  'Egg (Style of choice)': 'images/NewImages/food/Breakfast/Egg-choice-of-style.jpg',
  'Pair of Sausages': 'images/NewImages/food/Breakfast/Pair of Sausages.jpg',
  'Spanish Omelette': 'images/NewImages/food/Breakfast/Spanish Omelette.jpg',
  'Chapati': 'images/NewImages/food/Breakfast/Chapati.jpg',
  'Pair of Samosa': 'images/NewImages/food/Breakfast/Pair of Samosas.jpg'
};
const hotDrinkImages = {
  'Hot Chocolate': 'images/NewImages/food/Breakfast/Hot Chocolate.jpg',
  'African Coffee': 'images/NewImages/food/Breakfast/African Coffee.jpg',
  'Black Coffee': 'images/NewImages/food/Breakfast/Black Coffee.jpg',
  'Cappuccino': 'images/NewImages/food/Breakfast/Cappuccino.jpg',
  'Espresso (Single)': 'images/NewImages/food/Breakfast/Espresso (Single).jpg',
  'Espresso (Double)': 'images/NewImages/food/Breakfast/Espresso (Double).jpg',
  'Cafe Latte (Single)': 'images/NewImages/food/Breakfast/Cafe Latte (Single).jpg',
  'Cafe Latte (Double)': 'images/NewImages/food/Breakfast/Cafe Latte (Double).jpg',
  'Cafe Mocha': 'images/NewImages/food/Breakfast/Cafe Mocha.jpg',
  'Macchiato': 'images/NewImages/food/Breakfast/Macchiato.jpg',
  'Affogato': 'images/NewImages/food/Breakfast/Affogato.jpg'
};
const itemImageOverrides = {
  'Wetfry Goat Meat (Kilo)': 'images/NewImages/food/Goat-Corner/Wet-Fry Goat Meat.png',
  'Wetfry Goat Meat (Half)': 'images/NewImages/food/Goat-Corner/Wet-Fry Goat Meat.png',
  'Wetfry Goat Meat (Quarter)': 'images/NewImages/food/Goat-Corner/Wet-Fry Goat Meat.png',
  'Dryfry Goat Meat (Kilo)': 'images/NewImages/food/Goat-Corner/Dry-goat-kilo.jpg',
  'Dryfry Goat Meat (Half)': 'images/NewImages/food/Goat-Corner/dry-goat-half.jpg',
  'Goat Choma': 'images/NewImages/food/Goat-Corner/Goat Choma.jfif',
  'Whole Fish, Deep Fried': 'images/NewImages/food/Fish/Whole Fish, Deep Fried.jfif',
  'Whole Fish, Wetfry': 'images/NewImages/food/Fish/whole-fish-wetfry.jpg',
  'Fish Fingers': 'images/NewImages/food/Fish/Fish Fingers.jfif',
  'Grilled Fish Fillet': 'images/NewImages/food/Fish/Grilled Fish Fillet.jfif',
  'Chicken (local) Wet Fry': 'images/NewImages/food/Chicken/Chicken (Local), Wet Fry.jfif',
  'Chicken (local) Boiled': 'images/NewImages/food/Chicken/Chicken (Local), Boiled.jfif',
  'Oven Grilled Chicken': 'images/NewImages/food/Chicken/Oven Grilled Chicken.jfif',
  'Chicken Brochette': 'images/NewImages/food/Chicken/Chicken Brochette.jfif',
  'Stir Fried Chicken': 'images/NewImages/food/Chicken/Stir Fried Chicken.jfif',
  'Beef Steak': 'images/NewImages/food/Beef/Beef Steak.jfif',
  'Beef Curry': 'images/NewImages/food/Beef/Beef Curry.jfif',
  'Beef Stew / Steak': 'images/NewImages/food/Beef/Beef Stew  Steak (Wetfry Beef Steak).jfif',
  'Beef Stroganoff': 'images/NewImages/food/Beef/Beef Stroganoff.jfif',
  'Pan Fried Beef': 'images/NewImages/food/Beef/Pan Fried Beef.jfif',
  'Chicken Pilau': 'images/NewImages/food/Pilau/Chicken Pilau.jfif',
  'Beef Pilau': 'images/NewImages/food/Pilau/Beef Pilau.jfif',
  'Goat Pilau': 'images/NewImages/food/Pilau/Goat Pilau.jpeg',
  'Chicken Wrap': 'images/NewImages/food/chicken-wrap-compressed.jpg',
  'Egg Wrap': 'images/NewImages/food/spanish-omelette-compressed.jpg',
  'Beef Pizza': 'images/NewImages/food/Pizza/Beef Pizza.jfif',
  'Chicken Pizza': 'images/NewImages/food/Pizza/Chicken Pizza.jfif',
  'Margherita Pizza': 'images/NewImages/food/Pizza/Margherita Pizza.jfif',
  'Hawaiian Pizza': 'images/NewImages/food/Pizza/Hawaiian Pizza.jfif',
  'Tuna Pizza': 'images/NewImages/food/Pizza/Tuna Pizza.jfif',
  'Platter for 4 pax': 'images/NewImages/food/sharing-platter-for-four-compressed.jpg',
  'Platter for 8 pax': 'images/NewImages/food/platters-category-compressed.jpg'
};
const sizeLabels = { small: 'Small', large: 'Large', kilo: 'Kilo', half: 'Half', quarter: 'Quarter', full: 'Full' };
const weightVariants = {
  goat: [
    { name: 'Wetfry Goat Meat', description: 'Wet-fry goat meat served with your favourite sides.', sizes: { kilo: 'UGX 45,000', half: 'UGX 25,000', quarter: 'UGX 15,000' }, image: 'images/NewImages/food/Goat-Corner/Wet-Fry Goat Meat.png', waterIncluded: true },
    { name: 'Dryfry Goat Meat', description: 'Dry-fry goat meat served with your favourite sides.', sizes: { kilo: 'UGX 45,000', half: 'UGX 25,000' }, image: 'images/NewImages/food/Goat-Corner/Dry-goat-kilo.jpg', waterIncluded: true },
    { name: 'Goat Choma', description: 'Tender goat choma served with your favourite sides.', sizes: { kilo: 'UGX 45,000', half: 'UGX 25,000' }, image: 'images/NewImages/food/Goat-Corner/Goat Choma.jfif', waterIncluded: true }
  ],
  fish: [
    { name: 'Whole Fish, Deep Fried', description: 'Well marinated, deep fried, served with salad, wedges and chips.', price: 'UGX 35,000', image: 'images/NewImages/food/Fish/Whole Fish, Deep Fried.jfif', waterIncluded: true },
    { name: 'Whole Fish, Wetfry', description: 'Choice of spiced curry and well marinated pan-fried fish served with chips, posho, wedges or rice.', price: 'UGX 35,000', image: 'images/NewImages/food/Fish/whole-fish-wetfry.jpg', waterIncluded: true },
    { name: 'Fish Fingers', description: 'Served with rice, wedges or chips.', price: 'UGX 25,000', image: 'images/NewImages/food/Fish/Fish Fingers.jfif', waterIncluded: true },
    { name: 'Grilled Fish Fillet', description: 'Marinated and grilled fish fillet served with potato wedges, steamed vegetables or chips.', price: 'UGX 30,000', image: 'images/NewImages/food/Fish/Grilled Fish Fillet.jfif', waterIncluded: true }
  ],
  chicken: [
    { name: 'Chicken (local) Wet Fry', description: 'Tender local chicken prepared wet-fry style and served with your choice of sides.', sizes: { full: 'UGX 70,000', half: 'UGX 40,000', quarter: 'UGX 25,000' }, image: 'images/NewImages/food/Chicken/Chicken (Local), Wet Fry.jfif', waterIncluded: true },
    { name: 'Chicken (local) Boiled', description: 'Freshly prepared local chicken boiled to order and served with your choice of sides.', sizes: { full: 'UGX 65,000', half: 'UGX 35,000', quarter: 'UGX 20,000' }, image: 'images/NewImages/food/Chicken/Chicken (Local), Boiled.jfif', waterIncluded: true },
    { name: 'Oven Grilled Chicken', description: 'Freshly prepared oven-grilled chicken served with your choice of sides.', sizes: { full: 'UGX 50,000', half: 'UGX 25,000', quarter: 'UGX 15,000' }, image: 'images/NewImages/food/Chicken/Oven Grilled Chicken.jfif', waterIncluded: true },
    { name: 'Chicken Brochette', description: 'Marinated 250g chicken cubes, skewered and served with seasonal vegetables and chips or rice.', price: 'UGX 30,000', image: 'images/NewImages/food/Chicken/Chicken Brochette.jfif', waterIncluded: false },
    { name: 'Stir Fried Chicken', description: 'Strip-cut chicken, cabbage, carrots, garlic and soy sauce served with rice or chips.', price: 'UGX 30,000', image: 'images/NewImages/food/Chicken/Stir Fried Chicken.jfif', waterIncluded: false }
  ]
};

const normalizedMenuItems = menuItems.filter(item => !['goat', 'fish', 'chicken'].includes(item.category));

Object.entries(weightVariants).forEach(([category, items]) => {
  const matched = menuItems.filter(item => item.category === category);
  if (!matched.length) {
    normalizedMenuItems.push(...items.map(item => ({ ...item, category })));
    return;
  }

  const usedNames = new Set();
  matched.forEach(item => {
    const match = items.find(candidate => candidate.name.toLowerCase() === item.name.toLowerCase() || item.name.toLowerCase().includes(candidate.name.toLowerCase().replace(/\s+\(local\)/i, '').trim()));
    if (!match) {
      normalizedMenuItems.push(item);
      return;
    }

    const optionKey = match.name.toLowerCase();
    if (usedNames.has(optionKey)) return;
    usedNames.add(optionKey);

    const normalizedItem = {
      ...item,
      ...match,
      category,
      name: match.name,
      description: match.description,
      image: match.image,
      waterIncluded: Boolean(match.waterIncluded)
    };

    if (match.sizes) normalizedItem.sizes = match.sizes;
    else normalizedItem.price = match.price;

    normalizedMenuItems.push(normalizedItem);
  });
});

menuItems.splice(0, menuItems.length, ...normalizedMenuItems);
const encodeAssetUrl = (url) => encodeURI(url).replace(/\(/g, '%28').replace(/\)/g, '%29');
menuItems.forEach(item => {
  const override = itemImageOverrides[item.name];
  item.image = encodeAssetUrl(override || item.image);
  const inMealWaterGroup = ['goat', 'fish', 'beef', 'chicken', 'pilau', 'platters'].includes(item.category);
  item.waterIncluded = item.category === 'pizza' || inMealWaterGroup || item.name === 'Chicken Wrap' || item.name === 'Egg Wrap';
});
const menuGrid = document.querySelector('#menu-grid');
const menuCategoryGrid = document.querySelector('.menu-category-grid');
const sideTab = menuCategoryGrid.querySelector("[data-category=sides]"); if (sideTab) sideTab.remove(); ["all", "breakfast", "hotdrinks", "goat", "fish", "chicken", "beef", "pilau", "pizza", "platters"].forEach(category => { const tab = menuCategoryGrid.querySelector("[data-category=" + category + "]"); if (tab) menuCategoryGrid.appendChild(tab); });
const tabs = document.querySelectorAll('.menu-category-grid button');
const menuGroups = ['breakfast', 'hotdrinks', 'goat', 'fish', 'chicken', 'beef', 'pilau', 'pizza', 'platters'];
const categoryLabels = { breakfast: 'Breakfast', hotdrinks: 'Hot drinks', goat: 'Goat corner &amp; sides', fish: 'Fish corner', chicken: 'Chicken corner &amp; sides', beef: 'Beef corner', pilau: 'Pilau &amp; wraps', pizza: 'Pizza', platters: 'Platters' };
function waterBadgeMarkup(item) {
  if (!item.waterIncluded) return '';
  const label = item.category === 'pizza' ? 'Free two bottles of water for every pizza.' : 'Free bottle of water for every plate of meal.';
  const bottleSrc = 'images/bottle.jfif';
  return '<span class=\'water-badge' + (item.category === 'pizza' ? ' water-badge--pizza' : '') + '\'><img class=\'water-bottle\' src=\'' + bottleSrc + '\' alt=\'Water bottle\' loading=\'lazy\' />' + label + '</span>';
}
function priceMarkup(item, index) {
  const isSideOptional = ['goat', 'chicken'].includes(item.category);
  const sizeButtons = item.sizes ? Object.entries(item.sizes).map(([size, value]) => '<button type=\'button\' class=\'menu-add\' data-add-item data-item-index=\'' + index + '\' data-size=\'' + size + '\'><span>' + (sizeLabels[size] || size[0].toUpperCase() + size.slice(1)) + '</span><strong>' + value + '</strong></button>').join('') : '<button type=\'button\' class=\'menu-add menu-add-single\' data-add-item data-item-index=\'' + index + '\'><span>Add to order</span><strong>+ </strong></button>';
  const sidesButton = isSideOptional ? '<button type=\'button\' class=\'menu-add menu-add-sides\' data-add-sides data-item-index=\'' + index + '\'><span>Pick sides</span><strong>+</strong></button>' : '';
  return '<div class=\'menu-order-options\'>' + sizeButtons + sidesButton + '</div>';
}
function cardMarkup(item) { const index = menuItems.indexOf(item); const priceHtml = item.sizes ? '<span class=\'menu-card-price menu-card-sizes\'>' + Object.entries(item.sizes).map(([size, value]) => '<span><small>' + (sizeLabels[size] || size) + '</small><strong>' + value + '</strong></span>').join('') + '</span>' : '<span class=\'menu-card-price\'>' + item.price + '</span>'; return '<article class=\'menu-card\'><div class=\'menu-card-image\'><img src=\'' + item.image + '\' alt=\'' + item.name + '\' loading=\'lazy\'></div><div class=\'menu-card-body\'><div class=\'menu-card-top\'><h3>' + item.name + '</h3>' + priceHtml + '</div><p>' + item.description + '</p>' + waterBadgeMarkup(item) + priceMarkup(item, index) + '</div></article>'; }
function centerCategoryTab(button) { const strip = document.querySelector('.menu-category-grid'); if (!strip || strip.scrollWidth <= strip.clientWidth) return; const target = button.offsetLeft - (strip.clientWidth - button.offsetWidth) / 2; strip.scrollTo({ left: Math.max(0, Math.min(target, strip.scrollWidth - strip.clientWidth)), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
function setActive(category, centerTab = true) { tabs.forEach(button => { const active = button.dataset.category === category; const wasActive = button.classList.contains('active'); button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); if (active && centerTab && !wasActive) centerCategoryTab(button); }); }
function observeMenuSections() { if (window.menuScrollHandler) { window.removeEventListener('scroll', window.menuScrollHandler); window.removeEventListener('resize', window.menuScrollHandler); } window.menuScrollHandler = () => { const sections = [...document.querySelectorAll('[data-menu-section]')]; if (!sections.length) return; const menuRect = menuGrid.getBoundingClientRect(); if (menuRect.top > window.innerHeight * 0.75 || menuRect.bottom < 150) { setActive('all', false); return; } const marker = Math.max(155, Math.min(245, window.innerHeight * 0.28)); const current = sections.filter(section => section.getBoundingClientRect().top <= marker).pop(); setActive(current ? current.dataset.menuSection : 'all'); }; window.addEventListener('scroll', window.menuScrollHandler, { passive: true }); window.addEventListener('resize', window.menuScrollHandler, { passive: true }); requestAnimationFrame(window.menuScrollHandler); }
function renderMenu(category = "all") { const itemsForGroup = group => { const main = menuItems.filter(item => item.category === group); return main; }; if (category === "all") { menuGrid.innerHTML = menuGroups.map(group => "<section class=menu-category-section data-menu-section=" + group + "><div class=menu-section-heading><span>" + categoryLabels[group] + "</span></div><div class=menu-section-grid>" + itemsForGroup(group).map(cardMarkup).join("") + "</div></section>").join(""); observeMenuSections(); } else { menuGrid.innerHTML = itemsForGroup(category).map(cardMarkup).join(""); if (window.menuObserver) window.menuObserver.disconnect(); } }
tabs.forEach(tab => tab.addEventListener('click', () => { const category = tab.dataset.category; setActive(category); if (category === 'all') { renderMenu('all'); document.querySelector('[data-menu-section]').scrollIntoView({ behavior: 'smooth', block: 'start' }); } else { renderMenu('all'); const section = document.querySelector('[data-menu-section=' + category + ']'); if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }));
renderMenu('all');

document.addEventListener('click', event => { const button = event.target.closest('.quick-fab-toggle'); if (!button) return; const fab = button.closest('.quick-fab'); const open = fab.classList.toggle('is-open'); button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Close quick actions' : 'Open quick actions'); }); document.addEventListener('click', event => { const link = event.target.closest('.quick-fab-actions a'); if (!link) return; const fab = link.closest('.quick-fab'); const button = fab.querySelector('.quick-fab-toggle'); fab.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open quick actions'); });

document.addEventListener('click', event => { const speedDial = document.querySelector('.speed-dial'); if (speedDial && !event.target.closest('.speed-dial')) { speedDial.classList.remove('is-open'); const toggle = speedDial.querySelector('.speed-dial-toggle'); const actions = speedDial.querySelector('.speed-dial-actions'); toggle.setAttribute('aria-expanded', 'false'); actions.setAttribute('aria-hidden', 'true'); } }); document.addEventListener('keydown', event => { if (event.key !== 'Escape') return; const speedDial = document.querySelector('.speed-dial'); if (!speedDial) return; speedDial.classList.remove('is-open'); speedDial.querySelector('.speed-dial-toggle').setAttribute('aria-expanded', 'false'); speedDial.querySelector('.speed-dial-actions').setAttribute('aria-hidden', 'true'); });

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const root = document.documentElement;
function syncHeaderHeight() { root.style.setProperty('--site-header-height', header.getBoundingClientRect().height + 'px'); }
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 30); requestAnimationFrame(syncHeaderHeight); }
syncHeaderHeight();
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', syncHeaderHeight, { passive: true });
toggle.addEventListener('click', () => { const open = header.classList.toggle('menu-open'); toggle.setAttribute('aria-expanded', String(open)); requestAnimationFrame(syncHeaderHeight); });
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => { header.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false'); }));
