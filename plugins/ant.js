import { Card, Menu, Avatar, Col, Row, Progress, Icon } from 'ant-design-vue'
import Vue from 'vue'

export default () => {
  Vue.use(Menu)
  Vue.use(Card)
  Vue.use(Avatar)
  Vue.use(Col)
  Vue.use(Row)
  Vue.use(Progress)
  Vue.use(Icon)
}
