<template>
  <div class="paginator-box">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'PaginatorBox'
}
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.el-pagination {
  border: {
    left: 1px solid #EBEEF5;
    right: 1px solid #EBEEF5;
    bottom: 1px solid #EBEEF5;
  }
  padding: 5px;
  display: flex;
  justify-content: flex-end;
  .el-pager li.active {
    color: #49BEA4;
  }
  .el-pager li:hover {
    color: #49BEA4;
  }
  .el-pagination__jump {
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
  .el-select {
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
.el-scrollbar__view {
  .el-select-dropdown__item.selected {
      color: #49BEA4;
      font-weight: 700;
    }
}
</style>
