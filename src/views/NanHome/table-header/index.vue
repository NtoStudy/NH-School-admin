<template>
  <div class="table-header">
      <div class="header-left">
        <span style="margin-right: 10px;">通知类别</span>
        <el-select v-model="value" filterable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span style="margin-right: 10px;">关键词</span>
        <el-input placeholder="输入关键词"></el-input>
      </div>
      <div class="header-right">
        <span style="margin-right: 10px;">发布时间</span>
        <el-date-picker
          v-model="start"
          type="date"
          placeholder="启始日期">
        </el-date-picker>
        <span style="margin: 0 10px;">至</span>
        <el-date-picker
          v-model="end"
          type="date"
          placeholder="终止日期">
        </el-date-picker>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '入学指导',
      start: '',
      end: ''
    }
  }
}
</script>

<style scoped lang="scss"></style>

<style lang="scss">
  .table-header {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
     white-space: nowrap;
    .header-left {
      display: flex;
      align-items: center;
      .el-select {
        margin-right: 30px;
        .el-input {
          .el-input__inner {
            height: 25px;
            width: 120px;
          }
          .el-input__icon {
              line-height: 25px;
          }
        }
      }
      .el-input {
        .el-input__inner {
          &:focus {
            border-color: #49BEA4;
          }
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .el-input {
        width: 180px;
      }
      .el-button {
        margin-left: 60px;
        background-color: #49BEA4;
      }
      .el-date-editor {
        .el-input__inner {
          &:focus {
            border-color: #49BEA4;
          }
        }
      }
    }
  }
  .el-date-table td.today span {
    color: #49BEA4;
  }

  .el-date-table td.current:not(.disabled) span {
    background-color: #49BEA4;
  }

  .el-date-table td div:hover {
    color: #49BEA4;
  }

  .el-picker-panel__icon-btn {
    &:hover {
      color: #49BEA4;
    }
  }

.el-date-picker__header-label {
  &:hover {
    color: #49BEA4;
  }
}

.table-header .header-right .el-button {
  border: #49BEA4 1px solid;
}
</style>
