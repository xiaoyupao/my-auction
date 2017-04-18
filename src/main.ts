import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';  // 根模式
import { environment } from './environments/environment'; // 导入环境配置，对多环境的支持

if (environment.production) {  // 如果是生产模式
  enableProdMode(); // 作用： 关闭angular模块的开发者模式
}

platformBrowserDynamic().bootstrapModule(AppModule);
// 加载模块后，加载组件，加载根组件
