/** @format */
import { type App } from 'vue'
import { WButton } from './src/Button'
export { WButton }
export default {
  install(app: App) {
    app.component(WButton.name, WButton)
  }
}
