"use client";

import {
  Badge,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@mui/material";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import styles from "./styles.module.css";

type MenuItemProps = {
  open: boolean;
  title: string;
  path: string;
  amount?: number;
  icon: IconType;
};

export function MenuItem({
  open,
  title,
  path,
  amount,
  icon: Icon,
}: MenuItemProps) {
  const router = useRouter();

  function handleRedirect(path: string) {
    router.push(path);
  }

  return (
    <ListItem
      key={title}
      disablePadding
      onClick={() => handleRedirect(path)}
      className={styles.item}
    >
      <ListItemButton
        className={`${styles.itemButton} ${open ? styles.open : styles.closed}`}
      >
        <Tooltip title={title} disableInteractive={!open}>
          <ListItemIcon
            className={styles.itemIcon}
            sx={{ mr: open ? 1.6 : "auto" }}
          >
            <Icon color="#ffffff" size={24} />
            <Badge
              badgeContent={amount}
              max={9}
              className={styles.customBadge}
            />
          </ListItemIcon>
        </Tooltip>
        <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
