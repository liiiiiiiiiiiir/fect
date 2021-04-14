import Avatar from './Avatar'
import AvatarGroup from './AvatarGroup'
import Button from './Button'
import Capacity from './Capacity'
import Card from './Card'
import Code from './Code'
import Col from './Col'
import Dot from './Dot'
import Link from './Link'
import Loading from './Loading'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Row from './Row'
import Spacer from './Spacer'
import Switch from './Switch'
import Toast from './Toast'

import './utils/styles/index.css'
const components = [
  Avatar,
  AvatarGroup,
  Button,
  Capacity,
  Card,
  Code,
  Col,
  Dot,
  Link,
  Loading,
  Radio,
  RadioGroup,
  Row,
  Spacer,
  Switch,
  Toast,
]
const install = (vue) => {
  if (!install.installed) {
    components.map((component) => {
      component.install(vue)
    })
  }
  return
}
export default { install }
