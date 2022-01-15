import React, { useState } from "react";
import DataContext from "./DataContext";

function DataContextProvider(props) {
  const [ETHRate, setETHRate] = useState(3797);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabIndexValue, setActiveTabIndexValue] = useState("Creatures");
  const [cardLayout, setCardLayout] = useState("Columns");
  const [searchInput, setSearchInput] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    alns: false,
    legendary: false,
    rare: false,
    epic: false,
    common: false,
    unCommon: false,
  });

  return (
    <DataContext.Provider
      value={{
        ETHRate,
        setETHRate,
        isOpen,
        setIsOpen,
        activeTabIndexValue,
        setActiveTabIndexValue,
        cardLayout,
        setCardLayout,
        searchInput,
        setSearchInput,
        checkboxes,
        setCheckboxes,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
