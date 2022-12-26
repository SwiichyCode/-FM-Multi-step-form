import IconArcade from "../../../assets/images/icon-arcade.svg";
import IconAdvanced from "../../../assets/images/icon-advanced.svg";
import IconPro from "../../../assets/images/icon-pro.svg";

export const initialStateCard = [
  {
    id: 1,
    img: IconArcade,
    title: "Arcade",
    price: 9,
    selected: false,
  },
  { id: 2, img: IconAdvanced, title: "Advanced", price: 12, selected: false },
  { id: 3, img: IconPro, title: "Pro", price: 15, selected: false },
];
