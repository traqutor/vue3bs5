<template>
  <aside class="aside-left">
    <nav class="nav flex-column">
      <AsideLeftNavButton title="Tasks" path="/tasks" badge-number="">
        <feather-clipboard-line class="f-icon-26" />
      </AsideLeftNavButton>

      <AsideLeftNavButton
        title="Messages"
        path="/conversations"
        :badge-number="numberOfConversations"
      >
        <feather-message-square-line class="f-icon-26" />
      </AsideLeftNavButton>

<!--      <AsideLeftNavButton title="Incidents" path="/incidents" badge-number="">-->
<!--        <feather-flasher class="f-icon-26" />-->
<!--      </AsideLeftNavButton>-->

      <AsideLeftNavButton title="Locate" path="/locate" badge-number="">
        <feather-map-pin class="f-icon-26" />
      </AsideLeftNavButton>

<!--      <AsideLeftNavButton title="Alarms" path="/alarms" badge-number="">-->
<!--        <feather-alert-triangle class="f-icon-26" />-->
<!--      </AsideLeftNavButton>-->

      <AsideLeftNavButton title="Media" path="/media" badge-number="">
        <feather-play class="f-icon-26" />
      </AsideLeftNavButton>

<!--      <AsideLeftNavButton title="Patients" path="/patients" badge-number="">-->
<!--        <feather-patient class="f-icon-26" />-->
<!--      </AsideLeftNavButton>-->

<!--      <AsideLeftNavButton title="Sentinel" path="/sentinel" badge-number="">-->
<!--        <feather-shield class="f-icon-26" />-->
<!--      </AsideLeftNavButton>-->
    </nav>

    <nav class="nav flex-column mt-auto">
<!--      <AsideLeftNavButton-->
<!--        title="Switchboard"-->
<!--        path="/switchboard"-->
<!--        badge-number=""-->
<!--      >-->
<!--        <feather-headphones-mic class="f-icon-26" />-->
<!--      </AsideLeftNavButton>-->

<!--      <AsideLeftNavButton-->
<!--        title="Role Management"-->
<!--        path="/role_management"-->
<!--        badge-number=""-->
<!--      >-->
<!--        <feather-user-check class="f-icon-26" />-->
<!--      </AsideLeftNavButton>-->

      <AsideLeftNavButton title="Settings" path="/settings" badge-number="">
        <feather-settings class="f-icon-26" />
      </AsideLeftNavButton>
    </nav>
  </aside>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FeatherClipboardLine from "@/icons/FeatherClipboardLine";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";
import FeatherFlasher from "@/icons/FeatherFlasher";
import FeatherMapPin from "@/icons/FeatherMapPin";
import FeatherAlertTriangle from "@/icons/FeatherAlertTriangle";
import FeatherPatient from "@/icons/FeatherPatient";
import FeatherShield from "@/icons/FeatherShield";
import FeatherHeadphonesMic from "@/icons/FeatherHeadphonesMic";
import FeatherPlay from "@/icons/FeatherPlay";
import AsideLeftNavButton from "@/components/aside/AsideLeftNavButton";
import FeatherUserCheck from "@/icons/FeatherUserCheck";
import FeatherSettings from "@/icons/FeatherSettings";

export default {
  components: {
    FeatherSettings,
    FeatherUserCheck,
    AsideLeftNavButton,
    FeatherPlay,
    FeatherHeadphonesMic,
    FeatherShield,
    FeatherPatient,
    FeatherAlertTriangle,
    FeatherMapPin,
    FeatherFlasher,
    FeatherMessageSquareLine,
    FeatherClipboardLine,
  },
  setup() {
    const store = useStore();

    const numberOfConversations = computed(
      () => store.getters.getTotalMissedCounter
    );

    return {
      numberOfConversations,
    };
  },
};
</script>
<style>
.aside-left {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 72px;
  left: 0px;
  top: 64px;
  bottom: 0px;

  background: #ffffff;
  box-shadow: 1px 0px 0px #dde3e8;
}
</style>
