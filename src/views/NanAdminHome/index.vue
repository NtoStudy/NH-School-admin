<template>
  <div class="Nan-container">
    <!--上层的三页分页栏目-->
    <el-carousel :interval="4000" type="card" height="350px" :autoplay="false">
      <!--通知通告一栏-->
      <el-carousel-item class="el-carousel-item_notices">
        <card-container>
          <template v-slot:header>
            <div class="el-header-div_left">
              <svg-icon
                iconClass="notice"
                :svgStyle="{ marginRight: '10px' }"
              ></svg-icon>
              <span class="div-span_title">通知通告</span>
            </div>
            <div class="el-header-div_more">
              <span @click="showInnerVisible">更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </template>

          <template v-slot:main>
            <template>
                <NotificationNotice @show-dialog="dialogVisible = true"></NotificationNotice>
            </template>
          </template>
        </card-container>
      </el-carousel-item>
      <!--文件下载一栏-->
      <el-carousel-item class="el-carousel-item_download">
        <card-container>
          <template v-slot:header>
            <div class="el-header-div_left">
              <svg-icon
                iconClass="download"
                :svgStyle="{ marginRight: '10px' }"
              ></svg-icon>
              <span class="div-span_title">文件下载</span>
            </div>
            <div class="el-header-div_more">
              <span @click="showInnerVisible">更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </template>
          <template v-slot:main>
            <HomeDownload></HomeDownload>
          </template>
        </card-container>
      </el-carousel-item>
      <!--事务申请一栏-->
      <el-carousel-item class="el-carousel-item_application">
        <card-container>
          <template v-slot:header>
            <div class="el-header-div_left">
              <svg-icon
                iconClass="application"
                :svgStyle="{ marginRight: '10px' }"
              ></svg-icon>
              <span class="div-span_title">事务申请栏</span>
            </div>
            <div class="el-header-div_more">
              <span @click="showInnerVisible">更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </template>
          <template v-slot:main>
            <ApplicationTable></ApplicationTable>
          </template>
        </card-container>
      </el-carousel-item>
    </el-carousel>

    <!--这里是快捷栏-->
    <nan-shortcut @click="handleDialogVisibilityChange"></nan-shortcut>

    <!-- 弹出层 -->
    <el-dialog :visible.sync="dialogVisible" width="70%">
    </el-dialog>


<!--     用来管理点击任务栏弹出 -->
<!--    <NotificationNotice @show-dialog="dialogVisible = true"></NotificationNotice>-->
    <!-- el-dialog 组件 -->
    <el-dialog
      title="通知通告"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>更多详情内容请联系辅导员查看</span>
      <!-- 其他内容 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--文章展示弹层组件 -->
    <dialog-article v-model="innerVisible"></dialog-article>
    <!-- 拖拽弹层 -->

    <DraggableDialog
      title="管理 | 快捷访问"
      :visible.sync="showDialog"
    ></DraggableDialog>
  </div>
</template>

<script>
import ApplicationTable from './application-table'
import DialogArticle from './dialog-article'
import NanShortcut from '@/views/NanHome/NanShortcut/index.vue'
import DraggableDialog from '@/views/NanHome/DraggableDialog/index.vue'
import NotificationNotice from '@/views/NanHome/NotificationNotice/index.vue'
import HomeDownload from '@/views/NanHome/HomeDownload/index.vue'

export default {
  name: 'NanAdminHome',
  data() {
    return {
      showDialog: false,
      dialogVisible: false,
      innerVisible: false,
      theme: 'light',
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  components: {
    DialogArticle,
    HomeDownload,
    NotificationNotice,
    DraggableDialog,
    // ListItem,
    // PaginatorBox,
    // TableHeader,
    // DialogArticle,
    ApplicationTable,
    NanShortcut
  },
  methods: {
    showInnerVisible(){
      this.innerVisible = true
    },
    handleDialogVisibilityChange(visible) {
      this.showDialog = visible
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },

}
</script>

<style lang="scss" scoped>
.Nan-container {
  .el-carousel {
    .el-carousel__container {
      .el-carousel__item {
        background-color: var(--bg-color);
      }
      @mixin header($color) {
        .el-header-div_left {
          display: flex;
          align-items: center;
          .div-span_title {
            position: relative;
            font-size: 13px;
            color: $color;
            white-space: nowrap;
            &::after {
              position: absolute;
              left: -8px;
              top: 26px;
              content: '';
              width: 70px;
              height: 2px;
              background-color: $color;
            }
          }
        }
        .el-header-div_more {
          color: #ccc;
          &:hover {
            color: $color;
          }
        }
      }
      .el-carousel-item_notices {
        @include header(#49bea4);
      }
      .el-carousel-item_download {
        @include header(#fbb64d);
      }
      .el-carousel-item_application {
        @include header(#a7458d);
      }
    }
  }
}
.el-dialog {
  .el-dialog__body {
    .el-table {
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
            color: #49bea4;
            &:hover {
              color: #000;
              cursor: pointer;
            }
          }
        }
      }
      ::v-deep .el-table__header {
        .el-table__cell {
          background-color: var(--bg-color);
          border-bottom: 1px solid #49bea4;
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
