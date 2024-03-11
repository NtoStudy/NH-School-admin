<template>
  <div class="Nan-container">
    <el-carousel :interval="4000" type="card" height="350px" :autoplay="false">
      <el-carousel-item class="el-carousel-item_notices">
        <card-container>
          <template v-slot:header>
              <div class="el-header-div_left">
                <svg-icon iconClass="notice"></svg-icon>
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
              <svg-icon iconClass="download"></svg-icon>
              <span class="div-span_title">文件下载</span>
            </div>
            <div class="el-header-div_more">
              <span @click="CLICKLOOKMORE">更多</span>
              <i class="el-icon-d-arrow-right"></i>
            </div>
          </template>
          <template v-slot:main></template>
        </card-container>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_application">
        <card-container>
          <template v-slot:header></template>
          <template v-slot:main></template>
        </card-container>
      </el-carousel-item>
    </el-carousel>
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
  </div>
</template>

<script>
import ListItem from './list-item'
import CardContainer from './card-container'
import PaginatorBox from './paginator-box'
import TableHeader from './table-header'
import DialogArticle from './dialog-article'
import { mapState } from 'vuex'

export default {
  name: 'NanHome',
  data () {
    return {
      dialogVisible: false,
      innerVisible: false,
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  components: {
    CardContainer,
    ListItem,
    PaginatorBox,
    TableHeader,
    DialogArticle
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
    },
    TOTHISNOTICEDETAILD () {
      this.innerVisible = true
    },
    HANDLEEVENT (value) {
      this.innerVisible = value
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
         @mixin header {
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
         .el-carousel-item_notices {
           @include header;
         }
         .el-carousel-item_download {
           @include header;
         }
         .el-carousel-item_application {
           @include header;
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
