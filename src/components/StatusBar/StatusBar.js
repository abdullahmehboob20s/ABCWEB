import React from "react";
import styles from "./StatusBar.module.css";
import ethereumIcon from "assets/images/ethereum-2.png";
import Tab from "components/Tabs/Tab";
import Tabs from "components/Tabs/Tabs";
import TabPan from "components/Tabs/TabPan";

const Card = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <img src={ethereumIcon} className="invert" alt="" />
      <div>
        <p className="uppercase light-white fs-12px weight-5 mb-5px">{title}</p>
        <TabPan tabIndex="24h">
          <p className={`${styles.cardValue} uppercase white fs-22px weight-7`}>
            {value.twentyFour}
          </p>
        </TabPan>
        <TabPan tabIndex="7days">
          <p className={`${styles.cardValue} uppercase white fs-22px weight-7`}>
            {value.seven}
          </p>
        </TabPan>
        <TabPan tabIndex="30days">
          <p className={`${styles.cardValue} uppercase white fs-22px weight-7`}>
            {value.thirty}
          </p>
        </TabPan>
      </div>
    </div>
  );
};

function StatusBar() {
  return (
    <Tabs defaultTab="24h">
      <div className={styles.statusBar}>
        <div className={styles.statusbarHeader}>
          <Tab
            tabIndex={"24h"}
            className={`${styles.statusbarHeaderBtn} fs-16px white weight-6 pointer`}
            activeClassName={styles.active}
          >
            Last 24h
          </Tab>
          <Tab
            tabIndex={"7days"}
            className={`${styles.statusbarHeaderBtn} fs-16px white weight-6 pointer`}
            activeClassName={styles.active}
          >
            7 days
          </Tab>
          <Tab
            tabIndex={"30days"}
            className={`${styles.statusbarHeaderBtn} fs-16px white weight-6 pointer`}
            activeClassName={styles.active}
          >
            30 days
          </Tab>
        </div>
        <div className={`${styles.statusBarBody}`}>
          <Card
            value={{ twentyFour: 0, seven: 10, thirty: 66 }}
            title="TOTAL SALE"
          />
          <Card
            value={{
              twentyFour: (
                <>
                  Ξ 1,410.8&nbsp;<p className="light-white fs-18px">$4.64M</p>
                </>
              ),
              seven: (
                <>
                  Ξ 1,430.8&nbsp;<p className="light-white fs-18px">$4.64M</p>
                </>
              ),
              thirty: (
                <>
                  Ξ 1,467.8&nbsp;<p className="light-white fs-18px">$4.64M</p>
                </>
              ),
            }}
            title="TOTAL VOLUME"
          />
          <Card
            value={{ twentyFour: "36,724", seven: "36,678", thirty: "37,432" }}
            title="AXIE SOLD"
          />
        </div>
      </div>
    </Tabs>
  );
}

export default StatusBar;
