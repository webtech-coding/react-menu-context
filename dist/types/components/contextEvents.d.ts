type eventDetails = {
    id: string | number;
    showContext: () => void;
    removeContextMenu: () => void;
};
type MenuPosition = {
    x: number;
    y: number;
};
type Payload = {
    position: MenuPosition;
    id: string | number;
};
type EventSubscription = (eventName: string, callback: EventListenerOrEventListenerObject) => void;
type EventPublish = (eventName: string, payload?: Payload) => void;
export declare const registerContextProvider: (eventDetail: eventDetails) => CustomEvent<{
    id: string | number;
    showContext: () => void;
    removeContextMenu: () => void;
}> | undefined;
export declare const showContextMenu: (id: string | number) => void;
export declare const PUBLISH_CONTEXT_EVENT = "context-event";
export declare const CANCEL_CONTEXT_EVENT = "cancel-context-event";
export declare const subscribe: EventSubscription;
export declare const unsubscribe: EventSubscription;
export declare const publish: EventPublish;
export {};
