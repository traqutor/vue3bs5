<template>
  <div class="notification-wrapper">
    <transition name="fade" appear>
      <div
        class="notification font-weight-middle"
        :style="{ 'background-color': notification.backgroundColor }"
      >
        {{ notification.text ? notification.text : "Notification" }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["notification"],
};
</script>

<style lang="scss" scoped>
.notification-wrapper {
  position: relative;
  margin: 10px;
}
.notification {
  height: 60px;
  padding: 10px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
