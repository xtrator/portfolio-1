import { useState } from "react";
import NavItem from "./NavItem";

const navItemTexts = [
  "Text here",
  "Text here",
  "Text here",
  "Text here",
  "Text here",
];

export default function Navbar() {
  const [selectedId, setSelected] = useState(0);

  function handleClick(index) {
    setSelected(index);
  }

  return (
    <nav className="navbar">
      {navItemTexts.map((text, i) => {
        const isSelected = selectedId === i;
        return (
          <NavItem
            key={i}
            isSelected={isSelected}
            onClick={() => handleClick(i)}
          >
            {text}
          </NavItem>
        );
      })}
    </nav>
  );
}
