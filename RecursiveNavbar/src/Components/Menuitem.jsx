import React, { useState } from "react";
import MenuList from "./MenuList";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function Menuitem({ item }) {
  const [displayChild, setDisplayChild] = useState(false);

  const hasChildren = item && item.children && item.children.length > 0;

  function handleToggleChildren() {
    setDisplayChild(!displayChild);
  }

  return (
    <li>
      <div className="flex flex-row items-center">
        <h2>{item.label}</h2>
        {hasChildren && (
          <button
            onClick={handleToggleChildren}
            aria-expanded={displayChild}
            className="ml-2"
          >
            {displayChild ? <GoChevronUp/> : <GoChevronDown />}
          </button>
        )}
      </div>

      {hasChildren && displayChild && <MenuList list={item.children} />}
    </li>
  );
}
