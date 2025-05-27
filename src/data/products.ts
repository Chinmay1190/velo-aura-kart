
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  specifications: {
    engine: string;
    power: string;
    torque: string;
    topSpeed: string;
    weight: string;
    fuelTank: string;
  };
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Ninja H2",
    brand: "Kawasaki",
    price: 3499000,
    originalPrice: 3699000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "Sport",
    description: "The ultimate expression of Kawasaki engineering, featuring a supercharged engine and aerodynamic design.",
    specifications: {
      engine: "998cc Supercharged Inline-4",
      power: "200 HP",
      torque: "137 Nm",
      topSpeed: "300+ km/h",
      weight: "238 kg",
      fuelTank: "17L"
    },
    features: ["Supercharged Engine", "Aerodynamic Wings", "TFT Display", "Quick Shifter"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "2",
    name: "CBR1000RR-R Fireblade",
    brand: "Honda",
    price: 2850000,
    originalPrice: 3050000,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Race-bred superbike with MotoGP-derived technology and premium components.",
    specifications: {
      engine: "999.89cc Inline-4",
      power: "215 HP",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      weight: "201 kg",
      fuelTank: "16.1L"
    },
    features: ["Winglets", "Öhlins Suspension", "Brembo Brakes", "IMU"],
    inStock: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: "3",
    name: "R1M",
    brand: "Yamaha",
    price: 2890000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Track-focused superbike with carbon fiber bodywork and premium suspension.",
    specifications: {
      engine: "998cc Crossplane Inline-4",
      power: "200 HP",
      torque: "112.4 Nm",
      topSpeed: "299 km/h",
      weight: "202 kg",
      fuelTank: "17L"
    },
    features: ["Carbon Fiber Body", "Öhlins Suspension", "GPS Data Logger", "TCS"],
    inStock: true,
    rating: 4.9,
    reviews: 178
  },
  {
    id: "4",
    name: "Panigale V4 S",
    brand: "Ducati",
    price: 3299000,
    image: "https://images.unsplash.com/photo-1588361585-285b0c437bb3?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Italian superbike masterpiece with V4 engine and advanced electronics.",
    specifications: {
      engine: "1103cc V4",
      power: "214 HP",
      torque: "124 Nm",
      topSpeed: "300+ km/h",
      weight: "195 kg",
      fuelTank: "16L"
    },
    features: ["V4 Engine", "Öhlins Smart EC 2.0", "Cornering ABS", "DTC EVO"],
    inStock: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: "5",
    name: "GSX-R1000R",
    brand: "Suzuki",
    price: 1890000,
    originalPrice: 2090000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Refined superbike with MotoGP-inspired design and advanced electronics.",
    specifications: {
      engine: "999.8cc Inline-4",
      power: "199 HP",
      torque: "117.6 Nm",
      topSpeed: "299 km/h",
      weight: "203 kg",
      fuelTank: "16L"
    },
    features: ["Variable Valve Timing", "Motion Track Brake System", "SDMS-α", "Launch Control"],
    inStock: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: "6",
    name: "S1000RR",
    brand: "BMW",
    price: 2499000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    category: "Sport",
    description: "German precision engineering with asymmetric design and ShiftCam technology.",
    specifications: {
      engine: "999cc Inline-4",
      power: "207 HP",
      torque: "113 Nm",
      topSpeed: "299 km/h",
      weight: "197 kg",
      fuelTank: "16.5L"
    },
    features: ["ShiftCam Technology", "Race ABS", "Dynamic Traction Control", "Launch Control"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: "7",
    name: "ZX-10R",
    brand: "Kawasaki",
    price: 1799000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Championship-winning superbike with proven track performance.",
    specifications: {
      engine: "998cc Inline-4",
      power: "203 HP",
      torque: "114.9 Nm",
      topSpeed: "299 km/h",
      weight: "207 kg",
      fuelTank: "17L"
    },
    features: ["KTRC", "KLCM", "KQS", "Showa Balance Free Fork"],
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: "8",
    name: "1299 Panigale",
    brand: "Ducati",
    price: 2799000,
    originalPrice: 2999000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Sport",
    description: "L-Twin superbike with distinctive character and Italian passion.",
    specifications: {
      engine: "1285cc L-Twin",
      power: "205 HP",
      torque: "144.6 Nm",
      topSpeed: "300+ km/h",
      weight: "190.5 kg",
      fuelTank: "17L"
    },
    features: ["Desmodromic Valve System", "Bosch Cornering ABS", "DTC", "DWC"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "9",
    name: "Ninja ZX-6R",
    brand: "Kawasaki",
    price: 999000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Middleweight supersport with agile handling and refined power delivery.",
    specifications: {
      engine: "636cc Inline-4",
      power: "130 HP",
      torque: "70.8 Nm",
      topSpeed: "260 km/h",
      weight: "196 kg",
      fuelTank: "17L"
    },
    features: ["KTRC", "Power Mode Selection", "KQS", "Assist & Slipper Clutch"],
    inStock: true,
    rating: 4.6,
    reviews: 245
  },
  {
    id: "10",
    name: "CBR650R",
    brand: "Honda",
    price: 899000,
    originalPrice: 999000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Middleweight sport bike with perfect balance of performance and comfort.",
    specifications: {
      engine: "649cc Inline-4",
      power: "95 HP",
      torque: "64 Nm",
      topSpeed: "220 km/h",
      weight: "208 kg",
      fuelTank: "15.4L"
    },
    features: ["HSTC", "LCD Display", "LED Lights", "Dual Channel ABS"],
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    id: "11",
    name: "Diavel 1260",
    brand: "Ducati",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Cruiser",
    description: "Power cruiser combining muscle bike attitude with Italian sophistication.",
    specifications: {
      engine: "1262cc L-Twin",
      power: "159 HP",
      torque: "129 Nm",
      topSpeed: "250 km/h",
      weight: "244 kg",
      fuelTank: "17L"
    },
    features: ["DVT", "Bosch Cornering ABS", "DTC", "DPL"],
    inStock: true,
    rating: 4.7,
    reviews: 123
  },
  {
    id: "12",
    name: "Fat Bob 114",
    brand: "Harley-Davidson",
    price: 1899000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Cruiser",
    description: "Aggressive cruiser with Milwaukee-Eight 114 engine and distinctive styling.",
    specifications: {
      engine: "1868cc V-Twin",
      power: "94 HP",
      torque: "155 Nm",
      topSpeed: "180 km/h",
      weight: "296 kg",
      fuelTank: "13.2L"
    },
    features: ["Milwaukee-Eight Engine", "ABS", "LED Lighting", "Electronic Throttle Control"],
    inStock: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: "13",
    name: "Z H2",
    brand: "Kawasaki",
    price: 1699000,
    originalPrice: 1799000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Supercharged naked bike with aggressive styling and immense power.",
    specifications: {
      engine: "998cc Supercharged Inline-4",
      power: "200 HP",
      torque: "137 Nm",
      topSpeed: "250 km/h",
      weight: "239 kg",
      fuelTank: "19L"
    },
    features: ["Supercharged Engine", "Electronic Suspension", "IMU", "KTRC"],
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: "14",
    name: "MT-09 SP",
    brand: "Yamaha",
    price: 1299000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Triple-cylinder naked bike with premium suspension and electronics package.",
    specifications: {
      engine: "889cc Crossplane CP3",
      power: "119 HP",
      torque: "93 Nm",
      topSpeed: "230 km/h",
      weight: "193 kg",
      fuelTank: "14L"
    },
    features: ["CP3 Engine", "Öhlins Suspension", "IMU", "Ride-by-Wire"],
    inStock: true,
    rating: 4.7,
    reviews: 178
  },
  {
    id: "15",
    name: "Super Duke 1290 R",
    brand: "KTM",
    price: 1899000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Austrian beast with V-twin power and aggressive naked bike design.",
    specifications: {
      engine: "1301cc V-Twin",
      power: "180 HP",
      torque: "140 Nm",
      topSpeed: "280 km/h",
      weight: "189 kg",
      fuelTank: "16L"
    },
    features: ["WP Suspension", "Cornering ABS", "MSC", "MTC"],
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: "16",
    name: "Speed Triple 1200 RS",
    brand: "Triumph",
    price: 1799000,
    originalPrice: 1899000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Naked",
    description: "British triple with track-focused setup and distinctive three-cylinder sound.",
    specifications: {
      engine: "1160cc Inline-3",
      power: "178 HP",
      torque: "125 Nm",
      topSpeed: "250 km/h",
      weight: "198 kg",
      fuelTank: "15.5L"
    },
    features: ["Öhlins Suspension", "Cornering ABS", "Traction Control", "Quick Shifter"],
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: "17",
    name: "Monster 1200 S",
    brand: "Ducati",
    price: 1699000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Iconic naked bike with trellis frame and powerful L-twin engine.",
    specifications: {
      engine: "1198cc L-Twin",
      power: "147 HP",
      torque: "126.2 Nm",
      topSpeed: "245 km/h",
      weight: "211 kg",
      fuelTank: "16.5L"
    },
    features: ["Öhlins Suspension", "Cornering ABS", "DTC", "DWC"],
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: "18",
    name: "Z900",
    brand: "Kawasaki",
    price: 899000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Versatile naked bike with smooth inline-four power and modern styling.",
    specifications: {
      engine: "948cc Inline-4",
      power: "125 HP",
      torque: "98.6 Nm",
      topSpeed: "230 km/h",
      weight: "210 kg",
      fuelTank: "17L"
    },
    features: ["KTRC", "Power Mode", "Assist & Slipper Clutch", "LED Lighting"],
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: "19",
    name: "CB1000R",
    brand: "Honda",
    price: 1399000,
    originalPrice: 1499000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Neo-sports café with premium components and distinctive styling.",
    specifications: {
      engine: "998cc Inline-4",
      power: "145 HP",
      torque: "104 Nm",
      topSpeed: "240 km/h",
      weight: "212 kg",
      fuelTank: "16.2L"
    },
    features: ["Showa SFF-BP USD Fork", "Honda Selectable Torque Control", "Power Modes", "Quick Shifter"],
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: "20",
    name: "Multistrada V4 S",
    brand: "Ducati",
    price: 2499000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Four-in-one adventure tourer with V4 engine and advanced radar technology.",
    specifications: {
      engine: "1158cc V4",
      power: "170 HP",
      torque: "125 Nm",
      topSpeed: "270 km/h",
      weight: "243 kg",
      fuelTank: "22L"
    },
    features: ["Adaptive Cruise Control", "Blind Spot Detection", "Skyhook Suspension", "Cornering Lights"],
    inStock: true,
    rating: 4.9,
    reviews: 123
  },
  {
    id: "21",
    name: "R1250GS Adventure",
    brand: "BMW",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Ultimate adventure touring machine with ShiftCam technology and long-distance capability.",
    specifications: {
      engine: "1254cc Boxer Twin",
      power: "136 HP",
      torque: "143 Nm",
      topSpeed: "215 km/h",
      weight: "268 kg",
      fuelTank: "30L"
    },
    features: ["ShiftCam Technology", "Dynamic ESA", "BMW Motorrad Connected", "Hill Start Control"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: "22",
    name: "Africa Twin Adventure Sports",
    brand: "Honda",
    price: 1799000,
    originalPrice: 1899000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Adventure tourer inspired by Dakar rally bikes with advanced electronics.",
    specifications: {
      engine: "1084cc Parallel Twin",
      power: "102 HP",
      torque: "105 Nm",
      topSpeed: "190 km/h",
      weight: "248 kg",
      fuelTank: "24.8L"
    },
    features: ["DCT", "HSTC", "Wheelie Control", "Cornering ABS"],
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: "23",
    name: "Tiger 1200 Rally Pro",
    brand: "Triumph",
    price: 1999000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "British adventure bike with class-leading technology and off-road capability.",
    specifications: {
      engine: "1160cc Inline-3",
      power: "150 HP",
      torque: "130 Nm",
      topSpeed: "220 km/h",
      weight: "245 kg",
      fuelTank: "20L"
    },
    features: ["Showa Semi-Active Suspension", "Cornering ABS", "Traction Control", "Blind Spot Radar"],
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: "24",
    name: "1290 Super Adventure S",
    brand: "KTM",
    price: 1899000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Austrian adventure bike with travel-focused design and V-twin power.",
    specifications: {
      engine: "1301cc V-Twin",
      power: "160 HP",
      torque: "138 Nm",
      topSpeed: "240 km/h",
      weight: "249 kg",
      fuelTank: "23L"
    },
    features: ["WP Semi-Active Suspension", "Cornering ABS", "MSC", "Adaptive Cruise Control"],
    inStock: true,
    rating: 4.7,
    reviews: 145
  },
  {
    id: "25",
    name: "Versys 1000 SE",
    brand: "Kawasaki",
    price: 1399000,
    originalPrice: 1499000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Adventure tourer with balanced on-road and off-road performance.",
    specifications: {
      engine: "1043cc Inline-4",
      power: "120 HP",
      torque: "102 Nm",
      topSpeed: "210 km/h",
      weight: "257 kg",
      fuelTank: "21L"
    },
    features: ["Electronic Suspension", "KTRC", "KCMF", "Cornering Management Function"],
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: "26",
    name: "V-Strom 1050XT",
    brand: "Suzuki",
    price: 1299000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Adventure touring bike with V-twin character and practical design.",
    specifications: {
      engine: "1037cc V-Twin",
      power: "107 HP",
      torque: "100 Nm",
      topSpeed: "200 km/h",
      weight: "247 kg",
      fuelTank: "20L"
    },
    features: ["Motion Track Brake System", "Traction Control", "Low RPM Assist", "Hill Hold Control"],
    inStock: true,
    rating: 4.5,
    reviews: 167
  },
  {
    id: "27",
    name: "MT-10 SP",
    brand: "Yamaha",
    price: 1699000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Hyper naked bike with crossplane crankshaft engine and premium components.",
    specifications: {
      engine: "998cc Crossplane Inline-4",
      power: "166 HP",
      torque: "111 Nm",
      topSpeed: "250 km/h",
      weight: "210 kg",
      fuelTank: "17L"
    },
    features: ["Öhlins Suspension", "IMU", "Cruise Control", "TCS"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "28",
    name: "StreetFighter V4 S",
    brand: "Ducati",
    price: 2699000,
    originalPrice: 2899000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Naked superbike with Panigale V4 engine and aggressive styling.",
    specifications: {
      engine: "1103cc V4",
      power: "208 HP",
      torque: "123 Nm",
      topSpeed: "280 km/h",
      weight: "201 kg",
      fuelTank: "16L"
    },
    features: ["Öhlins Smart EC 2.0", "Cornering ABS", "DTC EVO", "DWC EVO"],
    inStock: true,
    rating: 4.9,
    reviews: 134
  },
  {
    id: "29",
    name: "FZ-X",
    brand: "Yamaha",
    price: 125000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Commuter",
    description: "Retro-styled commuter with modern engine and practical features.",
    specifications: {
      engine: "149cc Single Cylinder",
      power: "12.4 HP",
      torque: "13.3 Nm",
      topSpeed: "110 km/h",
      weight: "139 kg",
      fuelTank: "10L"
    },
    features: ["LED Headlight", "Bluetooth Connectivity", "Single Channel ABS", "Side Stand Engine Cut-off"],
    inStock: true,
    rating: 4.3,
    reviews: 456
  },
  {
    id: "30",
    name: "CB Hornet 2.0",
    brand: "Honda",
    price: 135000,
    originalPrice: 145000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Commuter",
    description: "Sporty commuter with aggressive design and efficient engine.",
    specifications: {
      engine: "184.4cc Single Cylinder",
      power: "17.26 HP",
      torque: "16.1 Nm",
      topSpeed: "125 km/h",
      weight: "142 kg",
      fuelTank: "12L"
    },
    features: ["LED Headlight", "Digital Console", "Single Channel ABS", "Engine Kill Switch"],
    inStock: true,
    rating: 4.4,
    reviews: 378
  },
  {
    id: "31",
    name: "Gixxer 250",
    brand: "Suzuki",
    price: 175000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Entry-level sport bike with Suzuki's racing heritage and modern features.",
    specifications: {
      engine: "249cc Single Cylinder",
      power: "26.5 HP",
      torque: "22.6 Nm",
      topSpeed: "150 km/h",
      weight: "158 kg",
      fuelTank: "12L"
    },
    features: ["Digital Console", "LED Lighting", "Dual Channel ABS", "USD Fork"],
    inStock: true,
    rating: 4.5,
    reviews: 289
  },
  {
    id: "32",
    name: "RC 390",
    brand: "KTM",
    price: 299000,
    originalPrice: 319000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Track-focused sport bike with Austrian engineering and aggressive styling.",
    specifications: {
      engine: "373.2cc Single Cylinder",
      power: "43 HP",
      torque: "37 Nm",
      topSpeed: "170 km/h",
      weight: "172 kg",
      fuelTank: "13.7L"
    },
    features: ["WP Suspension", "Cornering ABS", "TFT Display", "Quick Shifter+"],
    inStock: true,
    rating: 4.6,
    reviews: 345
  },
  {
    id: "33",
    name: "Ninja 300",
    brand: "Kawasaki",
    price: 325000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Twin-cylinder sport bike perfect for beginners and experienced riders alike.",
    specifications: {
      engine: "296cc Parallel Twin",
      power: "39 HP",
      torque: "27 Nm",
      topSpeed: "160 km/h",
      weight: "172 kg",
      fuelTank: "17L"
    },
    features: ["Parallel Twin Engine", "ABS", "Digital Console", "Slipper Clutch"],
    inStock: true,
    rating: 4.5,
    reviews: 567
  },
  {
    id: "34",
    name: "Duke 390",
    brand: "KTM",
    price: 289000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Austrian naked bike with aggressive styling and performance-oriented features.",
    specifications: {
      engine: "373.2cc Single Cylinder",
      power: "43 HP",
      torque: "37 Nm",
      topSpeed: "165 km/h",
      weight: "167 kg",
      fuelTank: "13.4L"
    },
    features: ["WP Suspension", "Cornering ABS", "TFT Display", "Ride-by-Wire"],
    inStock: true,
    rating: 4.6,
    reviews: 423
  },
  {
    id: "35",
    name: "MT-15 V2.0",
    brand: "Yamaha",
    price: 165000,
    originalPrice: 175000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Naked sport bike with R15 DNA and street-focused ergonomics.",
    specifications: {
      engine: "155cc Single Cylinder",
      power: "18.14 HP",
      torque: "14.1 Nm",
      topSpeed: "130 km/h",
      weight: "142 kg",
      fuelTank: "10L"
    },
    features: ["Variable Valve Actuation", "Assist & Slipper Clutch", "LED Lighting", "Digital Console"],
    inStock: true,
    rating: 4.4,
    reviews: 678
  },
  {
    id: "36",
    name: "R15 V4",
    brand: "Yamaha",
    price: 185000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Track-inspired sport bike with MotoGP-derived styling and technology.",
    specifications: {
      engine: "155cc Single Cylinder",
      power: "18.37 HP",
      torque: "14.2 Nm",
      topSpeed: "136 km/h",
      weight: "142 kg",
      fuelTank: "11L"
    },
    features: ["Variable Valve Actuation", "Assist & Slipper Clutch", "Traction Control", "Quick Shifter"],
    inStock: true,
    rating: 4.5,
    reviews: 534
  },
  {
    id: "37",
    name: "Apache RTR 200 4V",
    brand: "TVS",
    price: 145000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Performance-oriented motorcycle with racing-inspired design and technology.",
    specifications: {
      engine: "197.75cc Single Cylinder",
      power: "20.5 HP",
      torque: "18.1 Nm",
      topSpeed: "128 km/h",
      weight: "153 kg",
      fuelTank: "12L"
    },
    features: ["Race Tuned Fuel Injection", "Dual Channel ABS", "Riding Modes", "GTT"],
    inStock: true,
    rating: 4.3,
    reviews: 456
  },
  {
    id: "38",
    name: "Dominar 400",
    brand: "Bajaj",
    price: 225000,
    originalPrice: 235000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Tourer",
    description: "Adventure tourer with Pulsar DNA and long-distance capability.",
    specifications: {
      engine: "373.3cc Single Cylinder",
      power: "40 HP",
      torque: "35 Nm",
      topSpeed: "155 km/h",
      weight: "187 kg",
      fuelTank: "13L"
    },
    features: ["USD Fork", "Dual Channel ABS", "LED Lighting", "Digital Console"],
    inStock: true,
    rating: 4.4,
    reviews: 389
  },
  {
    id: "39",
    name: "Classic 350",
    brand: "Royal Enfield",
    price: 189000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Cruiser",
    description: "Retro motorcycle with timeless design and modern reliability.",
    specifications: {
      engine: "349cc Single Cylinder",
      power: "20.2 HP",
      torque: "27 Nm",
      topSpeed: "110 km/h",
      weight: "195 kg",
      fuelTank: "13L"
    },
    features: ["J-series Engine", "Dual Channel ABS", "Tripper Navigation", "LED DRL"],
    inStock: true,
    rating: 4.2,
    reviews: 789
  },
  {
    id: "40",
    name: "Interceptor 650",
    brand: "Royal Enfield",
    price: 299000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Cruiser",
    description: "Twin-cylinder cruiser with classic British styling and modern performance.",
    specifications: {
      engine: "648cc Parallel Twin",
      power: "47 HP",
      torque: "52 Nm",
      topSpeed: "160 km/h",
      weight: "202 kg",
      fuelTank: "13.7L"
    },
    features: ["Parallel Twin Engine", "Dual Channel ABS", "Slipper Clutch", "Retro Styling"],
    inStock: true,
    rating: 4.5,
    reviews: 567
  },
  {
    id: "41",
    name: "Himalayan",
    brand: "Royal Enfield",
    price: 215000,
    originalPrice: 225000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Adventure",
    description: "Purpose-built adventure motorcycle for Indian conditions.",
    specifications: {
      engine: "411cc Single Cylinder",
      power: "24.3 HP",
      torque: "32 Nm",
      topSpeed: "120 km/h",
      weight: "199 kg",
      fuelTank: "15L"
    },
    features: ["Long Travel Suspension", "ABS", "Tripper Navigation", "High Ground Clearance"],
    inStock: true,
    rating: 4.3,
    reviews: 445
  },
  {
    id: "42",
    name: "Meteor 350",
    brand: "Royal Enfield",
    price: 199000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Cruiser",
    description: "Easy-going cruiser with comfortable ergonomics and classic styling.",
    specifications: {
      engine: "349cc Single Cylinder",
      power: "20.2 HP",
      torque: "27 Nm",
      topSpeed: "115 km/h",
      weight: "191 kg",
      fuelTank: "15L"
    },
    features: ["J-series Engine", "Dual Channel ABS", "Tripper Navigation", "Bluetooth Connectivity"],
    inStock: true,
    rating: 4.4,
    reviews: 356
  },
  {
    id: "43",
    name: "Pulsar NS200",
    brand: "Bajaj",
    price: 139000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Naked",
    description: "Naked sport bike with perimeter frame and performance-oriented features.",
    specifications: {
      engine: "199.5cc Single Cylinder",
      power: "24.13 HP",
      torque: "18.74 Nm",
      topSpeed: "135 km/h",
      weight: "154 kg",
      fuelTank: "12L"
    },
    features: ["Perimeter Frame", "Nitrox Mono Shock", "ABS", "LED Tail Light"],
    inStock: true,
    rating: 4.2,
    reviews: 567
  },
  {
    id: "44",
    name: "RS200",
    brand: "Bajaj",
    price: 155000,
    originalPrice: 165000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Sport",
    description: "Fully-faired sport bike with liquid-cooled engine and aggressive styling.",
    specifications: {
      engine: "199.5cc Single Cylinder",
      power: "24.13 HP",
      torque: "18.74 Nm",
      topSpeed: "140 km/h",
      weight: "165 kg",
      fuelTank: "13L"
    },
    features: ["Liquid Cooling", "Perimeter Frame", "ABS", "Projector Headlight"],
    inStock: true,
    rating: 4.3,
    reviews: 445
  },
  {
    id: "45",
    name: "Avenger Street 160",
    brand: "Bajaj",
    price: 109000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Cruiser",
    description: "Entry-level cruiser with comfortable riding position and classic styling.",
    specifications: {
      engine: "160cc Single Cylinder",
      power: "15 HP",
      torque: "13.5 Nm",
      topSpeed: "110 km/h",
      weight: "146 kg",
      fuelTank: "14L"
    },
    features: ["Digital Console", "LED DRL", "Single Channel ABS", "Comfortable Ergonomics"],
    inStock: true,
    rating: 4.1,
    reviews: 678
  },
  {
    id: "46",
    name: "Jupiter 125",
    brand: "TVS",
    price: 89000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Family scooter with excellent fuel efficiency and practical features.",
    specifications: {
      engine: "124.8cc Single Cylinder",
      power: "8.15 HP",
      torque: "10.5 Nm",
      topSpeed: "85 km/h",
      weight: "108 kg",
      fuelTank: "6L"
    },
    features: ["LED Headlight", "External Fuel Filler", "Mobile Charger", "Digital Console"],
    inStock: true,
    rating: 4.3,
    reviews: 789
  },
  {
    id: "47",
    name: "Activa 6G",
    brand: "Honda",
    price: 75000,
    originalPrice: 80000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "India's most popular scooter with reliable engine and practical features.",
    specifications: {
      engine: "109.51cc Single Cylinder",
      power: "7.68 HP",
      torque: "8.9 Nm",
      topSpeed: "80 km/h",
      weight: "107 kg",
      fuelTank: "5.3L"
    },
    features: ["LED Headlight", "External Fuel Filler", "Mobile Charger", "Digital Console"],
    inStock: true,
    rating: 4.4,
    reviews: 1234
  },
  {
    id: "48",
    name: "Access 125",
    brand: "Suzuki",
    price: 82000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Premium scooter with superior performance and comfort features.",
    specifications: {
      engine: "124cc Single Cylinder",
      power: "8.7 HP",
      torque: "10 Nm",
      topSpeed: "85 km/h",
      weight: "104 kg",
      fuelTank: "5.6L"
    },
    features: ["LED Headlight", "Bluetooth Connectivity", "Digital Console", "USB Charger"],
    inStock: true,
    rating: 4.2,
    reviews: 567
  },
  {
    id: "49",
    name: "Fascino 125",
    brand: "Yamaha",
    price: 85000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Stylish scooter with premium features and elegant design.",
    specifications: {
      engine: "125cc Single Cylinder",
      power: "8.2 HP",
      torque: "10.3 Nm",
      topSpeed: "82 km/h",
      weight: "99 kg",
      fuelTank: "5.2L"
    },
    features: ["Blue Core Engine", "LED Lighting", "Smart Motor Generator", "Side Stand Alarm"],
    inStock: true,
    rating: 4.3,
    reviews: 445
  },
  {
    id: "50",
    name: "Ntorq 125 Race XP",
    brand: "TVS",
    price: 95000,
    originalPrice: 105000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Performance scooter with sporty styling and advanced features.",
    specifications: {
      engine: "124.79cc Single Cylinder",
      power: "9.25 HP",
      torque: "10.5 Nm",
      topSpeed: "95 km/h",
      weight: "118 kg",
      fuelTank: "5.8L"
    },
    features: ["SmartXonnect", "LED Lights", "Race Mode", "Lap Timer"],
    inStock: true,
    rating: 4.4,
    reviews: 356
  },
  {
    id: "51",
    name: "Aprilia SXR 160",
    brand: "Aprilia",
    price: 135000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Maxi-Scooter",
    description: "Premium maxi-scooter with sporty design and advanced features.",
    specifications: {
      engine: "160cc Single Cylinder",
      power: "10.9 HP",
      torque: "11.6 Nm",
      topSpeed: "100 km/h",
      weight: "122 kg",
      fuelTank: "6L"
    },
    features: ["LED DRL", "Digital Console", "ABS", "Large Storage"],
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: "52",
    name: "Burgman Street 125",
    brand: "Suzuki",
    price: 98000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Maxi-Scooter",
    description: "Urban maxi-scooter with premium styling and comfortable ride.",
    specifications: {
      engine: "124cc Single Cylinder",
      power: "8.7 HP",
      torque: "10 Nm",
      topSpeed: "90 km/h",
      weight: "108 kg",
      fuelTank: "5.6L"
    },
    features: ["LED Headlight", "Fully Digital Console", "ABS", "Maxi-Scooter Design"],
    inStock: true,
    rating: 4.3,
    reviews: 289
  },
  {
    id: "53",
    name: "Xoom 110",
    brand: "Honda",
    price: 70000,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Affordable scooter with modern styling and practical features.",
    specifications: {
      engine: "109.19cc Single Cylinder",
      power: "8 HP",
      torque: "9 Nm",
      topSpeed: "78 km/h",
      weight: "103 kg",
      fuelTank: "5.3L"
    },
    features: ["LED Headlight", "Digital Console", "Mobile Charger", "Large Under Seat Storage"],
    inStock: true,
    rating: 4.1,
    reviews: 456
  },
  {
    id: "54",
    name: "Rayada 125",
    brand: "TVS",
    price: 91000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Family-oriented scooter with comfortable ride and practical features.",
    specifications: {
      engine: "124.8cc Single Cylinder",
      power: "8.15 HP",
      torque: "10.5 Nm",
      topSpeed: "83 km/h",
      weight: "110 kg",
      fuelTank: "5.8L"
    },
    features: ["LED Headlight", "External Fuel Filler", "Digital Console", "Mobile Charger"],
    inStock: true,
    rating: 4.2,
    reviews: 378
  },
  {
    id: "55",
    name: "Dio 110",
    brand: "Honda",
    price: 68000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Stylish scooter with youthful design and efficient performance.",
    specifications: {
      engine: "109.51cc Single Cylinder",
      power: "7.68 HP",
      torque: "8.9 Nm",
      topSpeed: "80 km/h",
      weight: "103 kg",
      fuelTank: "5.3L"
    },
    features: ["LED Position Light", "Combi Brake System", "Mobile Charger", "Large Under Seat Storage"],
    inStock: true,
    rating: 4.0,
    reviews: 567
  },
  {
    id: "56",
    name: "Jupiter Classic",
    brand: "TVS",
    price: 74000,
    originalPrice: 79000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Classic-styled scooter with retro appeal and modern features.",
    specifications: {
      engine: "109.7cc Single Cylinder",
      power: "7.88 HP",
      torque: "8.8 Nm",
      topSpeed: "80 km/h",
      weight: "108 kg",
      fuelTank: "5L"
    },
    features: ["Retro Styling", "LED DRL", "External Fuel Filler", "Integrated Braking System"],
    inStock: true,
    rating: 4.1,
    reviews: 445
  },
  {
    id: "57",
    name: "Grazia 125",
    brand: "Honda",
    price: 87000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Premium scooter with sporty design and advanced features.",
    specifications: {
      engine: "124.9cc Single Cylinder",
      power: "8.52 HP",
      torque: "10.54 Nm",
      topSpeed: "85 km/h",
      weight: "107 kg",
      fuelTank: "5.3L"
    },
    features: ["LED Headlight", "Fully Digital Console", "Smart Key", "Remote Seat Opening"],
    inStock: true,
    rating: 4.3,
    reviews: 356
  },
  {
    id: "58",
    name: "Vespa VXL 150",
    brand: "Vespa",
    price: 145000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Premium Scooter",
    description: "Iconic Italian scooter with premium build quality and timeless design.",
    specifications: {
      engine: "149.5cc Single Cylinder",
      power: "11.2 HP",
      torque: "11.5 Nm",
      topSpeed: "95 km/h",
      weight: "114 kg",
      fuelTank: "7L"
    },
    features: ["All-Metal Body", "LED Headlight", "Digital Console", "Single Channel ABS"],
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: "59",
    name: "Aprilia SR 160",
    brand: "Aprilia",
    price: 125000,
    originalPrice: 135000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Sport Scooter",
    description: "Performance-oriented scooter with sporty design and advanced features.",
    specifications: {
      engine: "160cc Single Cylinder",
      power: "10.9 HP",
      torque: "11.6 Nm",
      topSpeed: "100 km/h",
      weight: "116 kg",
      fuelTank: "6L"
    },
    features: ["Maxi Scooter Design", "Digital Console", "ABS", "LED DRL"],
    inStock: true,
    rating: 4.4,
    reviews: 189
  },
  {
    id: "60",
    name: "Aprilia Storm 125",
    brand: "Aprilia",
    price: 95000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Scooter",
    description: "Sporty scooter with aggressive styling and performance features.",
    specifications: {
      engine: "124.45cc Single Cylinder",
      power: "9.52 HP",
      torque: "9.9 Nm",
      topSpeed: "88 km/h",
      weight: "115 kg",
      fuelTank: "7L"
    },
    features: ["Digital Console", "LED Lighting", "ABS", "Large Wheels"],
    inStock: true,
    rating: 4.2,
    reviews: 267
  },
  {
    id: "61",
    name: "Ather 450X",
    brand: "Ather",
    price: 155000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Electric",
    description: "Premium electric scooter with smart features and connected technology.",
    specifications: {
      engine: "Electric Motor",
      power: "6 kW",
      torque: "26 Nm",
      topSpeed: "90 km/h",
      weight: "108 kg",
      fuelTank: "2.9 kWh Battery"
    },
    features: ["Touchscreen Dashboard", "Over-the-air Updates", "Google Maps", "Auto Indicator Off"],
    inStock: true,
    rating: 4.5,
    reviews: 345
  },
  {
    id: "62",
    name: "Bajaj Chetak",
    brand: "Bajaj",
    price: 145000,
    originalPrice: 155000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Electric",
    description: "Electric revival of the iconic Chetak with modern technology.",
    specifications: {
      engine: "Electric Motor",
      power: "4.08 kW",
      torque: "16 Nm",
      topSpeed: "70 km/h",
      weight: "118 kg",
      fuelTank: "3 kWh Battery"
    },
    features: ["Feather Touch Switch Gear", "Reverse Mode", "Bluetooth Connectivity", "Digital Console"],
    inStock: true,
    rating: 4.3,
    reviews: 234
  },
  {
    id: "63",
    name: "TVS iQube Electric",
    brand: "TVS",
    price: 135000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    category: "Electric",
    description: "Smart electric scooter with connected features and efficient performance.",
    specifications: {
      engine: "Electric Motor",
      power: "4.4 kW",
      torque: "140 Nm",
      topSpeed: "78 km/h",
      weight: "118 kg",
      fuelTank: "4.56 kWh Battery"
    },
    features: ["SmartXonnect Technology", "TFT Display", "Navigate to Charge", "Smart Charger"],
    inStock: true,
    rating: 4.4,
    reviews: 289
  },
  {
    id: "64",
    name: "Ola S1 Pro",
    brand: "Ola Electric",
    price: 140000,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop",
    category: "Electric",
    description: "High-performance electric scooter with advanced technology and features.",
    specifications: {
      engine: "Electric Motor",
      power: "8.5 kW",
      torque: "58 Nm",
      topSpeed: "115 km/h",
      weight: "125 kg",
      fuelTank: "3.97 kWh Battery"
    },
    features: ["MoveOS", "Touchscreen", "Voice Commands", "Hill Hold"],
    inStock: true,
    rating: 4.2,
    reviews: 456
  },
  {
    id: "65",
    name: "Hero Vida V1 Pro",
    brand: "Hero",
    price: 125000,
    originalPrice: 135000,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800&h=600&fit=crop",
    category: "Electric",
    description: "Affordable electric scooter with practical features and reliable performance.",
    specifications: {
      engine: "Electric Motor",
      power: "6 kW",
      torque: "35 Nm",
      topSpeed: "80 km/h",
      weight: "125 kg",
      fuelTank: "3.44 kWh Battery"
    },
    features: ["Hero Connect App", "Digital Display", "Multiple Riding Modes", "Remote Lock/Unlock"],
    inStock: true,
    rating: 4.1,
    reviews: 345
  },
  {
    id: "66",
    name: "Simple One",
    brand: "Simple Energy",
    price: 150000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    category: "Electric",
    description: "Next-generation electric scooter with loop energy technology.",
    specifications: {
      engine: "Electric Motor",
      power: "8.5 kW",
      torque: "72 Nm",
      topSpeed: "105 km/h",
      weight: "110 kg",
      fuelTank: "4.8 kWh Battery"
    },
    features: ["Loop Energy Recovery", "7-inch Touchscreen", "Over-the-air Updates", "Voice Assistant"],
    inStock: true,
    rating: 4.3,
    reviews: 234
  },
  {
    id: "67",
    name: "Ampere Magnus EX",
    brand: "Ampere",
    price: 85000,
    image: "https://images.unsplash.com/photo-1517994112540-009c8e938257?w=800&h=600&fit=crop",
    category: "Electric",
    description: "Budget-friendly electric scooter with decent range and features.",
    specifications: {
      engine: "Electric Motor",
      power: "1.2 kW",
      torque: "42 Nm",
      topSpeed: "55 km/h",
      weight: "90 kg",
      fuelTank: "2.3 kWh Battery"
    },
    features: ["Digital Console", "LED Lights", "Mobile App Connectivity", "Anti-theft Alarm"],
    inStock: true,
    rating: 4.0,
    reviews: 456
  }
];

export const categories = [
  "All",
  "Sport",
  "Naked",
  "Cruiser", 
  "Adventure",
  "Tourer",
  "Commuter",
  "Scooter",
  "Maxi-Scooter",
  "Premium Scooter",
  "Sport Scooter",
  "Electric"
];

export const brands = [
  "All",
  "Kawasaki",
  "Honda", 
  "Yamaha",
  "Ducati",
  "Suzuki",
  "BMW",
  "KTM",
  "Triumph",
  "Harley-Davidson",
  "TVS",
  "Bajaj",
  "Royal Enfield",
  "Aprilia",
  "Vespa",
  "Ather",
  "Ola Electric",
  "Hero",
  "Simple Energy",
  "Ampere"
];
