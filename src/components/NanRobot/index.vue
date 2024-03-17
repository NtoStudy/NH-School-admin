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
      <div class="nose"></div>
      <div class="mouth"></div>
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
  right: 40px;
  bottom: 50px;
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
  background-color: #D45153;
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

.nose {
  position: absolute;
  top: 15px;
  left: 25px;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: white;
}

.mouth {
  position: absolute;
  top: 23px;
  left: 18px;
  height: 0;
  width: 20px;
  border: 3px solid;
  border-color: transparent transparent white;
  border-radius: 50px / 10px;
}

.body {
  height: 40px;
  margin-top: 10px;
  background-color: #C37EF1;
  border-radius: 5px;
}

.arm,
.leg{
  width: 20px;
  height: 15px;
  position: absolute;
  background-color: #F1C47E;
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
