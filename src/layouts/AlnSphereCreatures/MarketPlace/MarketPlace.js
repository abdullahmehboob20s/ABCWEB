import React, { useContext, useState } from "react";
import "./MarketPlace.css";
import {
  BsFillGrid1X2Fill,
  BsShop,
  BsStack,
  // BsFillGridFill,
} from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { BiChevronDown, BiSearch } from "react-icons/bi";

import Checkbox from "components/Checkbox/Checkbox";

import crossIcon from "assets/images/cross-icon.png";
import TabPan from "components/Tabs/TabPan";
import Tab from "components/Tabs/Tab";

import questionMark from "assets/images/question-mark.png";
import Tabs from "components/Tabs/Tabs";
import { AlnSphereCreaturesContext_Provider } from "pages/AlnSphereCreatures/AlnSphereCreaturesContext";

import Cards from "./Cards";

import Dashboard from "layouts/Marketplace/Dashboard/Dashboard";
import Gallery from "layouts/Marketplace/Gallery/Gallery";

const SidebarTab = ({ Icon, title, active, onClick }) => {
  return (
    <Tab
      tabIndex={title}
      className={`sidebar-tab fs-16px weight-5 light-white pointer`}
      activeClassName="active"
      onPress={onClick}
    >
      {Icon} {title}
    </Tab>
  );
};

