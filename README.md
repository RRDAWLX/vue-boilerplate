# vue-boilerplate

## 结构
### 顶层结构
```
vue-boilerplate
├── ca  // https 证书
├── config  // webpack配置等项目配置
├── mock-files  // api mock 文件，与 src/api 保持同样的划分方式
├── services    // dev-server 等服务
└── src     // 项目代码
```
### src 文件夹内部结构
#### 一个仓库只包含一个项目
```
src     // 项目代码
├── app.js    // 项目入口
├── App.vue   // 项目唯一的应用级组件
├── index.html  // 应用的 html 模板
├── api   // 模块化的 api，可以根据 api url 划分，也可根据页面划分
|   ├── common.js
|   └── a.js
├── assets  // 全局公用资源：图片、文档、音频……
|   └── common.png
├── components // 全局公用组件
|   └── CommonComp.vue
├── router  // 路由
|   └── index.js
├── store   // 数据仓库
|   ├── index.js
|   └── modules   // 全局公用数据模块，根据功能划分
|       └── user  // 用户相关模块
├── utils   // 全局公用工具模块
|   └── util.js
└── views   // 视图（页面）
    └── view-name  // 一个文件夹代表一个视图
        ├── Main.vue  // 该视图的主组件
        ├── PrivateSubComp.vue    // 视图私有子组件
        ├── PrivateCommonComp.vue   // 视图私有公用组件，如果有必要，可提升为全局公用组件
        ├── private-util.js   // 视图私有工具，如果有必要，可提升为全局公用工具
        ├── assets  // 视图私有资源，如果有必要，可提升为全局公用资源
        ├── store   // 视图数据模块
        └── common  // 如果视图私有的工具和公共组件很多，可以增加一个 common 文件夹来管理

```
#### 一个仓库只包含多个项目
##### 方案一
```
src     // 项目代码
├── app.js    // 项目入口
├── App.vue   // 项目唯一的应用级组件
├── index.html  // 应用的 html 模板
|
├── api   // 模块化的 api，根据项目划分
|   ├── global-common-api.js   // 如果有，可以提取全局公用的 api
|   └── project-name   // 项目内再划分，可以根据 api url 划分，也可根据页面划分
|       ├── project-common.js
|       └── a.js
├── assets  // 全局和项目公用资源：图片、文档、音频……
|   ├── common  // 全局公用资源
|   |   └── global-common-asset.png
|   └── project-name   // 项目内公用资源
|       └── project-common-asset.png
├── components // 全局和项目公用组件
|   ├── common  // 全局公用组件
|   |   └── GlobalCommonComp.vue
|   └── project-name   // 项目内公用组件
|       └── ProjectCommonComp.vue
├── router  // 路由
|   └── routes    // 模块化路由配置，根据项目划分
|       └── project-name.js
├── store   // 数据仓库
|   ├── common   // 全局公用数据模块，根据功能划分
|   |   └── global-common-moudle  
|   └── project-name  // 项目内公用数据模块，根据功能划分
|       └── index.js    // 在这里引用 views/project-name 中的各视图中的 store
├── utils   // 全局公用工具模块
|   ├── common  //  全局公用工具
|   |   └── global-common-utils.js
|   └── project-name  // 项目内公用工具
|       └── project-common-utils.js
|
└── views   // 视图（页面），根据项目划分
    └── project-name
        └── view-name  // 一个文件夹代表一个视图
            ├── Main.vue  // 该视图的主组件
            ├── PrivateSubComp.vue    // 视图私有子组件
            ├── PrivateCommonComp.vue   // 视图私有公用组件，如果有必要，可提升为全局或项目公用组件
            ├── private-util.js   // 视图私有工具，如果有必要，可提升为全局或项目公用工具
            ├── assets  // 视图私有资源，如果有必要，可提升为全局或项目公用资源
            ├── store   // 视图数据模块
            └── common  // 如果视图私有的工具和公共组件很多，可以增加一个 common 文件夹来管理
```
##### 方案二
```
src     // 项目代码
├── app.js    // 项目入口
├── App.vue   // 项目唯一的应用级组件
├── index.html  // 应用的 html 模板
|
├── api   // 如果有，可提取全局公用 api，可根据 api url 划分
|   └── global-common-api.js
├── assets  // 全局公用资源：图片、文档、音频……
|   └── global-common-asset.png
├── components // 全局公用组件
|   └── GlobalCommonComp.vue
├── router  // 路由
|   └── index.js  // 在这里引用各项目路由
├── store   // 数据仓库
|   ├── index.js  // 在这里引用各项目数据模块
|   └── modules   // 全局公用数据模块，根据功能划分
|       └── global-common-moudle.js
├── utils   // 全局公用工具模块
|   └── global-common-utils.js
|
└── project-name   // 各自项目代码
    ├── api   // 项目内 api，可根据 api url 划分，也可根据页面划分
    |   └── project-api.js
    ├── assets  // 项目内公用资源：图片、文档、音频……
    |   └── project-common-asset.png
    ├── components // 项目公用组件，如有必要，可提升为全局公用组件
    |   └── ProjectCommonComp.vue
    ├── route.js    // 项目路由配置
    ├── store   // 项目数据模块
    |   ├── index.js  // 在这里引用各视图数据模块
    |   └── modules   // 项目内公用数据模块，根据功能划分
    |       └── project-common-module.js
    ├── utils   // 项目内公用工具模块，如有必要，可提升为全局公用工具
    |   └── project-common-utils.js
    └── views   // 视图（页面），根据项目划分
        └── view-name  // 一个文件夹代表一个视图
            ├── Main.vue  // 该视图的主组件
            ├── PrivateSubComp.vue    // 视图私有子组件
            ├── PrivateCommonComp.vue   // 视图私有公用组件，如果有必要，可提升为全局或项目公用组件
            ├── private-util.js   // 视图私有工具，如果有必要，可提升为全局或项目公用工具
            ├── assets  // 视图私有资源，如果有必要，可提升为全局公或项目用资源
            ├── store   // 视图数据模块
            └── common  // 如果视图私有的工具和公共组件很多，可以增加一个 common 文件夹来管理
```

