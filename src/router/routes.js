import Home from '@/views/Home/HomeIndex'
import UserAdmin from '@/views/UserAdmin/UserAdmin'
import StuAword from '@/views/StuInfo/StuAword'
import StuInfo from '@/views/StuInfo/StuInfo'
import StuSupport from '@/views/StuInfo/StuSupport'
import StuPunish from '@/views/StuInfo/StuPunish'
import DailyAffair from '@/views/DailyAffair/DailyAffair'

export default [
  { path: '/', component: Home },
  { path: '/', component: UserAdmin },
  { path: '/', component: StuAword },
  { path: '/', component: StuInfo },
  { path: '/', component: StuSupport },
  { path: '/', component: StuPunish },
  { path: '/', component: DailyAffair }
]
