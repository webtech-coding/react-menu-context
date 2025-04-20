import { type FC } from "react";
import { type ContextMenuItem } from './types';
type ContextMenupProps = {
    menuItems: ContextMenuItem[];
    id: string | number;
    className?: string;
};
declare const ContextMenu: FC<ContextMenupProps>;
export default ContextMenu;
