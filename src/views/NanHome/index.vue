<template>
  <div class="Nan-container">
    <el-carousel :interval="4000" type="card" height="350px" :autoplay="false">
      <el-carousel-item class="el-carousel-item_notices">
        <card-container>
          <template v-slot:header>
              <div class="el-header-div_left">
                <svg-icon iconClass="notice" :svgStyle="{ marginRight: '10px' }"></svg-icon>
                <span class="div-span_title">通知通告</span>
              </div>
              <div class="el-header-div_more">
                <span @click="CLICKLOOKMORE">更多</span>
                <i class="el-icon-d-arrow-right"></i>
              </div>
          </template>
          <template v-slot:main>
              <template v-for="item in homeNotices">
                <ListItem @custom-event="HANDLEEVENT" :item="item" :showTop="item.showTop" :key="item.id"></ListItem>
              </template>
          </template>
        </card-container>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_download">
        <card-container>
          <template v-slot:header>
            <div class="el-header-div_left">
              <svg-icon iconClass="download" :svgStyle="{ marginRight: '10px'}"></svg-icon>
              <span class="div-span_title">文件下载</span>
            </div>
            <div class="el-header-div_more">
              <span @click="CLICKLOOKMORE">更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </template>
          <template v-slot:main>
            <template v-for="item in homeDownLoad">
              <ListItem :item="item" :key="item.id"></ListItem>
            </template>
          </template>
        </card-container>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_application">
        <card-container>
          <template v-slot:header>
            <div class="el-header-div_left">
              <svg-icon iconClass="application" :svgStyle="{ marginRight: '10px'}"></svg-icon>
              <span class="div-span_title">事务申请栏</span>
            </div>
            <div class="el-header-div_more">
              <span @click="CLICKLOOKMORE">更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </template>
          <template v-slot:main>
            <ApplicationTable></ApplicationTable>
          </template>
        </card-container>
      </el-carousel-item>
    </el-carousel>
    <nan-shortcut></nan-shortcut>
    <!-- 弹出层 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="70%"
    >
    <table-header></table-header>
      <el-table :data="allNotices" border height="50vh">
        <el-table-column property="context" label="标题" width="1069">
          <template v-slot="scope">
            <div class="el-table-column-div_box" @click="TOTHISNOTICEDETAILD">
              <img v-if="scope.row.showTop" src="../../assets/置顶.png" class="div-img_top">
              <p class="div-p_context">{{ scope.row.context }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="time" label="发布时间" width="200"></el-table-column>
      </el-table>
      <!-- 分页器 -->
      <paginator-box></paginator-box>
    </el-dialog>
    <!--文章展示弹层组件 -->
    <dialog-article v-model="innerVisible"></dialog-article>
    <!-- 拖拽弹层 -->
    <button @click="showDialog = true">Open Dialog</button>
    <DraggableDialog :visible.sync="showDialog"></DraggableDialog>
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

export default {
  name: 'NanHome',
  data () {
    return {
      showDialog: false,
      dialogVisible: false,
      innerVisible: false,
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  components: {
    DraggableDialog,
    ListItem,
    PaginatorBox,
    TableHeader,
    DialogArticle,
    ApplicationTable,
    NanShortcut
  },
  async created () {
    await this.$store.dispatch('home/fetchHomeNotices')
    await this.$store.dispatch('home/fetchHomeDownload')
  },
  computed: {
    ...mapState('home', {
      homeNotices: state => state.homeNotices,
      allNotices: state => state.allNotices,
      homeDownLoad: state => state.homeDownLoad
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
    },
    TOTHISNOTICEDETAILD () {
      this.innerVisible = true
    },
    HANDLEEVENT (value) {
      this.innerVisible = value
    },
    handleDialogVisibilityChange (visible) {
      this.dialogVisible = visible // 更新组件传递回来的可见状态
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
           @include header(#49BEA4);
         }
         .el-carousel-item_download {
           @include header(#FBB64D);

         }
         .el-carousel-item_application {
           @include header(#A7458D);
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
