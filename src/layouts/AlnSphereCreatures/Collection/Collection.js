import Checkbox from "components/Checkbox/Checkbox";
import { AlnSphereCreaturesContext_Provider } from "pages/AlnSphereCreatures/AlnSphereCreaturesContext";
import React, { useContext, useState } from "react";
import styles from "./Collection.module.css";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import crossIcon from "assets/images/cross-icon.png";
import Tabs from "components/Tabs/Tabs";
import { NavLink, Outlet } from "react-router-dom";
import DataContext from "context/DataContext";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Collection() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isFilterBarOpen,
    setIsFilterBarOpen,
  } = useContext(AlnSphereCreaturesContext_Provider);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabIndexValue, setActiveTabIndexValue] = useState("Creatures");

  const {
    ETHRate,
    cardLayout,
    setCardLayout,
    searchInput,
    setSearchInput,
    checkboxes,
    setCheckboxes,
  } = useContext(DataContext);

  let menuRef = OutsideClickDetector(() => {
    setIsFilterBarOpen(false);
  });

  return (
    <>
      <div className="market-place-nav">
        <div className="nav-center-wrap">
          <div
            className="nav-center-dropdown-btn fs-14px white weight-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {activeTabIndexValue}
            <BiChevronDown />
          </div>
          <div className={`nav-center-dropdown ${isOpen ? "open" : ""} `}>
            <NavLink
              to=""
              className={({ isActive }) =>
                `nav-tab pointer fs-14px white weight-5 ${
                  isActive ? "nav-tab-active" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setActiveTabIndexValue("Creatures");
              }}
            >
              Creatures
            </NavLink>
            <NavLink
              to="lands"
              className={({ isActive }) =>
                `nav-tab pointer fs-14px white weight-5 ${
                  isActive ? "nav-tab-active" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setActiveTabIndexValue("Lands");
              }}
            >
              Lands
            </NavLink>

            <NavLink
              to="items"
              className={({ isActive }) =>
                `nav-tab pointer fs-14px white weight-5 ${
                  isActive ? "nav-tab-active" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setActiveTabIndexValue("Items");
              }}
            >
              Items
            </NavLink>
            <NavLink
              to="enchants"
              className={({ isActive }) =>
                `nav-tab pointer fs-14px white weight-5 ${
                  isActive ? "nav-tab-active" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setActiveTabIndexValue("Enchant");
              }}
            >
              Enchant
            </NavLink>
            <NavLink
              to="mounts"
              className={({ isActive }) =>
                `nav-tab pointer fs-14px white weight-5 ${
                  isActive ? "nav-tab-active" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setActiveTabIndexValue("Mounts");
              }}
            >
              Mounts
            </NavLink>
            <NavLink
              to="mysteryboxes"
              className={({ isActive }) =>
                `nav-tab pointer fs-14px white weight-5 ${
                  isActive ? "nav-tab-active" : ""
                }`
              }
              onClick={() => {
                setIsOpen(false);
                setActiveTabIndexValue("Mystery Box");
              }}
            >
              Mystery Box
            </NavLink>
          </div>
        </div>
      </div>

      <div className="dashboard-center-marketplace">
        <img
          src={
            "https://ik.imagekit.io/6pl7k4a01ha/filter_YCnS7Usoy.png?updatedAt=1639329322918"
          }
          onClick={() => setIsFilterBarOpen(!isFilterBarOpen)}
          className={styles.filter}
          alt=""
        />
        <div className="MARKETPLACE_CONTENT">
          <Outlet />
        </div>

        <div
          className={`dashboard-right ${isFilterBarOpen ? "open" : ""}`}
          ref={menuRef}
        >
          <div>
            <img
              src={crossIcon}
              onClick={() => setIsFilterBarOpen(false)}
              className="cross-icon"
              alt=""
            />
            <div className="filter-title mb-20px">
              <p className="fs-20px weight-5 white">Filter (20)</p>
              <button
                onClick={() =>
                  setCheckboxes({
                    alns: false,
                    legendary: false,
                    rare: false,
                    epic: false,
                    common: false,
                    unCommon: false,
                  })
                }
                className="pointer pink fs-14px weight-5"
              >
                Clear Filter
              </button>
            </div>

            <div className="stats-btns mb-20px">
              <button className="fs-14px white pointer weight-5 active">
                General
              </button>
              <button className="fs-14px white pointer weight-5">Stats</button>
            </div>

            <p className="fs-12px weight-5 light-white-2 mb-10px">SEARCH</p>

            <div className="filter-input mb-30px">
              <input
                type="text"
                className="white"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />
              <BiSearch className="pink" />
            </div>

            <div className="mb-30px">
              <p className="fs-12px weight-5 light-white-2 mb-15px">RACE</p>
              <Checkbox
                onChange={(e) =>
                  setCheckboxes({
                    ...checkboxes,
                    [e.target.name.toLowerCase()]: e.target.checked,
                  })
                }
                checked={checkboxes.alns}
                title="Alns"
              />
            </div>

            <p className="fs-12px weight-5 light-white-2 mb-15px">RARITY</p>
            <div className="filter-checkboxes">
              <Checkbox
                onChange={(e) =>
                  setCheckboxes({
                    ...checkboxes,
                    [e.target.name.toLowerCase()]: e.target.checked,
                  })
                }
                checked={checkboxes.legendary}
                title="Legendary"
              />
              <Checkbox
                onChange={(e) =>
                  setCheckboxes({
                    ...checkboxes,
                    [e.target.name.toLowerCase()]: e.target.checked,
                  })
                }
                checked={checkboxes.epic}
                title="Epic"
              />
              <Checkbox
                onChange={(e) =>
                  setCheckboxes({
                    ...checkboxes,
                    [e.target.name.toLowerCase()]: e.target.checked,
                  })
                }
                checked={checkboxes.rare}
                title="Rare"
              />
              <Checkbox
                onChange={(e) =>
                  setCheckboxes({
                    ...checkboxes,
                    [e.target.name.toLowerCase()]: e.target.checked,
                  })
                }
                checked={checkboxes.common}
                title="Common"
              />
              <Checkbox
                onChange={(e) =>
                  setCheckboxes({
                    ...checkboxes,
                    unCommon: e.target.checked,
                  })
                }
                checked={checkboxes.unCommon}
                title="Uncommon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
