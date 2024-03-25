<template>
  <div class="NanPersonalInformation">
    <el-row :gutter="20">
      <el-col class="left" style="padding-left: 0" :span="4">
        <!--   基本信息， 联系方式， 家庭成员信息， 其它信息     -->
        <div class="left_menu">
          <el-menu
            default-active="1"
            >
            <el-menu-item index="1">
              <i class="el-icon-user"></i>
              <span slot="title">基本信息</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-phone-outline"></i>
              <span slot="title">联系方式</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-house"></i>
              <span slot="title">家庭成员信息</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-news"></i>
              <span slot="title">其它信息</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col class="right" style="padding-right: 0" :span="20">
        <div class="right_scrollView">
          <informationTitle information-title="基本信息"></informationTitle>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="姓名"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <informationTitle information-title="联系方式"></informationTitle>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="姓名"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <informationTitle information-title="家庭成员信息"></informationTitle>
          <informationTitle information-title="其它信息"></informationTitle>
          <uploadPhoto></uploadPhoto>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import informationTitle from '@/views/NanPersonalInformation/components/information-title.vue'
import uploadPhoto from '@/views/NanPersonalInformation/components/upload-photo.vue'
export default {
  name: 'NanPersonalInformation',
  components: {
    informationTitle,
    uploadPhoto
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  height: 80vh;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: #dce0eb 0 0 10px 0;
  .el-col {
    height: 100%;
  }
  .left {
    background-color: #dce0eb;
    .left_menu {
      height: 100%;
      background-color: #fff;
    }
  }
  .right {
    background-color: #dce0eb;
    .right_scrollView {
      height: 100%;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;
      #section1 {
        height: 800px;
      }
    }
  }
}
</style>
