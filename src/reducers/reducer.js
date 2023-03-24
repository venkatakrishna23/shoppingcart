import Banana from "../Images/Banana.png";
import Mango from "../Images/Mango.jpg";
import Apple from "../Images/Apple.jpg";
import brinjal from "../Images/brinjal.jpg";
import coconutOil from "../Images/coconutOil.jpg";
import drumstick from "../Images/drumstick.png";
import FormalShirt from "../Images/FormalShirt.jpg";
import mazza from "../Images/mazza.jpg";
import oranges from "../Images/oranges.jpg";
import ponds from "../Images/ponds.jpg";
import potatoes from "../Images/potatoes.jpg";
import rosewater from "../Images/rosewater.jpg";
import sunscreen from "../Images/suncreen.jpg";
import Teeshirt from "../Images/Teeshirt.jpg";
import Thumpsup from "../Images/Thumpsup.png";
import tie from "../Images/tie.jpg";
import Tomato from "../Images/Tomato.jpg";

const products = [
  {
    id: 1,
    name: "Mango",
    Price: 30,
    quantityAvailable: 12,
    category: "Fruits",
    image: Mango,
    quantity: 0,
  },
  {
    id: 2,
    name: "Apple",
    Price: 50,
    quantityAvailable: 20,
    category: "Fruits",
    image: Apple,
    quantity: 0,
  },
  {
    id: 3,
    name: "Banana",
    Price: 10,
    quantityAvailable: 100,
    category: "Fruits",
    image: Banana,
    quantity: 0,
  },
  {
    id: 4,
    name: "Orange",
    Price: 25,
    quantityAvailable: 25,
    category: "Fruits",
    image: oranges,
    quantity: 0,
  },
  {
    id: 5,
    name: "Pond's Powder",
    Price: 130,
    quantityAvailable: 12,
    category: "Cosmetics",
    image: ponds,
    quantity: 0,
  },
  {
    id: 6,
    name: "VLCC Sun Screen",
    Price: 200,
    quantityAvailable: 12,
    category: "Cosmetics",
    image: sunscreen,
    quantity: 0,
  },
  {
    id: 7,
    name: "Coconut oil",
    Price: 80,
    quantityAvailable: 12,
    category: "Cosmetics",
    image: coconutOil,
    quantity: 0,
  },
  {
    id: 8,
    name: "Rose Water",
    Price: 40,
    quantityAvailable: 12,
    category: "Cosmetics",
    image: rosewater,
    quantity: 0,
  },
  {
    id: 9,
    name: "Tomatoes",
    Price: 30,
    quantityAvailable: 12,
    category: "Vegetables",
    image: Tomato,
    quantity: 0,
  },
  {
    id: 10,
    name: "Brinjal",
    Price: 30,
    quantityAvailable: 12,
    category: "Vegetables",
    image: brinjal,
    quantity: 0,
  },
  {
    id: 11,
    name: "Drum Stick",
    Price: 10,
    quantityAvailable: 12,
    category: "Vegetables",
    image: drumstick,
    quantity: 0,
  },
  {
    id: 12,
    name: "Potatoes",
    Price: 30,
    quantityAvailable: 12,
    category: "Vegetables",
    image: potatoes,
    quantity: 0,
  },
  {
    id: 13,
    name: "T-shirt",
    Price: 500,
    quantityAvailable: 12,
    category: "Clothing",
    image: Teeshirt,
    quantity: 0,
  },
  {
    id: 14,
    name: "Formal Shirt",
    Price: 30,
    quantityAvailable: 12,
    category: "Clothing",
    image: FormalShirt,
    quantity: 0,
  },
  {
    id: 15,
    name: "Tie",
    Price: 100,
    quantityAvailable: 12,
    category: "Clothing",
    image: tie,
    quantity: 0,
  },
  {
    id: 16,
    name: "Thumbs Up",
    Price: 80,
    quantityAvailable: 12,
    category: "Bevarages",
    image: Thumpsup,
    quantity: 0,
  },
  {
    id: 17,
    name: "Mazza",
    Price: 110,
    quantityAvailable: 12,
    category: "Bevarages",
    image: mazza,
    quantity: 0,
  },
];
const initialState = {
  productList: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        productList: products,
      };

    default:
      return state;
  }
};

export default appReducer;
