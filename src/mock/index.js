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
/*
* 后台返回 用户选中的快捷方式
* */
Mock.mock('/api/homeShortcut', 'get', () => {
  return {
    data: [
      { title: '学生评奖', picUrl: 'https://pic.imgdb.cn/item/65f50b819f345e8d03a988be.png', isChoose: true, category: 'second' },
      { title: '请假申请', picUrl: 'https://pic.imgdb.cn/item/65f4ea309f345e8d030e7e51.png', isChoose: true, category: 'third' },
      { title: '岗位申请', picUrl: 'https://pic.imgdb.cn/item/65f509f59f345e8d03a1bbde.png', isChoose: true, category: 'third' },
      { title: '信息修改', picUrl: 'https://pic.imgdb.cn/item/65f50a2b9f345e8d03a2b47c.png', isChoose: true, category: 'fourth' },
      { title: '处分申述', picUrl: 'https://pic.imgdb.cn/item/65f50a609f345e8d03a3a755.png', isChoose: true, category: 'second' },
      { title: '宿舍异动', picUrl: 'https://pic.imgdb.cn/item/65f50a8e9f345e8d03a483ce.png', isChoose: true, category: 'third' },
      { title: '留校申请', picUrl: 'https://pic.imgdb.cn/item/65f50abc9f345e8d03a55a0c.png', isChoose: true, category: 'fourth' },
      { title: '教室申用', picUrl: 'https://pic.imgdb.cn/item/65f50af89f345e8d03a66d12.png', isChoose: true, category: 'third' },
      { title: '班委申请', picUrl: 'https://pic.imgdb.cn/item/65f50b2c9f345e8d03a7b2e5.png', isChoose: true, category: 'fourth' },
      { title: '学工信箱', picUrl: 'https://pic.imgdb.cn/item/65f50f469f345e8d03bc7780.png', isChoose: false, category: 'fourth' },
      { title: '维修申报', picUrl: 'https://pic.imgdb.cn/item/65f50fcb9f345e8d03bf1ff9.png', isChoose: false, category: 'fourth' },
      { title: '心理健康', picUrl: 'https://pic.imgdb.cn/item/65f50fed9f345e8d03bfce57.png', isChoose: false, category: 'third' }
    ]
  }
})

Mock.mock('api/awards', () => {
  return {
    data: [
      {
        itemTitle: '特等奖学金',
        limit: [
          {
            passing: true,
            content: '在校期间“2020-2024”没有出现违纪情况'
          },
          {
            passing: true,
            content: '本学年思想道德素质分需大于等于90分'
          },
          {
            passing: true,
            content: '本学年身体素质分需大于等于85分'
          },
          {
            passing: false,
            content: '本学年专业文化成绩需大于等于90分'
          },
          {
            passing: true,
            content: '综测总分需为年级前5%才能申请'
          },
          {
            passing: false,
            content: '各项成绩需大于等于85分'
          },
          {
            passing: false,
            content: '本学年的课外实践分需大于等于5.0分才能申请'
          }
        ]
      }
    ]
  }
})

// 启动 Mock 服务
Mock.setup({
  timeout: '200-400'
})
