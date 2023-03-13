/** @format */
import { type App } from 'vue';
import { WsButton, WsWaterfall } from '@whimsy-ui/components';
export { WsButton, WsWaterfall };
export * from './resolver';
import 'unocss';

export default {
  install(app: App) {
    app.component(WsButton.name, WsButton);
    app.component(WsWaterfall.name, WsWaterfall);
  }
};
