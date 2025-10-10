import { NavLink } from "react-router-dom";
import type { TSidebarItem, TUserPath } from "../types";

export const sidebarItemsGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    // Handle main item
    if (item.path && item.element && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    // Handle children safely
    if (item.children && item.name) {
      const childItems: TSidebarItem[] = item.children
        .filter((child) => !!child.name && !!child.path) // ensure no undefined
        .map((child) => ({
          key: child.name!, // non-null since we filtered above
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        }));

      acc.push({
        key: item.name,
        label: item.name,
        children: childItems,
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
