# school-admin

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 什么是后台管理系统 ？

> 比如公司有一个公司的官网，在这个公司的官网里面，有各种岗位招聘信息，因此是存在岗位招聘信息的更新、删除、修改、新增，此时：后台管理系统的作用就可以体现出来了，其实就是相当于是一个间接去操作服务端数据库的一个桥梁作用，试想，如果没有这个后台管理系统，然后公司首页的岗位信息需要变更，那么就可能需要手动去操作后台数据库了，此时，后台管理系统的桥梁作用就体现出来了，后台管理系统给不同的人员有不同的权限，进行数据的增删改查，这便是后台管理系统的一个核心功能，间接地操作了后台数据库。

![](https://pic.imgdb.cn/item/65f595319f345e8d03ee5a26.png)

## 角色管理

+ 学生
+ 学工办
+ 辅导员

角色能力概要：

🐼 学生

1. 查看通知通告
2. 个人信息上传
3. 通用文档附件下载
4. 个人信息修改、密码修改
5. 奖学金申请
6. 查看申请项目进度
7. 岗位投递
8. 班干部申请
9. 处分申请
10. 空教室占用申请
11. 留校申请
12. 请假结果
13. 投诉功能
15. 宿舍维修申报

🐼 辅导员

1. 个人信息
2. 进行奖学金审批
3. 处理班干部申请
4. 请假审评
5. 班级管理（可视化管理班级人员）
6. 处分审批

🐼 学工办

1. 处理辅导员上传的审批
2. 发布导员评分统计
3. 发布通知通告
4. 发布附件专区的文件
5. 审核奖学金
6. 处理学生信息修改
7. 接收宿舍维修信息
