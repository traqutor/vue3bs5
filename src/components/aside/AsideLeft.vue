<template>
  <aside class="sidebar sidebar-left d-flex flex-column">
    <nav class="navbar p-0 aside-left">
      <div class="navbar-brand w-100">
        <div class="d-flex align-items-center text-decoration-none main-logo">
          <img
            class="main-logo-image"
            src="../../../public/images/logo.svg"
            alt=""
          />
        </div>
      </div>
    </nav>

    <nav class="nav flex-column">
      <AssideLeftNavButton title="Tasks" path="/tasks" badge-number="">
        <feather-clipboard-line class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton
        title="Messages"
        path="/conversations"
        :badge-number="numberOfConversations"
      >
        <feather-message-square-line class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Incidents" path="/incidents" badge-number="">
        <feather-flasher class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Locate" path="/locate" badge-number="">
        <feather-map-pin class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Alarms" path="/alarms" badge-number="">
        <feather-alert-triangle class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Media" path="/media" badge-number="">
        <feather-play class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Patients" path="/patients" badge-number="">
        <feather-patient class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Sentinel" path="/sentinel" badge-number="">
        <feather-shield class="f-icon-26" />
      </AssideLeftNavButton>
    </nav>

    <nav class="nav flex-column mt-auto">
      <AssideLeftNavButton
        title="Switchboard"
        path="/switchboard"
        badge-number=""
      >
        <feather-headphones-mic class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton
        title="Role Management"
        path="/role_management"
        badge-number=""
      >
        <feather-user-check class="f-icon-26" />
      </AssideLeftNavButton>

      <AssideLeftNavButton title="Settings" path="/settings" badge-number="">
        <feather-settings class="f-icon-26" />
      </AssideLeftNavButton>
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
import AssideLeftNavButton from "@/components/aside/AssideLeftNavButton";
import FeatherUserCheck from "@/icons/FeatherUserCheck";
import FeatherSettings from "@/icons/FeatherSettings";

export default {
  components: {
    FeatherSettings,
    FeatherUserCheck,
    AssideLeftNavButton,
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
