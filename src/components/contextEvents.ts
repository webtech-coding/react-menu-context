type eventDetails ={
    id:string|number,
    showContext:()=>void
    removeContextMenu:()=>void
}

type MenuPosition ={
    x:number,
    y:number
}

type Payload ={
    position:MenuPosition,
    id: string | number
}

type EventSubscription = (eventName:string, callback:EventListenerOrEventListenerObject) =>void;
type EventPublish = (eventName:string, payload?:Payload) =>void;

const allContextEvents:eventDetails[] = []
let activeContext:eventDetails | null= null

//register events
export const registerContextProvider=(eventDetail:eventDetails)=>{
    if(!eventDetail.id)return
    if(allContextEvents.find(event=>event.id !== eventDetail.id)){
        allContextEvents.push(eventDetail)

        return new CustomEvent(`context-register-${eventDetail.id}`, {
            detail:{...eventDetail}
        })
    }
}

export const showContextMenu=(id:string|number)=>{
    const context = allContextEvents.find(event=>event.id === id)
    if(!context)return 

    activeContext = context
    activeContext.showContext()
}

export const PUBLISH_CONTEXT_EVENT= 'context-event'
export const CANCEL_CONTEXT_EVENT = 'cancel-context-event'

export const subscribe: EventSubscription=(eventName:string, callback)=>{
    window.addEventListener(eventName, callback)
}

export const unsubscribe: EventSubscription =(eventName:string, callback)=>{
    window.removeEventListener(eventName, callback)
}

export const publish:EventPublish=(eventName:string, payload)=>{
    const contextEvent = new CustomEvent(eventName, {...payload && {detail:{id:payload.id, position:payload.position}}})
    window.dispatchEvent(contextEvent)
}