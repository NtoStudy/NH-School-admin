<template>
  <div class="Nan-container">
    <el-carousel :interval="4000" type="card" height="350px" :autoplay="false">
      <el-carousel-item class="el-carousel-item_notices">
        <el-card shadow="hover">
          <el-container>
            <el-header style="height: 40px;">
                <div class="el-header-div_left">
                  <img class="div-img_logo" src="../../assets/通知通告.png" alt="">
                  <span class="div-span_title">通知通告</span>
                </div>
                <div class="el-header-div_more">
                  <span @click="dialogVisible = true">更多</span>
                  <i class="el-icon-d-arrow-right"></i>
                </div>
            </el-header>
            <el-main>
              <template v-for="item in itemList">
                <ListItem :item="item" :showTop="item.showTop" :key="item.id"></ListItem>
              </template>
            </el-main>
          </el-container>
        </el-card>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_">
        <el-card shadow="hover"></el-card>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_">
        <el-card shadow="hover"></el-card>
      </el-carousel-item>
    </el-carousel>
    <!-- 弹出层 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="70%"
    >
      <el-table :data="gridData" border height="50vh">
        <el-table-column property="context" label="标题" width="1069">
          <template slot-scope="scope">
            <div class="el-table-column-div_box">
              <img v-if="scope.row.showTop" src="../../assets/置顶.png" class="div-img_top">
              <p class="div-p_context">{{ scope.row.context }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="time" label="发布时间" width="200"></el-table-column>
      </el-table>
      <!-- 分页器 -->
    </el-dialog>
  </div>
</template>

<script>
import ListItem from './list-item'
export default {
  name: 'NanHome',
  data () {
    return {
      itemList: [
        { id: 1, context: '一站式学生社区服务大厅首批入驻办理事项', showTop: true, time: '2024.02.05' },
        { id: 2, context: '辅导员考核学生评分操作步骤说明', showTop: true, time: '2023.12.30' },
        { id: 3, context: '助学贷款学工系统提交步骤', showTop: false, time: '2024.01.03' },
        { id: 4, context: '综合测评学生自行提交操作', showTop: false, time: '2023.12.31' },
        { id: 5, context: '学工系统暑期留校申请说明', showTop: false, time: '2023.08.05' },
        { id: 6, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' }
      ],
      dialogVisible: false,
      gridData: [
        { id: 1, context: '一站式学生社区服务大厅首批入驻办理事项', showTop: true, time: '2024.02.05' },
        { id: 2, context: '辅导员考核学生评分操作步骤说明', showTop: true, time: '2023.12.30' },
        { id: 3, context: '助学贷款学工系统提交步骤', showTop: false, time: '2024.01.03' },
        { id: 4, context: '综合测评学生自行提交操作', showTop: false, time: '2023.12.31' },
        { id: 5, context: '学工系统暑期留校申请说明', showTop: false, time: '2023.08.05' },
        { id: 6, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 7, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 8, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 9, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 10, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 11, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 12, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 13, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 14, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 15, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 16, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 17, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 18, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 19, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' },
        { id: 20, context: '如何进行本学年的学费缴费', showTop: false, time: '2023.07.05' }
      ]
    }
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss" scoped>
.Nan-container {
    .el-carousel {
      .el-carousel__container {
        .el-carousel__item {
            background-color: #fff;
            .el-card {
              width: 100%;
              height: 100%;
              ::v-deep .el-card__body {
                padding: 5px;
              }
            }
         }
         .el-carousel-item_notices {
            .el-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 10px;
              border-bottom: 1px solid #c5bfbf;
              .el-header-div_left {
                display: flex;
                align-items: center;
                .div-img_logo {
                  width: 40px;
                  margin-right: 10px;
                }
                .div-span_title {
                  position: relative;
                  font-size: 13px;
                  color: #49BEA4;
                  white-space: nowrap;
                  &::after {
                    position: absolute;
                    left: -8px;
                    top: 26px;
                    content: '';
                    width: 70px;
                    height: 2px;
                    background-color: #49BEA4;
                  }
                }
              }
              .el-header-div_more {
                color: #ccc;
                &:hover {
                  color: #49BEA4;
                }
              }
            }
            .el-main {
              padding: 5px;
            }
         }
      }
    }
}
.el-dialog {
  .el-dialog__body {
    .el-table  {
      .el-table__row {
        .el-table-column-div_box {
          display: flex;
          align-items: center;
          .div-img_top {
            margin-right: 10px;
            height: 20px;
            margin-top: 3px;
          }
          .div-p_context {
              text-decoration: underline;
              color: #49BEA4;
              &:hover {
                color: #000;
                cursor: pointer;
              }
          }
        }
      }
      ::v-deep .el-table__header {
        .el-table__cell {
          background-color: #f7f5f5;
          border-bottom: 1px solid #49BEA4;
        }
      }
      ::v-deep .el-table__row {
        .el-table__cell {
          padding: 5px 0;
        }
      }
    }
  }
}
</style>
