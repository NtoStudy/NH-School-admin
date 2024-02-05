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
                  <span @click="CLICKLOOKMORE">更多</span>
                  <i class="el-icon-d-arrow-right"></i>
                </div>
            </el-header>
            <el-main>
              <template v-for="item in homeNotices">
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
      <el-table :data="allNotices" border height="50vh">
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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-dialog>
  </div>
</template>

<script>
import ListItem from './list-item'
import { mapState } from 'vuex'
export default {
  name: 'NanHome',
  data () {
    return {
      dialogVisible: false,
      gridData: []
    }
  },
  components: {
    ListItem
  },
  async created () {
    await this.$store.dispatch('home/fetchHomeNotices')
  },
  computed: {
    ...mapState('home', {
      homeNotices: state => state.homeNotices,
      allNotices: state => state.allNotices
    })
  },
  methods: {
    async CLICKLOOKMORE () {
      this.dialogVisible = true
      try {
        await this.$store.dispatch('home/fetchAllNotices')
      } catch (error) {
        console.log(error)
      }
    }
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
  .el-pagination {
    border: {
      left: 1px solid #EBEEF5;
      right: 1px solid #EBEEF5;
      bottom: 1px solid #EBEEF5;
    }
    padding: 5px;
    display: flex;
    justify-content: flex-end;
    ::v-deep .el-pager li.active {
      color: #49BEA4;
    }
    ::v-deep .el-pager li:hover {
      color: #49BEA4;
    }
    ::v-deep .el-pagination__jump {
      .el-input {
        .el-input__inner {
          &:hover {
            border-color:#ccc;
          }
          &:focus {
            border-color: #49BEA4;
          }
        }
      }
    }
    .btn-next,.btn-prev {
      &:hover {
        color: #49BEA4;
      }
    }
    ::v-deep .el-select {
      .el-input {
        .el-input__inner {
          &:hover {
            border-color:#ccc;
          }
          &:focus {
            border-color: #49BEA4;
          }
            &:not(:focus) {
              border-color: #DCDFE6;
            }
        }
      }
    }
  }
}
</style>

<style lang="scss">
  .el-scrollbar__view {
    .el-select-dropdown__item.selected {
        color: #49BEA4;
        font-weight: 700;
    }
   }
</style>
