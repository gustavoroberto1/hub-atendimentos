"use client";

// import { useNotification, useScroll } from '@/context';
import { useScroll } from "@/context/scroll";
import { Divider, IconButton, List, Tooltip } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { MENU_NAVIGATION_ITEMS } from "./helpers";
import { MenuItem } from "./MenuItem";
import styles from "./styles.module.css";

export function MenuNavigation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scroll, openMenu, setOpenMenu } = useScroll();

  function handleDrawer() {
    setOpenMenu(!openMenu);
  }

  const marginTop = 64 - scroll > 0 ? 64 - scroll : 0;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.backgroundMenu} ${
          openMenu ? styles.open : styles.closed
        }`}
      />

      <div
        className={`${styles.drawerWrapper} ${
          openMenu ? styles.open : styles.closed
        }`}
        style={{ marginTop: `${marginTop}px` }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            <Tooltip title={!openMenu ? "Expandir Menu" : "Minimizar Menu"}>
              {!openMenu ? (
                <MdChevronRight color="#ffffff" />
              ) : (
                <MdChevronLeft color="#ffffff" />
              )}
            </Tooltip>
          </IconButton>
        </div>

        <Divider className={styles.dividerMenu} />

        <List>
          {MENU_NAVIGATION_ITEMS.map((item, index) => (
            <MenuItem
              key={index}
              open={openMenu}
              title={item.title}
              icon={item.icon}
              path={item.path}
              amount={10}
            />
          ))}
        </List>
      </div>
      <div
        className={`${styles.childrenBody} ${
          openMenu ? styles.open : styles.closed
        }`}
      >
        {children}
      </div>
    </div>
  );
}
