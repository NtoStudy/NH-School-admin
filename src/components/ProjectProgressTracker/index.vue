<template>
  <div class="progress-tracker">
    <div class="step" >
      <div class="step-title"> 正在审核材料真实性 </div>
      <progress :value="currentStepIndex" max="100"></progress>
      <div class="step-progress" :style="{ width: getProgress(currentStepIndex) + '%' }">
        {{currentStepIndex}} %
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectProgressTracker',
  data() {
    return {
      // 假设每个步骤的完成度是从0到100的数值
      progressValues: [25, 50, 75, 100],
      steps: ['审核材料信息', '发送邮件', '正在审核', '申请通过'],
      currentStepIndex:25
    };
  },
  methods: {
    getProgress(index) {
      // 根据步骤索引返回对应的进度值
      return this.progressValues[index];
    }
  }
};
</script>

<style scoped>
.step {
  margin-bottom: 20px;
}

progress {
  /* 进度条的样式 */
  width: 100%;
  height: 20px;
}

.step-progress {
  /* 进度条内部的样式，用于显示百分比 */
  text-align: center;
  line-height: 20px;
}


.current-step {
  /* 当前步骤标题的特殊样式 */
  font-weight: bold;
  color: #007bff; /* 举例：蓝色文字 */
}

.current-step progress {
  /* 当前步骤进度条的特殊样式 */
  background-color: pink; /* 举例：蓝色背景 */
}
</style>
