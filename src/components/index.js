/* eslint-disable semi,comma-dangle,import/extensions,quotes,import/newline-after-import */
/**
* date: 2018/2/12
* author: ziven
* comments:
*/
// eslint-disable-next-line semi
// eslint-disable-next-line import/extensions
import RButton from './button/index.js'
// eslint-disable-next-line quotes
import RLead from "./lead/index.js"
// eslint-disable-next-line quotes
import RCashBulk from "./cash-bulk/index.js"
import RCashBulkGroup from './cash-bulk-group/index.js'
import RTable from './table/index.js'
import RInput from './input/index.js'
const components = [
  RButton,
  RLead,
  RCashBulk,
  RCashBulkGroup,
  RTable,
  RInput
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  RButton,
  RLead,
  RCashBulk,
  RCashBulkGroup,
  RTable,
  RInput
}
