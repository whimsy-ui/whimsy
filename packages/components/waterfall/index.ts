import WsWaterfall from './src/waterfall';
import { App } from 'vue';
// 导出Button组件
export { WsWaterfall };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(WsWaterfall.name, WsWaterfall);
  }
};
