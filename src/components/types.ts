import { ReactNode, MouseEvent, ReactElement } from "react"

export type ContextMenuPosition={
    x:number,
    y:number
}

export type ContextEvent =(e:MouseEvent<HTMLDivElement>)=>void

export type ContextMenuItem={
    label:string,
    icon?:ReactElement,
    disabled?:boolean,
    onClick?:()=>void,
    iconType?:string
}

export type ContextMenuState={
    xPosition:number,
    yPosition:number,
    visibility:boolean,
    zIndex:number
}

export type Provider={
    id:string | number,
    disabled?:boolean,
    className?:string,
    children:ReactNode
}
