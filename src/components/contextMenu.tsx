import { ReactElement, useEffect, useRef, useState, type FC } from "react";
import {createPortal} from 'react-dom';
import PropTypes from "prop-types";

import ContextMenuItems from "./contextMenuItems";
import { subscribe, unsubscribe, PUBLISH_CONTEXT_EVENT, CANCEL_CONTEXT_EVENT, publish } from "./contextEvents";

import { type ContextMenuItem, type ContextMenuPosition, type ContextEvent } from './types';

type ContextMenupProps= {
    menuItems:ContextMenuItem[],
    id: string| number,
    className?:string
}

const ContextMenu:FC<ContextMenupProps>=({menuItems, id, className}):ReactElement=>{
    const [mouseClickPosition, setMouseClickPosition] = useState<ContextMenuPosition | null>(null);    
    const contextRef = useRef<HTMLDivElement | null>(null)
       
    useEffect(()=>{
        if(!id)return
        const publishEventName = `${PUBLISH_CONTEXT_EVENT}-${id}`;
        const cancelEventName = `${CANCEL_CONTEXT_EVENT}-${id}`;
        //subscrbe to the contextmenu event - right click,
        //if event received, handle the x and y postion of the click and display the context menu
        subscribe(publishEventName, handleContextMenu)
        subscribe(cancelEventName, hideContextMenu)

        return ()=>{
            //remove all subscription when component exits
            unsubscribe(publishEventName, handleContextMenu)
            unsubscribe(cancelEventName, hideContextMenu)
            }
        /* eslint-disable react-hooks/exhaustive-deps */
    },[id])
   
    useEffect(()=>{
        if(!contextRef?.current)return

        const contextMenuView = contextRef.current;
        
        //if no mouseclick or have invalid mouseclick data, keep the contextmenu hidden
        if(!mouseClickPosition || !('x' in mouseClickPosition || 'y' in mouseClickPosition)){
            contextMenuView.style.visibility = 'hidden';
            
        }else{
            displayContextMenu()
        }
    },[mouseClickPosition, contextRef])

    /**
     * function to display context menu
     * @returns void
     */
    const displayContextMenu=():void=>{
        const contextMenuView = contextRef.current;
        if(!contextMenuView || !mouseClickPosition)return

        const {x, y} = mouseClickPosition;
        const {offsetHeight, offsetWidth} = contextMenuView;
        const {innerHeight, innerWidth} = window;

        const positionX =  offsetWidth + x > innerWidth ? innerWidth - offsetWidth : x;
        const positionY = offsetHeight + y > innerHeight ? innerHeight - offsetHeight : y;
        
        contextMenuView.style.left = `${positionX+2}px`;
        contextMenuView.style.top =  `${positionY}px`;
        contextMenuView.style.visibility ='visible';
    }

    /**
     * a function that removes the context menu
     */
    const hideContextMenu=():void=>{
        setMouseClickPosition(null)
    }
    
    /**
     * @param e 
     * @returns void
     */
    const handleContextMenu= (e):void=>{
        const contextMenuData = e.detail; 

        const allContextMenus = document.querySelectorAll<HTMLElement>('.context-menu');
        allContextMenus.forEach((menu)=>{
            if(menu.id !==id){
                menu.style.visibility = 'hidden'
            }
        })
       
        if(contextMenuData.id !== id)return
        setMouseClickPosition({
            x:contextMenuData.position.x,
            y:contextMenuData.position.y
        })
    }

    /**
     * When user right-click on the context menu itself, we need to cancel this event and hide the context menu
     * @param e Mouse event
     */
    const handleContextClick:ContextEvent =(e)=>{
        e.preventDefault();
        e.stopPropagation();

        const cancelEventName = `${CANCEL_CONTEXT_EVENT}-${id}`;
        publish(cancelEventName)

    }

    return createPortal(
        <div ref={contextRef} className={`context-menu ${className}`} onContextMenu={handleContextClick}>
            <ContextMenuItems
                menuItems={menuItems}
            />
        </div>,
        document.body
    )
}

ContextMenu.prototype={
    id:PropTypes.number.isRequired,
    menuItems:PropTypes.arrayOf(PropTypes.shape({
        label:PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
        icon:PropTypes.elementType,
        iconType:PropTypes.string,
        onClick:PropTypes.func
    })),
    className:PropTypes.string
}

export default ContextMenu;