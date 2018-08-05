# React-Mobx-Flow-Template

## Structure
```
src
│
└───components
│   │
│   └─── Button
│        │
│        └───index.js 
└───core
│   │
│   └─── stores
│   │    │
│   │    └───ExampleStore.js
│   │    │
│   │    └───index.js
│   │
│   └─── App.js
│   │
│   └─── routes.js
│
└───pages
│   │
│   └───page1
│   │   │
│   │   └───index.js 
│   │
│   └───page1
│       │
│       └───index.js 
└───index
```

| Dependencies  | Version |
| --------------| -------  |
| react & react-dom |   ^16.4.2    |
| react-router-dom |        ^4.3.1             
| mobx  |  ^5.0.3 |
| mobx-react | ^5.2.3 |
| recompose | ^0.27.1 |
| custom-react-scripts | ^0.2.2 | 

```
I using custom-react-script instead react-scipts cause I want use decorators without eject create-react-app
```


## Restore to create-react-app official configuration

```shell

$ yarn remove custom-react-scripts
$ yarn add react

```