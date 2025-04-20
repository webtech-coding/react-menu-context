import { ReactNode, ReactElement, FC } from 'react';

type ContextMenuItem = {
    label: string;
    icon?: ReactElement;
    disabled?: boolean;
    onClick?: () => void;
    iconType?: string;
};
type Provider = {
    id: string | number;
    disabled?: boolean;
    className?: string;
    children: ReactNode;
};

declare const ContextProvider: FC<Provider>;

type ContextMenupProps = {
    menuItems: ContextMenuItem[];
    id: string | number;
    className?: string;
};
declare const ContextMenu: FC<ContextMenupProps>;

export { ContextMenu, ContextProvider };
