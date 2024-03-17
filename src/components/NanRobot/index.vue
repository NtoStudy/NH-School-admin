<script>
export default {
  name: 'NanRobot'
}
</script>

<template>
  <div class="robot">
    <div class="head">
      <div class="eye"></div>
      <div class="eye right-eye"></div>
    </div>
    <div class="body"></div>
    <div class="arm"></div>
    <div class="arm right-arm"></div>
    <div class="leg"></div>
    <div class="leg right-leg"></div>
  </div>
</template>

<style scoped lang="scss">
.robot {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 100px;
}

.head,
.body,
.arm,
.leg {
  background: #333;
}

.head {
  height: 30px;
  border-radius: 50%;
  position: relative;
}

.eye {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  animation: blink 1s infinite;
}

.eye.right-eye {
  right: 10px;
}

.body {
  height: 40px;
  margin-top: 10px;
}

.arm,
.leg{
  width: 20px;
  height: 15px;
  position: absolute;
}

.arm {
  top: 40px;
  transform-origin: top center;
  animation: wave 1s ease-in-out infinite;
}

.arm.right-arm {
  right: 0;
}

.leg {
  bottom: 0;
}

.leg.right-leg {
  right: 0;
}
@keyframes blink {
  50% { background: #333; }
}
@keyframes wave {
  0%, 100% { transform: rotate(60deg); }
  50% { transform: rotate(0deg); }
}
</style>
