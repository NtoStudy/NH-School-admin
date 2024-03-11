import Mock from 'mockjs'

// 通知通告
Mock.mock('/api/notices', 'get', () => {
  return {
    data: [
      { id: 1, context: '一站式学生社区服务大厅首批入驻办理事项', showTop: true, time: '2024.02.05' },
      { id: 2, context: '辅导员考核学生评分操作步骤说明', showTop: true, time: '2023.12.30' },
      { id: 3, context: '助学贷款学工系统提交步骤', showTop: false, time: '2024.01.03' },
      { id: 4, context: '综合测评学生自行提交操作', showTop: false, time: '2023.12.31' },
      { id: 5, context: '学工系统暑期留校申请说明', showTop: false, time: '2023.08.05' },
      { id: 6, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' }
    ]
  }
})

Mock.mock('/api/allNoticesList', 'get', () => {
  return {
    data: [
      { id: 1, context: '一站式学生社区服务大厅首批入驻办理事项', showTop: true, time: '2024.02.05' },
      { id: 2, context: '辅导员考核学生评分操作步骤说明', showTop: true, time: '2023.12.30' },
      { id: 3, context: '助学贷款学工系统提交步骤', showTop: false, time: '2024.01.03' },
      { id: 4, context: '综合测评学生自行提交操作', showTop: false, time: '2023.12.31' },
      { id: 5, context: '学工系统暑期留校申请说明', showTop: false, time: '2023.08.05' },
      { id: 6, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
      { id: 7, context: '新生报到流程及注意事项', showTop: false, time: '2024.08.20' },
      { id: 8, context: '校园卡充值及使用指南', showTop: false, time: '2024.09.01' },
      { id: 9, context: '选课系统操作指南', showTop: false, time: '2024.09.10' },
      { id: 10, context: '实习就业信息发布平台介绍', showTop: false, time: '2024.09.15' },
      { id: 11, context: '图书馆借阅规则及预约流程', showTop: false, time: '2024.09.20' },
      { id: 12, context: '校园网络使用规范', showTop: false, time: '2024.09.25' },
      { id: 13, context: '学生社团注册及活动申请流程', showTop: false, time: '2024.10.01' },
      { id: 14, context: '校内奖学金申请条件及流程', showTop: false, time: '2024.10.05' },
      { id: 15, context: '学生心理健康服务指南', showTop: false, time: '2024.10.10' },
      { id: 16, context: '校园安全防范措施及应急处理', showTop: false, time: '2024.10.15' },
      { id: 17, context: '学生宿舍管理规定', showTop: false, time: '2024.10.20' },
      { id: 18, context: '校园文化活动日程安排', showTop: false, time: '2024.10.25' },
      { id: 19, context: '学生体育运动场馆使用规定', showTop: false, time: '2024.11.01' },
      { id: 20, context: '校园医疗服务指南', showTop: false, time: '2024.11.05' },
      { id: 21, context: '学生就餐服务及食堂使用规定', showTop: false, time: '2024.11.10' },
      { id: 22, context: '校园环境保护与绿化倡议', showTop: false, time: '2024.11.15' },
      { id: 23, context: '学生迎新晚会活动安排', showTop: false, time: '2024.11.20' },
      { id: 24, context: '校园电子资源使用指南', showTop: false, time: '2024.11.25' },
      { id: 25, context: '学生社区服务中心联系方式', showTop: false, time: '2024.12.01' }
    ]
  }
})

Mock.mock('/api/homeDownload', 'get', () => {
  return {
    data: [
      { id: 1, context: '假期留校家长意见书及安全责任协议', time: '2024.02.05' },
      { id: 2, context: '国开行生源地贷款续贷证明', time: '2023.12.30' },
      { id: 3, context: '学籍处理相关表格', time: '2024.01.03' },
      { id: 4, context: '推优团会相关表格', time: '2024.03.03' }
    ]
  }
})

// 启动 Mock 服务
Mock.setup({
  timeout: '200-400'
})
