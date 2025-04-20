import { ReactElement, useEffect, type FC, MouseEvent} from "react";
import PropTypes from "prop-types";

import { Provider } from "./types";
import { publish, PUBLISH_CONTEXT_EVENT, CANCEL_CONTEXT_EVENT } from "./contextEvents";

const ContextProvider:FC<Provider> =({id, className, disabled, children}):ReactElement=>{

    useEffect(()=>{
        if(!id)return
        //when window event occurs other than context
        const triggerEvents = ['click', 'scroll', 'resize'];
        triggerEvents.forEach(event=>{
            window.addEventListener(event, closeContextMenu)
        })
       
       return ()=>{
            triggerEvents.forEach(event=>{
                window.removeEventListener(event, closeContextMenu)
            })
       }
       
    },[id])
        
    const closeContextMenu =()=>{
        const eventName = `${CANCEL_CONTEXT_EVENT}-${id}`;
        publish(eventName)
    }

    const onContextMenuTrigger=(e:MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        e.stopPropagation();

        if(disabled)return
        const eventName = `${PUBLISH_CONTEXT_EVENT}-${id}`;
        const position={
            x:e.clientX,
            y:e.clientY
        }
        publish(eventName,{position, id})
    }

    return (
        <div
            className={`context-menu-provider ${className}`}
            onContextMenu={onContextMenuTrigger}
        >
            {children}
        </div>
    )
}  

ContextProvider.prototype ={
    id:PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    disabled:PropTypes.bool,
    children:PropTypes.element
}

export default ContextProvider