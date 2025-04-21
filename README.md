# React context menu

![version](https://img.shields.io/badge/version-0.0.1-blue.svg)

A lightweight and customizable React component for implementing context menus. It supports dynamic menu generation, flexible styling options,
and both predefined and custom menu icons. This makes it ideal for applications requiring dynamic right-click menus with full control over behavior and appearance.

![Project Screenshot](./Screenshot-context-menu.png)

## Key build-in features

- ✅ Dynamic Menu items 
- ✅ Predefined icons
- ✅ Custom icons
- ✅ Multiple context menu implementation.


## 📦 Installation

```bash
npm react-menu-context
```
## 🚀 Usage

```js
import {ContextProvider, ContextMenu}  from "react-menu-context";


const menuItems=[
  {
    label:'Cut',  
    onClick:()=>{console.log('delete')},
    iconType:'scissor',
  },
  {
    label:'Copy task',
    onClick:()=>{console.log('delete')},
    iconType:'copy',
  },
  {
    label:'Edit content',
    onClick:()=>{console.log('delete')},
    iconType:'edit',
  },
  {
    label:'Insert new task',
    onClick:()=>{console.log('delete')},
    iconType:'add',
    disabled:true
  },
  {
    label:'View full screen',
    onClick:()=>{console.log('delete')},
    iconType:'expand',
  },
  {
    label:'Subscribe newsletter',
    onClick:()=>{console.log('delete')},
    iconType:'bell',
  },
  {
    label:'Move to trash',
    onClick:()=>{console.log('delete')},
    iconType:'delete',
    disabled:true
  },
  {
    label:'Close',
    onClick:()=>{console.log('delete')},
    iconType:'cancel',
  },
]

function App() {
  return (
    <ContextProvider id={123} className='custom-styling-name'>
      <button>Right clik context action</button>
      <ContextMenu 
        menuItems={menuItems}
        className='custom-class-name'
        id={123}
      />
    <ContextProvider/>
    
  );
}

```

## ContextProvider
A React component that wraps and manages the display logic of the context menu.

### props

| Name | Type | Default | Description |
| ---  | ---  | ------  | -------     |
| id   | string, number |             | The identfier that binds to ContextMenu.                       |
| disabled | boolean    |   false     | A boolean flag indicating whether the context menu is visible. |
| className| string     |             | A custom `className` for enabling custom styling for the wrapper `div` of the context. |

## ContextMenu
A React component that displays a list of contextual menu options in response to right click.

### props
| Name | Type | Default | Description |
| ---  | ---  | ------  | -------     |
| id   | string, number |             | The identfier that binds ContextMenu with ContextProvider.     |
| className | string    |             | A custom `className` for enabling custom styling for the wrapper `div` of the context. |
| menuItems | Array     |             | Array of menu items in the context menu. |

### menuItem properties
- **label** : The label or text for the context menu
- **icon**: A custom component for icon.
```js
  const MenuIcon=()=>{
    return(
      <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M11 9v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0z"></path>
      </svg>
    )
  }
  {
    ...
    icon:<MenuIcon/>
    ...
  }
```


### Custom table color sheme
![Project Screenshot](src/assets/images/theme-green.png)