## 规范约定

### 1、命名约定
- 文件及文件夹命名统一使用中划线： **kebab-case.js**、**kebab-case-folder**
- 变量命名统一使用驼峰式： **camelCase**
- 组件名统一使用帕斯卡式： **PascalCase.vue**
- 组件的 name 属性：**component-name**
- \<template\>中的组件标签名使用中划线：**\<component-name\>**
- 组件文件夹下的主组件统一命名为 **Main.vue**

### 2、目录规范
- 一个视图（View）或者页面（page）对应一个视图文件夹。例如：
```
jrcoupon\mobile\views\view-folder
```

- 如果一个域（如活动域）中有多个项目，每个项目有多个页面，则需加一层项目目录，一个项目对应一个文件夹，放在 views 文件夹下面，视图文件夹放在项目文件夹下面。例如：
```
activity\mobile\views\project-folder\view-folder
```

- 每个视图文件夹下有一个主组件文件 Main.vue。例如：
```
jrcoupon\mobile\views\view-folder\Main.vue
activity\mobile\views\project-folder\view-folder\Main.vue
```

- 所有视图私有的组件，放在视图文件夹中。例如：
```
jrcoupon\mobile\views\view-folder\PrivateComponent.vue
activity\mobile\views\project-folder\view-folder\PrivateComponent.vue
```

- 域内公用组件，放在域公用组件文件夹 components 中。例如：
```
jrcoupon\mobile\components\ProjectPublicComponent.vue
```

- 全站公用组件，放在全站公用组件文件夹 components 中。例如：
```
common\components\PublicComponent.vue
```

- 针对活动域这种有多个项目的域，如果单个项目中的多个页面有公用组件，可视情况决定是否将组件放在项目文件夹中。例如：
```
activity\mobile\views\project-folder\PublicComponent.vue
```

### 3、编码规范
- 代码缩进统一使用2个空格
- 代码行末尾不加分号
- import 文件名称要与该文件的命名一置，例如：
```
import user from user.js
import User from User.js
import userNames from user-names.js
import Component from Component.vue
```

## hot module replacement references:  
### webpack:  
[concept](https://webpack.js.org/concepts/hot-module-replacement/)  
[guide](https://webpack.js.org/guides/hot-module-replacement/)  
[api](https://webpack.js.org/api/hot-module-replacement/)  
[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)  
[webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware)   
### vue:  
[vue-loader hot reload](https://vue-loader.vuejs.org/guide/hot-reload.html)  
[vue-hot-reload-api](https://github.com/vuejs/vue-hot-reload-api)  
