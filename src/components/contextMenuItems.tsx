import { FC, ReactElement, useMemo } from "react";
import { ContextMenuItem } from "./types";
import { 
    Delete,
    Save,
    Search,
    Edit,
    Copy,
    Expand,
    Filter,
    Bell,
    Info,
    Add,
    BellOff,
    Cancel,
    CloudDownload,
    Cog,
    Dots,
    Folder,
    Forward,
    Image,
    Lock,
    LockOpen,
    Loop,
    Play,
    Power,
    Send,
    Settings,
    Sort,
    Wrench,
    Equalizer,
    Enter,
    Scissor,
    Exit, 
    Home, 
    Warning
} from "./icons"; 


type MenuItemsProps={
    menuItems:ContextMenuItem[]
}
const ContextMenuItems:FC<MenuItemsProps> =({menuItems}):ReactElement=>{

    const MenuIcons = useMemo(()=>({
        delete:<Delete />,
        save:<Save />,
        search:<Search />,
        edit:<Edit />,
        copy:<Copy />,
        expand:<Expand />,
        info:<Info />,
        filter:<Filter />,
        bell:<Bell />,
        add:<Add />,
        bellOff:<BellOff />,
        cancel:<Cancel />,
        cloudDownload:<CloudDownload/>,
        cog:<Cog/>,
        dots:<Dots />,
        folder:<Folder/>,
        forward:<Forward/>,
        home:<Home />,
        image:<Image />,
        lock:<Lock />,
        lockOpen:<LockOpen />,
        loop:<Loop />,
        play:<Play />,
        power:<Power />,
        send:<Send />,
        settings:<Settings />,
        sort:<Sort />,
        warning:<Warning />,
        wrench:<Wrench />,
        equalizer:<Equalizer />,
        enter:<Enter />,
        scissor:<Scissor />,
        exit:<Exit />
    }),[])

    const allMenuItemsView = useMemo(()=>{
        if(!menuItems.length || !Array.isArray(menuItems))return []

        return menuItems.map((item, index)=>{
            let Icon;

            // if the prop has icon, display the icon
            if(item.icon && !item.iconType){
                Icon = item.icon
            }

            // if iconType is provided, display the icon from the icons folder
            // this will overwrite the icon, if provided
            if(item.iconType && item.iconType as keyof typeof MenuIcons in MenuIcons){
                Icon = MenuIcons[item.iconType as keyof typeof MenuIcons];
            }

            return(
                <div className={`context-menu-item ${item.disabled ? 'context-menu-item--disabled':''}`} key={`${item.label}-${index}`} onClick={item.onClick}>
                   {Icon && Icon} 
                    <span>
                        {item.label}
                    </span>
                   
                </div>
            )
        })
        /* eslint-disable react-hooks/exhaustive-deps */
    },[menuItems])

    return(
        <div className="context-menu-items">
            {allMenuItemsView}
        </div>
    )
}

export default ContextMenuItems;