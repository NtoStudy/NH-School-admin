// Mock 接口统一管理
import Mock from 'mockjs'
import HomeData from './HomeData.js'

Mock.mock('/mock/home', 'get', HomeData.getBanner)
