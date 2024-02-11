import React, { useState } from "react";
import tracktor from '../images/Kubota M7 151 Tractor_ Price, Specs, Review & Features.jpeg'
const Product = ({ name, description, imageUrl, priceRange }) => (
  <div className="border p-4 mb-4 flex flex-col items-center">
    <img src={imageUrl} alt={name} className="w-32 h-32 object-cover mb-2" />
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-500 font-bold">{priceRange}</p>
    </div>
  </div>
);

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [categoryOption, setCategoryOption] = useState("all");

  const equipmentProducts = [
    {
      name: "Tractor",
      priceRange: "20,000 - 200,000+",
      description:
        "Versatile workhorse for various tasks. Performs plowing, planting, cultivating, harvesting, and hauling. Available in different sizes and engine power for diverse farm needs.",
      imageUrl: "https://i.pinimg.com/564x/77/1a/43/771a437b3836d45e07fae5648136321c.jpg",
      category: "equipment",
    },
    {
      name: "Combine Harvester",
      priceRange: "100,000 - 500,000+",
      description:
        "Efficient grain crop harvester. Cuts, threshes, and separates grain from straw in one pass. Size and capacity vary depending on farm size and crop type.",
      imageUrl: "https://i.pinimg.com/564x/6e/be/2a/6ebe2a819c99a0cff7b330d7ca14ea77.jpg",
      category: "equipment",
    },
    {
      name: "Seeder",
      priceRange: "5,000 - 50,000+",
      description:
        "Precise seed planter for efficient crop growth. Ensures even crop growth and optimizes yield through accurate depth and spacing control. Different types cater to various seeds and planting methods.",
      imageUrl: "https://i.pinimg.com/736x/b9/39/ae/b939aefa9c5e2dd64d24602f616d721c.jpg",
      category: "equipment",
    },
    {
      name: "Sprayer",
      priceRange: "1,000 - 50,000+",
      description:
        "Applies pesticides, herbicides, and fertilizers accurately. Available in handheld, tractor-mounted, or aerial options for diverse farm sizes and application needs.",
      imageUrl: "https://i.pinimg.com/736x/f6/6e/1b/f66e1bd1558beeaee970b082d47764fa.jpg",
      category: "equipment",
    },
    {
      name: "Irrigation System",
      priceRange: "5,000 - 100,000+",
      description:
        "Efficient water delivery system for crops. Conserves water and improves crop yield through various systems like sprinklers, drip irrigation, and center pivots.",
      imageUrl: "https://i.pinimg.com/564x/ef/23/a5/ef23a51c79246afd2e84f79d5a70b420.jpg",
      category: "equipment",
    },
    {
      name: "Greenhouse",
      priceRange: "5,000 - 50,000+",
      description:
        "Controlled environment for year-round crop production. Protects crops from weather extremes and pests, enabling consistent agricultural production. Various sizes and types available.",
      imageUrl: "https://i.pinimg.com/564x/31/51/f4/3151f47732ec89d0171cf99419e7e937.jpg",
      category: "equipment",
    },
    {
      name: "Baler",
      priceRange: "5,000 - 20,000+",
      description:
        "Compresses straw, hay, or silage into bales. Facilitates easier storage and transportation of harvested materials. Baling capacity and type vary depending on farm needs and crop type.",
      imageUrl: "https://i.pinimg.com/564x/71/c6/2d/71c62dec3dd492fe38a5ec83cf823ebf.jpg",
      category: "equipment",
    },
    {
      name: "Milking Machine",
      priceRange: "5,000 - 20,000+",
      description:
        "Efficient and hygienic milk extraction from cows. Improves milk quality and production compared to hand milking. Various milking machine types cater to different herd sizes and needs.",
      imageUrl: "https://i.pinimg.com/736x/a5/04/56/a50456b323282d6b0fc4006842b30d6b.jpg",
      category: "equipment",
    },
    {
      name: "Drone",
      priceRange: "Price varies",
      description:
        "Multipurpose aerial tool for crop monitoring, spraying, and data collection. Provides aerial insights and automates tasks, improving efficiency and precision. Capabilities and price vary depending on model and purpose.",
      imageUrl: "https://i.pinimg.com/564x/e6/58/e4/e658e488ac5711e4cffc3412ac18ff45.jpg",
      category: "equipment",
    },
  ];

  const fertilizerProducts = [
    {
      name: "Urea (CO(NH2)2)",
      price: "0.50 - 0.75",
      description:
        "White, crystalline solid. Highly concentrated nitrogen source (46%), readily available for plant uptake. Can be applied as granules or dissolved in water.",
      imageUrl: "https://example.com/urea-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Monoammonium Phosphate (MAP - NH4H2PO4)",
      price: "0.75 - 1.00",
      description:
        "White, crystalline solid. Provides readily available phosphorus (21%) and some nitrogen (12%). Ideal for early growth and root development.",
      imageUrl: "https://example.com/map-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Diammonium Phosphate (DAP - (NH4)2HPO4)",
      price: "0.65 - 0.85",
      description:
        "White, crystalline solid. Offers a slightly slower release of phosphorus (18%) compared to MAP, with equal parts nitrogen (18%). Beneficial for established plants and flowering.",
      imageUrl: "https://example.com/dap-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Potassium Chloride (Muriate of Potash - KCl)",
      price: "0.40 - 0.55",
      description:
        "White, crystalline solid. Essential source of potassium (60%) for plant health, disease resistance, and fruit quality. Highly soluble and readily available.",
      imageUrl: "https://example.com/potassium-chloride-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Ammonium Sulfate ((NH4)2SO4)",
      price: "0.60 - 0.80",
      description:
        "White, crystalline solid. Provides readily available nitrogen (21%) and sulfur (24%). Particularly beneficial for sulfur-deficient soils and cruciferous plants.",
      imageUrl: "https://example.com/ammonium-sulfate-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Blood Meal",
      price: "2.00 - 3.00",
      description:
        "Dried, ground animal blood. Organic nitrogen source (12-14%), slowly released over time. Encourages beneficial soil microbes and improves water retention.",
      imageUrl: "https://example.com/blood-meal-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Bone Meal",
      price: "2.50 - 3.50",
      description:
        "Ground-up animal bones. Slow-release organic phosphorus (10-20%) and calcium (20-30%). Enhances soil fertility and promotes root development.",
      imageUrl: "https://example.com/bone-meal-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Fish Emulsion",
      price: "4.00 - 5.00",
      description:
        "Liquid extract from fish scraps. Organic source of nitrogen (5-10%), phosphorus (1-2%), and micronutrients. Encourages plant growth and deters pests.",
      imageUrl: "https://example.com/fish-emulsion-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Compost",
      price: "Varies (0.50 - 2.00/kg, often homemade)",
      description:
        "Decomposed organic matter. Rich source of nutrients, improves soil structure and water retention. Promotes beneficial soil microbes and plant growth.",
      imageUrl: "https://example.com/compost-fertilizer.jpg",
      category: "fertilizer",
    },
    {
      name: "Seaweed Extract",
      price: "Price varies",
      description:
        "Liquid extract from seaweed. Organic source of micronutrients, growth hormones, and beneficial microbes. Enhances plant health and promotes stress resistance.",
      imageUrl: "https://example.com/seaweed-extract-fertilizer.jpg",
      category: "fertilizer",
    },
  ];

  const accessoryProducts = [
    {
      name: "Garden Trowel",
      price: "5 - 20",
      description:
        "Handheld tool for digging, scooping, and transplanting. Available in various materials and sizes for different soil types and tasks.",
      imageUrl: "https://example.com/garden-trowel-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Gardening Fork",
      price: "10 - 30",
      description:
        "Multipurpose tool for loosening soil, aerating, and lifting plants. Can also be used for weeding and compost turning.",
      imageUrl: "https://example.com/gardening-fork-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Hand Pruners",
      price: "15 - 50",
      description:
        "Small shears for precise cutting of stems and branches. Available in bypass and anvil styles for different cutting needs.",
      imageUrl: "https://example.com/hand-pruners-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Gardening Gloves",
      price: "5 - 20",
      description:
        "Protects hands from dirt, thorns, and blisters. Made from various materials for comfort and durability.",
      imageUrl: "https://example.com/gardening-gloves-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Watering Can",
      price: "10 - 50",
      description:
        "Portable container for watering plants. Comes in various sizes and materials for different watering needs.",
      imageUrl: "https://example.com/watering-can-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Seed Starting Kit",
      price: "10 - 40",
      description:
        "Tray and dome for starting seeds indoors. Provides controlled environment for seed germination and seedling growth.",
      imageUrl: "https://example.com/seed-starting-kit-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Plant Labels",
      price: "5 - 15 (pack)",
      description:
        "Markers for identifying plants. Can be made from plastic, wood, or other materials.",
      imageUrl: "https://example.com/plant-labels-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Kneeling Pad",
      price: "10 - 30",
      description:
        "Provides comfort and support while kneeling. Protects knees from hard surfaces and helps prevent fatigue.",
      imageUrl: "https://example.com/kneeling-pad-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Plant Mister",
      price: "5 - 20",
      description:
        "Fine sprayer for delicate plants or seedlings. Provides gentle watering and increases humidity.",
      imageUrl: "https://example.com/plant-mister-accessory.jpg",
      category: "accessory",
    },
    {
      name: "Plant Potting Mix",
      price: "5 - 15 (bag)",
      description:
        "Specially formulated soil for container planting. Provides adequate drainage, aeration, and nutrients for healthy plant growth.",
      imageUrl: "https://example.com/plant-potting-mix-accessory.jpg",
      category: "accessory",
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleCategoryChange = (option) => {
    setCategoryOption(option);
  };

  const filterProductsByCategory = (category, products) => {
    if (category === "all") {
      return products;
    }
    return products.filter((product) => product.category === category);
  };

  const sortProducts = (products, option) => {
    if (option === "default") {
      return products;
    }

    // Add sorting logic based on the selected option
    return products;
  };

  const filteredEquipmentProducts = filterProductsByCategory(
    categoryOption,
    equipmentProducts
  );
  const filteredFertilizerProducts = filterProductsByCategory(
    categoryOption,
    fertilizerProducts
  );
  const filteredAccessoryProducts = filterProductsByCategory(
    categoryOption,
    accessoryProducts
  );

  const sortedEquipmentProducts = sortProducts(
    filteredEquipmentProducts,
    sortOption
  );
  const sortedFertilizerProducts = sortProducts(
    filteredFertilizerProducts,
    sortOption
  );
  const sortedAccessoryProducts = sortProducts(
    filteredAccessoryProducts,
    sortOption
  );

  const renderProductCards = (products) => {
    return products.map((product, index) => (
      <div
        key={product.name}
        className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => setSelectedProduct(product)}
      >
        <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-32 object-cover mb-2"
        />
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-500 font-bold">{product.price}</p>
      </div>
    ));
  };

  return (
    <div className="mt-8 container mx-auto mb-8">
      <h2 className="text-3xl font-bold mb-4">Products</h2>

      <div className="flex justify-between mb-4">
        {/* Sort Options */}
        <div className="flex items-center">
          <label className="mr-2">Sort By:</label>
          <select
            onChange={(e) => handleSortChange(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="default">Default</option>
            {/* Add more sort options if needed */}
          </select>
        </div>

        {/* Category Options */}
        <div className="flex items-center">
          <label className="mr-2">Category:</label>
          <select
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="all">All</option>
            <option value="equipment">Equipment</option>
            <option value="fertilizer">Fertilizer</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>
      </div>

      {/* Equipment Products */}
      <h3 className="text-xl font-semibold mb-2">Equipment</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderProductCards(sortedEquipmentProducts)}
      </div>

      {/* Fertilizer Products */}
      <h3 className="text-xl font-semibold mb-2 mt-6">Fertilizer</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderProductCards(sortedFertilizerProducts)}
      </div>

      {/* Accessory Products */}
      <h3 className="text-xl font-semibold mb-2 mt-6">Accessory</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderProductCards(sortedAccessoryProducts)}
      </div>

      {/* Overlay Popup for Detailed Product Description */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-2xl rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedProduct.name}
            </h2>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-green-500 font-bold">{selectedProduct.price}</p>
            <button
              className="bg-green-500 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-600 transition duration-300"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