function MarketPlace() {
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

  const [ETHRate, setETHRate] = useState(3797);

  // console.log(checkboxes);

  const {
    isSidebarOpen,
    setIsSidebarOpen,
    isFilterBarOpen,
    setIsFilterBarOpen,
  } = useContext(AlnSphereCreaturesContext_Provider);
  const menuRef = React.useRef();

  // React.useEffect(() => {
  //   fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setETHRate(result.data.rates.USD);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         console.log(error);
  //       }
  //     );

  //   const handler = (e) => {
  //     if (!menuRef.current?.contains(e.target)) {
  //       setIsFilterBarOpen(false);
  //       setIsSidebarOpen(false);
  //       // setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, []);

  return (
    <div className="dashboard bg-purple-2">
      <div
        ref={menuRef}
        className={`dashboard-left ${isSidebarOpen ? "open" : ""}`}
      >
        <div>
          <img
            src={crossIcon}
            onClick={() => setIsSidebarOpen(false)}
            className="cross-icon"
            alt=""
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<BsFillGrid1X2Fill />}
            title="Dashboard"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<BsShop />}
            title="Marketplace"
            active={true}
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<FaBoxes />}
            title="Inventory"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<BsStack />}
            title="Staking "
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<MdFavorite />}
            title="Favorite"
          />
          <SidebarTab
            onClick={() => setIsSidebarOpen(false)}
            Icon={<RiGalleryFill />}
            title="Gallery"
          />
        </div>
      </div>

      {/*  */}

      <div className="dashboard-center bg-purple">
        <TabPan tabIndex="Marketplace">
          <Tabs defaultTab={1}>
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
                  <Tab
                    className="nav-tab pointer fs-14px white weight-5"
                    activeClassName="nav-tab-active"
                    tabIndex={1}
                    onPress={() => {
                      setIsOpen(false);
                      setActiveTabIndexValue("Creatures");
                    }}
                  >
                    Creatures
                  </Tab>
                  <Tab
                    className="nav-tab pointer fs-14px white weight-5"
                    activeClassName="nav-tab-active"
                    tabIndex={2}
                    onPress={() => {
                      setIsOpen(false);
                      setActiveTabIndexValue("Lands");
                    }}
                  >
                    Lands
                  </Tab>

                  <Tab
                    className="nav-tab pointer fs-14px white weight-5"
                    activeClassName="nav-tab-active"
                    tabIndex={4}
                    onPress={() => {
                      setIsOpen(false);
                      setActiveTabIndexValue("Items");
                    }}
                  >
                    Items
                  </Tab>
                  <Tab
                    className="nav-tab pointer fs-14px white weight-5"
                    activeClassName="nav-tab-active"
                    tabIndex={5}
                    onPress={() => {
                      setIsOpen(false);
                      setActiveTabIndexValue("Enchant");
                    }}
                  >
                    Enchant
                  </Tab>
                  <Tab
                    className="nav-tab pointer fs-14px white weight-5"
                    activeClassName="nav-tab-active"
                    tabIndex={6}
                    onPress={() => {
                      setIsOpen(false);
                      setActiveTabIndexValue("Mounts");
                    }}
                  >
                    Mounts
                  </Tab>
                  <Tab
                    className="nav-tab pointer fs-14px white weight-5"
                    activeClassName="nav-tab-active"
                    tabIndex={7}
                    onPress={() => {
                      setIsOpen(false);
                      setActiveTabIndexValue("Mystery Box");
                    }}
                  >
                    Mystery Box
                  </Tab>
                </div>
              </div>
            </div>

            <div className="dashboard-center-marketplace">
              <div className="MARKETPLACE_CONTENT">
                <TabPan tabIndex={1}>
                  <Cards
                    type="alns"
                    ETHRate={ETHRate}
                    cardLayout={cardLayout}
                    setCardLayout={setCardLayout}
                    checkboxes={checkboxes}
                    searchInput={searchInput}
                  />
                </TabPan>

                <TabPan tabIndex={2}>
                  <Cards
                    type="lands"
                    ETHRate={ETHRate}
                    cardLayout={cardLayout}
                    setCardLayout={setCardLayout}
                    checkboxes={checkboxes}
                    searchInput={searchInput}
                  />
                </TabPan>

                <TabPan tabIndex={4}>
                  <Cards
                    type="items"
                    ETHRate={ETHRate}
                    cardLayout={cardLayout}
                    setCardLayout={setCardLayout}
                    checkboxes={checkboxes}
                    searchInput={searchInput}
                  />
                </TabPan>

                <TabPan tabIndex={5}>
                  <Cards
                    type="enchants"
                    ETHRate={ETHRate}
                    cardLayout={cardLayout}
                    setCardLayout={setCardLayout}
                    checkboxes={checkboxes}
                    searchInput={searchInput}
                  />
                </TabPan>

                <TabPan tabIndex={6}>
                  <Cards
                    type="mounts"
                    ETHRate={ETHRate}
                    cardLayout={cardLayout}
                    setCardLayout={setCardLayout}
                    checkboxes={checkboxes}
                    searchInput={searchInput}
                  />
                </TabPan>

                <TabPan tabIndex={7}>
                  <Cards
                    type="mysteryboxes"
                    ETHRate={ETHRate}
                    cardLayout={cardLayout}
                    setCardLayout={setCardLayout}
                    checkboxes={checkboxes}
                    searchInput={searchInput}
                  />
                </TabPan>
              </div>

              <div
                ref={menuRef}
                className={`dashboard-right ${isFilterBarOpen ? "open" : ""}`}
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
                    <button className="fs-14px white pointer weight-5">
                      Stats
                    </button>
                  </div>

                  <p className="fs-12px weight-5 light-white-2 mb-10px">
                    SEARCH
                  </p>

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
                    <p className="fs-12px weight-5 light-white-2 mb-15px">
                      RACE
                    </p>
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

                  <p className="fs-12px weight-5 light-white-2 mb-15px">
                    RARITY
                  </p>
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

            {/* <TabPan tabIndex={3}>
              <div className="marketplace-dashboard-body">
                <div className="dashboard-center-head">
                  <div className="dashboard-center-head-left">
                    <p className="fs-28px white weight-6">478 Items</p>

                    <Dropdown
                      dropdownItems={[
                        { title: "All" },
                        { title: "For Sale" },
                        { title: "Not For Sale" },
                      ]}
                      defaultValueIndex={0}
                      title="For Sale"
                    />
                  </div>
                  <div className="dashboard-center-head-right">
                    <Dropdown
                      dropdownItems={[
                        { title: "Lowest ID" },
                        { title: "Highest ID" },
                        { title: "Lowest Price" },
                        { title: "Highest Price" },
                        { title: "Lates" },
                      ]}
                      defaultValueIndex={0}
                      title="Lowest Price"
                    />

                    <div className="layout-toggler">
                      <button
                        onClick={() => setCardLayout("Columns")}
                        className={`pointer ${
                          cardLayout === "Columns" ? "active" : ""
                        }`}
                      >
                        <BsFillGridFill />
                      </button>
                      <button
                        onClick={() => setCardLayout("Rows")}
                        className={`pointer ${
                          cardLayout === "Rows" ? "active" : ""
                        }`}
                      >
                        <GoListUnordered />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`dashboard-center-cards ${cardLayout}`}>
                  {mysteryboxes.map(mysterybox => {
                    return(
                      <CreatureCard
                        img={mysterybox.img}
                        price = {Math.round(((parseFloat(mysterybox.price) * ETHRate) + Number.EPSILON) * 100) / 100}
                        idBg={mysterybox.idBg}
                        layout={cardLayout}
                        type = "Mystery Box "
                      />
                    )
                  })}
                  
                </div>
              </div>
            </TabPan> */}
          </Tabs>
        </TabPan>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {/* FOR SIDEBAR LINKS */}
        <TabPan tabIndex="Dashboard">
          <div className="MARKETPLACE_CONTENT">
            <Dashboard />
          </div>
        </TabPan>

        <TabPan tabIndex="Inventory">
          <div className="centered-comming-soon">
            <img className="question-mark invert" src={questionMark} alt="" />
          </div>
        </TabPan>
        <TabPan tabIndex="Staking ">
          <div className="centered-comming-soon">
            <img className="question-mark invert" src={questionMark} alt="" />
          </div>
        </TabPan>
        <TabPan tabIndex="Favorite">
          <div className="centered-comming-soon">
            <img className="question-mark invert" src={questionMark} alt="" />
          </div>
        </TabPan>
        <TabPan tabIndex="Gallery">
          <Gallery />
        </TabPan>
      </div>

      {/*  */}
    </div>
  );
}

export default MarketPlace;
