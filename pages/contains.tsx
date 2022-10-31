import React, { useEffect, useRef, useState } from "react";
import MyDropDown from "./components/MyDropdown";

export default function ContainsPage() {
  return (
    <main>
      <MyDropDown />
    </main>
  );
}

const Dropdown = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const toggle = (e: React.MouseEvent) => {
      console.log(e.target.contains(ref.current));
    };
    document.addEventListener("mousedown", toggle);
  }, []);

  return (
    <button onClick={(e) => setActive(!active)}>
      TOOGLE
      <div ref={ref}>
        <button>HELLOO</button>
      </div>
    </button>
  );
};
