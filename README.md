# React context menu

![version](https://img.shields.io/badge/version-0.0.1-blue.svg)

A lightweight and customizable React component for implementing context menus. It supports dynamic menu generation, flexible styling options,
and both predefined and custom menu icons.

This makes it ideal for applications requiring dynamic right-click menus with full control over behavior and appearance.

![Project Screenshot](./Screenshot-context-menu.png)

## Key build-in features

- ✅ Dynamic Menu items 
- ✅ Predefined icons
- ✅ Custom icons
- ✅ Multiple context menu implementation.


## 📦 Installation

```bash
npm install react-menu-context
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
    label:'Move to trash',
    onClick:()=>{console.log('delete')},
    iconType:'delete',
    disabled:true
  }
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
| className | string    |             | A custom `className` for enabling custom styling for the wrapper `div` of the context menu. |
| menuItems | Array     |             | Array of menu items object in the context menu. |

### menuItem properties
| Name | Type | Default | Description |
| ---  | ---  | ------  | -------     |
| label| string |       |             | The label or text for the context menu.               |
| icon | component |    |             | A custom component for icon.                          |
| iconType| string|     |             | built-in icon types identified by name.               |
| onClick | Array  |    |             | function call when the specific menu item is clicked. |



## Icons

```js
  const MenuIcon=()=>{
    return(
      <svg>
          <path> ... </path>
      </svg>
    )
  }
```
```js
  const menuItem={
    label:'Custom menu',
    icon:<MenuIcon />,
    onClick:{()=>console.log()}
  }
```


### Custom table color sheme
![Project Screenshot](src/assets/images/theme-green.png)

