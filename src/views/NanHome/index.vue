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
                <NotificationNotice></NotificationNotice>
<!--            <template v-for="item in homeNotices">-->
<!--              <ListItem-->
<!--                @custom-event="HANDLEEVENT"-->
<!--                :item="item"-->
<!--                :showTop="item.showTop"-->
<!--                :key="item.id"-->
<!--              ></ListItem>-->
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
<!--            <template v-for="item in homeDownLoad">-->
<!--              <ListItem :item="item" :key="item.id"></ListItem>-->
<!--            </template>-->
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
<!--      <table-header></table-header>-->
<!--      <el-table :data="allNotices" border height="50vh">-->
<!--        <el-table-column property="context" label="标题" width="1069">-->
<!--          <template v-slot="scope">-->
<!--            <div class="el-table-column-div_box" @click="TOTHISNOTICEDETAILD">-->
<!--              <img-->
<!--                v-if="scope.row.showTop"-->
<!--                src="../../assets/置顶.png"-->
<!--                class="div-img_top"-->
<!--              />-->
<!--              <p class="div-p_context">{{ scope.row.context }}</p>-->
<!--            </div>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          property="time"-->
<!--          label="发布时间"-->
<!--          width="200"-->
<!--        ></el-table-column>-->
<!--      </el-table>-->
      <!-- 分页器 -->
<!--      <paginator-box></paginator-box>-->
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
import ListItem from './list-item'
import PaginatorBox from './paginator-box'
import TableHeader from './table-header'
import DialogArticle from './dialog-article'
import NanShortcut from '@/views/NanHome/NanShortcut/index.vue'
import DraggableDialog from '@/views/NanHome/DraggableDialog/index.vue'
import { mapState } from 'vuex'
import NotificationNotice from '@/views/NanHome/NotificationNotice/index.vue'
import HomeDownload from '@/views/NanHome/HomeDownload/index.vue'

export default {
  name: 'NanHome',
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
  async created() {
    // await this.$store.dispatch('home/fetch_HomeNotices')
    // await this.$store.dispatch('home/fetch_HomeDownload')
  },
  computed: {
    ...mapState('home', {
      homeNotices: (state) => state.homeNotices,
      allNotices: (state) => state.allNotices,
      homeDownLoad: (state) => state.homeDownLoad
    })
  },
  methods: {
    // async CLICKLOOKMORE() {
    //   this.dialogVisible = true
    //   try {
    //     await this.$store.dispatch('home/fetch_AllNotices')
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    showInnerVisible(){
      this.innerVisible = true
    },
    TOTHISNOTICEDETAILD() {
      this.innerVisible = true
    },
    // HANDLEEVENT(value) {
    //   this.innerVisible = value
    // },
    handleDialogVisibilityChange(visible) {
      this.showDialog = visible
    },
  }
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
