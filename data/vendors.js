export const vendors = [
  {
    id: '1',
    name: 'VeggieVerse',
    category: 'Fruits & Vegetables',
    distance: '0.5 km',
    description: 'Fresh fruits and vegetables sourced daily from local farms.',
    products: ['Apples', 'Tomatoes', 'Spinach'],
    contact: '9876543210',
    hours: '8 AM - 8 PM',
    image: require('../assets/vendors/veggiesverse.jpg')  

  },
  {
    id: '2',
    name: 'Daily Dairy',
    category: 'Dairy',
    distance: '0.3 km',
    description: 'Pure milk, paneer, and curd delivered every morning.',
    products: ['Milk', 'Curd', 'Paneer'],
    contact: '9123456780',
    hours: '6 AM - 10 AM, 5 PM - 8 PM',
    image: require('../assets/vendors/dailydairy.jpg')  
  },
  {
    id: '3',
    name: 'Daily Needs',
    category: 'Groceries & Essentials',
    distance: '1.2 km',
    description: 'Certified organic grocery essentials at your doorstep.',
    products: ['Rice', 'Wheat Flour', 'Honey',"Essentials"],
    contact: '9988776655',
    hours: '10 AM - 9 PM',
    image: require('../assets/vendors/dailyneed.jpg') 
  },
  {
    id: '4',                    // unique string
    name: 'HomeGourmet',
    category: 'Tiffin Services',
    distance: '1 km',
    description: 'Homemade-style meals delivered directly to your doorstep, providing a hassle-free way to enjoy fresh, healthy food',
    products: ['Paratha', 'Noodles','Fried rice','Rolls','User needs are also served'],
    contact: '1234567890',
    hours: '9 AM - 7 PM',
    image: require('../assets/vendors/homegourmet.jpg')
  },
  {
    id: '5',                              // unique string
    name: 'Glow & Go Salon',              // salon name
    category: 'Salon Services',           // category (matches your filter buttons)
    distance: '0.8 km',                   // dummy distance
    description: 'Professional haircuts, styling, manicures, and spa treatments using organic products in a warm, welcoming atmosphere.',  
    products: [                           // offerings list
      'Haircut',
      'Manicure',
      'Facial',
      'Spa Treatment'
    ],
    contact: '9123456789',                
    hours: '9 AM - 8 PM',
    image: require('../assets/vendors/glowandgo.jpg')                 
  },
  {
    id: '6',  
    name: 'Nature\'s Crisp Chips',  
    category: 'Hot Chips',  
    distance: '1.2 km',  
    description: 'Oven-baked with locally sourced organic potatoes and a blend of herbs, these chips are a healthy, freshly made snack you can feel good about.',  
    products: [
      'Sea Salt & Rosemary',
      'Smoky Paprika',
      'Garlic & Herb',
      'Classic Salted', 'Peri-Peri', 'Cheese & Herbs'
    ],  
    contact: '9876512345',  
    hours: '10 AM – 9 PM', 
    image: require('../assets/vendors/naturescrisp.jpg')    
  },
  {
    id: '7',  
    name: 'Fresh Bakes',  
    category: 'Bakery',  
    distance: '0.4 km',  
    description: 'Artisan bread, pastries, and cakes made with organic ingredients and traditional techniques.',  
    products: [
      'Sourdough Bread',
      'Croissants',
      'Chocolate Cake',
      'Cookies'
    ],  
    contact: '9988776655',  
    hours: '7 AM - 8 PM',  
    image: require('../assets/vendors/freshbakes.jpg')  
  },
  {
    id: '8',  
    name: 'The Spice Route',  
    category: 'Spices & Condiments',  
    distance: '1.5 km',  
    description: 'A wide range of organic spices and condiments sourced from local farmers.',  
    products: [
      'Turmeric Powder',
      'Cumin Seeds',
      'Chili Powder',
      'Garam Masala'
    ],  
    contact: '9988776655',  
    hours: '9 AM - 7 PM',  
    image: require('../assets/vendors/thespiceroute.jpg')  

  },
  {
    id: '9',  
    name: 'The Green Plate',  
    category: 'Tiffin Services',  
    distance: '1.65 km',  
    description: 'Nutritious meal plans tailored to your dietary needs, delivered fresh every day.',  
    products: [
      'Salads',
      'Smoothie Bowls',
      'Quinoa Dishes',
      'Vegan Options'
    ],  
    contact: '9988776655',  
    hours: '8 AM - 8 PM',  
    image: require('../assets/vendors/thegreenplate.jpg')
  },
  
  {
    id: '10',
    name: 'Wellness Pharmacy',
    category: 'Medical Store',
    distance: '0.6 km',
    description: 'Your trusted local pharmacy offering prescription medications, health supplements, and over-the-counter remedies. We care for your well-being.',
    products: [
      'Pain Relievers',
      'Vitamins & Supplements',
      'Cold & Flu Medications',
      'First Aid Kits'
    ],
    contact: '9123456789',
    hours: '8 AM - 10 PM',
    image: require('../assets/vendors/wellnesspharmacy.jpg')
  },
  {
    id: '11',
    name: 'Trendy Threads',
    category: 'Dress Store',
    distance: '1.2 km',
    description: 'Explore the latest in fashion with our collection of trendy dresses, shirts, and accessories for every occasion. Affordable luxury for all.',
    products: [
      'Summer Dresses',
      'Casual Shirts',
      'Evening Gowns',
      'Accessories'
    ],
    contact: '9876543210',
    hours: '10 AM - 8 PM',
    image: require('../assets/vendors/trendythreads.jpg')
  },
  {
    id: '12',
    name: 'Apna Bazaar',
    category: 'Groceries & Essentials',
    distance: '0.5 km',
    description: 'Your one-stop shop for fresh produce, pantry staples, dairy, and household essentials—everything you need to keep your home running smoothly.',
    products: [
      'Fresh Fruits & Vegetables',
      'Rice & Grains',
      'Cooking Oils',
      'Dairy Products',
      'Cleaning Supplies'
    ],
    contact: '9876701234',
    hours: '7 AM – 9 PM',
    image: require('../assets/vendors/apnabazaar.jpg')
  },
  {
    id: '13',
    name: 'Harvest Hub',
    category: 'Fruits & Vegetables',
    distance: '0.95 km',
    description: 'Farm-fresh seasonal fruits and leafy greens picked daily for maximum flavor and nutrition.',
    products: [
      'Strawberries',
      'Kale',
      'Blueberries',
      'Romaine Lettuce',
    ],
    contact: '9876123456',
    hours: '7 AM – 7 PM',
    image: require('../assets/vendors/harvesthub.jpg')

  },
  {
    id: '14',
    name: 'FramFresh ',
    category: 'Dairy',
    distance: '0.72 km',
    description: 'Fresh, preservative-free milk and dairy products delivered straight from local farms every morning.',
    products: [
      'Full Cream Milk',
      'Ghee',
      'Butter',
      'Flavored Yogurt'
    ],
    contact: '9876987698',
    hours: '6 AM - 11 AM, 5 PM - 8 PM',
    image: require('../assets/vendors/framfresh.jpg')
  },
  {
    id: '15',
    name: 'Bakers Delight',
    category: 'Bakery',
    distance: '0.8 km',
    description: 'Warm, fresh bakes every morning. From classic loaves to indulgent pastries made with organic ingredients.',
    products: [
      'Banana Bread',
      'Multigrain Loaf',
      'Blueberry Muffins',
      'Cinnamon Rolls'
    ],
    contact: '9876454321',
    hours: '6 AM - 7 PM',
    image: require('../assets/vendors/BakersDelight.jpg')  

  },

];
