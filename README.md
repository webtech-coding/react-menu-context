# React context menu

![version](https://img.shields.io/badge/version-0.0.1-blue.svg)

A lightweight and customizable React component for implementing context menus. It supports dynamic menu generation, flexible styling options,
and both predefined and custom menu icons. This makes it ideal for applications requiring dynamic right-click menus with full control over behavior and appearance.

![Project Screenshot](/screenshot-context-menu.png)

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
      <button>Right clik action</button>
      <ContextMenu 
        menuItems={menuItems}
        className='custom-class-name'
        id={123}
      />
    <ContextProvider/>
    
  );
}

```

## props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| showActionBar | Boolean   | true | Determines whether to display the top action bar, which includes search, entry count, and pagination controls.
| headers       | Object[]  |      | Defines the columns displayed in the table header. Each column is mapped to row data using the `name` key.
| stripe        | Boolean   | true | Enable or disable striped styling for alternating table rows. 
| rows          | object[]  |      | Defines the dataset to be displayed in the table. Each object in the array represents a single row.
| theme         | Object    |      | Allows customization of the table's color scheme to match your design preferences.
| onRowClick    | function  |      | On row click, the data of the selected row is returned.
| className     | string    |      | A custom `className` for the table's container wrapper, enabling custom styling.


### Custom table color sheme
![Project Screenshot](src/assets/images/theme-green.png)

