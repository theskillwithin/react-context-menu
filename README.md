# react-contextmenu
A quick React right-click context menu.

![example right-click menu](https://raw.githubusercontent.com/amurp/react-contextmenu/0888fb7ebeb8e517e82bc265a5de500ae73e1e77/react-contextmenu.png "example right-click menu")


I needed a right-click menu for a web-based WYSIWYG application and couldn't find anything lightweight enough out there, so I'm starting this. Simply import the component into your project and pass the function, function title, and optional icon through props, like so:

```<ContextMenu contextID={'emailHTML'} functions={[{ 'icon':'#icon__trash', 'title': 'Delete', 'function': this.deleteHandler }]} />```

The ```contextID``` is the area in which you'd like right-click functionality.

Written in ES6. Compile with babel if needed. If there is any interest I can quickly make a pre-ES6 version.
