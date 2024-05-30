import { useSelector } from "react-redux";
import { MENU_ITEMS, MenuItemTypes } from "../constants/menu";


const getMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
const role = useSelector((state:any)=>state.Auth.user?.role)


if (role==="Super Admin") {
  return MENU_ITEMS;
}
return MENU_ITEMS?.filter((item)=>item.key!=="wholesale")

}

const findAllParent = (
  menuItems: MenuItemTypes[],
  menuItem: MenuItemTypes
): string[] => {
  let parents: string[] = [];
  const parent = findMenuItem(menuItems, menuItem.parentKey);

  if (parent) {
    parents.push(parent.key);
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)];
    }
  }
  return parents;
}

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes['key'] | undefined
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
}

export { getMenuItems, findAllParent, findMenuItem, };