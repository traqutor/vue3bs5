<template>
  <div>
    <div
      v-for="(notification, index) of notifications"
      class="toast-overflow"
      :style="{ top: getNotificationPosition(index) }"
      :key="notification.id"
    >
      <ToastNotification :notification="notification" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import ToastNotification from "../../components/common/toast/ToastNotification.vue";

export default {
  components: { ToastNotification },
  setup() {
    const store = useStore();

    const firstNotificationTopPosition = ref(70);
    const notificationVerticalSpace = ref(70);
    const notifications = computed(() => store.getters.getNotifications);

    const getNotificationPosition = (notificationIndex) => {
      return `${
        notificationIndex * notificationVerticalSpace.value +
        firstNotificationTopPosition.value
      }px`;
    };
    return {
      notifications,
      getNotificationPosition,
    };
  },
};
</script>

<style lang="scss" scoped>
.toast-overflow {
  position: fixed;
  right: 30px;
  z-index: 9999;
  transition: all 1s ease-in-out;
}
</style>
