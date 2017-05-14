# MyAction

### 项目搭建

* 安装node、npm、IDE

* npm install -g @angular/cli  // 安装angular-cli  

* ng -v  // 查看是否安装成功 

* ng new 项目名称 //创建项目 

* ng server 4.启动项目 

* JQUERY和BOOTSTRAP // 安装第三方库 （见下方）

* ng g component 组件名称  // 安装组件

* ng g service 服务名称（例：shared/product） // 安装服务

* ng g pipe 管道名称  // 安装管道 

### 安装第三方引用（例：jquery 和 bootstrap）

* npm i jquery --save； npm i bootstrap --save

* 在angular-cli.json 文件中修改 script 和 style 属性（其中路径以src为根目录）

```


"styles": [

        "styles.css",

        "../node_modules/bootstrap/dist/css/bootstrap.css"

      ],

      "scripts": [

        "../node_modules/jquery/dist/jquery.js",

        "../node_modules/bootstrap/dist/js/bootstrap.js"

      ],

```

* 安装 jquery 和 bootstrap 的类型描述文件到本地库里

> 目的：让 typescript 认识 jquery 和 bootstrap ，在typescript 里能调用 jquery 的东西

```
npm i -g typings  // 先安装Typings
typings --version
npm i @types/jquery --save-dev
npm i @types/bootstrap --save-dev
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
