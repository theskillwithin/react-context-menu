# react-context-menu

A lightweight right-click context menu implemented in React.

![example right-click menu](react-context-menu.png?raw=true "example right-click menu")

To use:

Import the component into your project:

```javascript
import ContextMenu from './ContextMenu';
```

Pass a ```contextID```, and an array of menu items with icons, labels, and functions through props -- like so:

```jsx
<ContextMenu contextID={'clickable-area'} items={[{'icon': wheel, 'label': 'Configure', 'function': this.configHandler}, {'icon': trash, 'label': 'Delete', 'function': this.deleteHandler}]} />
```

Where ```wheel``` and ```trash``` are image files imported into the parent component like so:

```javascript
import wheel from './wheel.svg';
import trash from './trash.svg';
```

The ```contextID``` is the area in which you'd like right-click functionality. Add a unique ```id``` to your right-clickable element, and react-context-menu will be available anywhere within that element.

Your functions will reside in your parent component. By default, when you right click an element, the ```event.target``` is stored in state and is passed to the menu item functions. This can be useful for DOM manipulation -- for instance, removing an element from the DOM via a "delete" function passed to ```ContextMenu```'s props.
