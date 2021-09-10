<template>
  <!-- start::task type definition  -->
  <perfect-scrollbar
    v-if="modelValue"
    class="position-absolute h-100 w-100 pe-3"
  >
    <!-- start:: collapse general -->
    <div
      class="
        d-flex
        align-self-center
        justify-content-between
        text-primary
        on-hover
        f-size-15
        font-weight-middle
        f-col-2x
      "
      data-bs-toggle="collapse"
      data-bs-target="#collapseTypeGeneral"
      aria-expanded="true"
    >
      General<feather-chevron-down class="text-secondary" />
    </div>
    <div class="collapse show" id="collapseTypeGeneral">
      <!-- start::Task type title -->
      <div class="d-flex mt-3">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <FeatherBookmark
            class="me-3 align-self-center f-icon-20 text-secondary"
          />
          <div class="media-body">
            <div class="text-secondary mb-2">
              Name <span class="text-danger">*</span>
            </div>
            <div class="input-group input-group-sm border-0">
              <input
                @input="onFormChange($event.target.value, 'title')"
                :value="modelValue.title"
                type="text"
                :disabled="readOnly"
                class="form-control form-control-sm bg-light shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end::Task type title -->

      <!-- start::Swatch colour select -->
      <div class="d-flex mt-3">
        <div class="d-flex w-100 f-col-2x">
          <feather-flag
            class="me-3 align-self-center f-icon-20 text-secondary"
          />
          <div class="media-body">
            <div class="text-secondary mb-2">Swatch colour</div>
            <div class="d-flex">
              <figure
                v-for="(palette, index) of swatchColors"
                :key="index"
                @click="onFormChange(palette.color, 'badgeColour')"
                class="avatar f-icon-30 me-2 rounded on-hover"
                :class="palette.className"
              >
                <feather-check
                  v-if="modelValue.badgeColour === palette.color"
                  class="avatar-presence avatar-icon-top bg-success f-icon-18"
                />
              </figure>

              <div class="media-body input-group input-group-sm flex-nowrap">
                <!--
                <div class="input-group-prepend">
                  <span class="input-group-text" id="addon-wrapping">@</span>
                </div>-->
                <input
                  type="text"
                  :disabled="readOnly"
                  class="form-control bg-light shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end::Swatch colour select -->

      <!-- start::max respondents select -->
      <div class="d-flex mt-3 pb-2">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <feather-users class="me-3 f-icon-20 text-secondary" />

          <div class="media-body">
            <div class="text-secondary mb-2">Max respondents</div>
            <div
              class="
                input-group input-group-sm
                dropdown dropdown-input-group
                filter-control-group
              "
            >
              <select
                class="form-select bg-light shadow-none"
                aria-label="Max respondents"
                :disabled="readOnly"
                @input="
                  onFormChange(
                    +$event.target.value,
                    'minimumRequiredParticipants'
                  )
                "
                :value="modelValue.minimumRequiredParticipants"
              >
                <option selected value="1">One person</option>
                <option value="0">All hands</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- end::max respondents select -->

      <!-- start::boolean selector allowUserToChooseParticipantsOnTaskCreation -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="
              onFormChange(
                $event.target.checked,
                'allowUserToChooseParticipantsOnTaskCreation'
              )
            "
            :checked="modelValue.allowUserToChooseParticipantsOnTaskCreation"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Allow user to choose participants on task creation
        </label>
      </div>
      <!-- end::boolean selector allowUserToChooseParticipantsOnTaskCreation -->

      <!-- start::boolean selector isIncident -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="onFormChange($event.target.checked, 'isIncident')"
            :checked="modelValue.isIncident"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Is it incident
        </label>
      </div>
      <!-- end::boolean selector isIncident -->

      <!-- start::boolean selector isLocationRequired -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="onFormChange($event.target.checked, 'isLocationRequired')"
            :checked="modelValue.isLocationRequired"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Is Location Required
        </label>
      </div>
      <!-- end::boolean selector isLocationRequired -->

      <!-- start::boolean selector isDeadlineRequired -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="onFormChange($event.target.checked, 'isDeadlineRequired')"
            :checked="modelValue.isDeadlineRequired"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Is deadline required
        </label>
      </div>
      <!-- end::boolean selector isDeadlineRequired -->

      <!-- start::boolean selector allowRisingOffDuty -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="onFormChange($event.target.checked, 'allowRisingOffDuty')"
            :checked="modelValue.allowRisingOffDuty"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Allow rising off duty
        </label>
      </div>
      <!-- end::boolean selector allowRisingOffDuty -->

      <!-- start::boolean selector createConversationOnRising -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="
              onFormChange($event.target.checked, 'createConversationOnRising')
            "
            :checked="modelValue.createConversationOnRising"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Create conversation on rising
        </label>
      </div>
      <!-- end::boolean selector createConversationOnRising -->

      <!-- start::boolean selector sendNotificationOnRising -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="
              onFormChange($event.target.checked, 'sendNotificationOnRising')
            "
            :checked="modelValue.sendNotificationOnRising"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Send notification on rising
        </label>
      </div>
      <!-- end::boolean selector sendNotificationOnRising -->

      <!-- start::boolean selector sendNotificationOnChangeStatus -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="
              onFormChange(
                $event.target.checked,
                'sendNotificationOnChangeStatus'
              )
            "
            :checked="modelValue.sendNotificationOnChangeStatus"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Send notification on change status
        </label>
      </div>
      <!-- end::boolean selector sendNotificationOnChangeStatus -->

      <!-- start::boolean selector sendNotificationOnDeadlinePassed -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="
              onFormChange(
                $event.target.checked,
                'sendNotificationOnDeadlinePassed'
              )
            "
            :checked="modelValue.sendNotificationOnDeadlinePassed"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Send notification on deadline passed
        </label>
      </div>
      <!-- end::boolean selector sendNotificationOnDeadlinePassed -->

      <!-- start::boolean selector sendNotificationOnCountdownStarted -->
      <div class="mt-2">
        <label class="toggle-input toggle-input-success f-size-14">
          <input
            type="checkbox"
            @change="
              onFormChange(
                $event.target.checked,
                'sendNotificationOnCountdownStarted'
              )
            "
            :checked="modelValue.sendNotificationOnCountdownStarted"
            :disabled="readOnly"
          />
          <span class="input-icon f-icon-20 me-3"
            ><feather-toggle-left /> <feather-toggle-right /> </span
          >Send notification on countdown started
        </label>
      </div>
      <!-- end::boolean selector sendNotificationOnCountdownStarted -->
    </div>
    <!-- start:: collapse general -->

    <div class="border-top border-secondary-light f-col-2x my-3"></div>

    <!-- start:: collapse locations -->
    <div
      data-bs-toggle="collapse"
      data-bs-target="#collapseTypeLocations"
      class="
        d-flex
        align-self-center
        justify-content-between
        text-primary
        on-hover
        f-size-15
        font-weight-middle
        f-col-2x
      "
    >
      Locations
      <feather-chevron-down class="text-secondary" />
    </div>
    <div class="collapse" id="collapseTypeLocations">
      <!-- start::type location -->
      <div class="d-flex mt-3">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <feather-map-pin
            class="me-3 align-self-center f-icon-20 text-secondary"
          />
          <div class="media-body">
            <div class="text-secondary mb-2">
              Location <span class="text-danger">*</span>
            </div>
            <div class="input-group input-group-sm border-0">
              <input
                @input="onFormChange($event.target.value, 'locationId')"
                :value="modelValue.locationId"
                type="text"
                :disabled="readOnly"
                class="form-control form-control-sm bg-light shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- start::type location -->
    </div>
    <!-- end:: collapse locations -->

    <!-- start:: collapse operations -->
    <RequiredActionsCollapse :task-type="modelValue" />
    <!-- end:: collapse operations -->

    <!-- start:: collapse custom fields -->
    <CustomFieldsCollapse :task-type="modelValue" />
    <!-- end:: collapse custom fields -->
  </perfect-scrollbar>
  <!-- end::task type definition  -->
</template>
<script>
import { ref } from "vue";
import { SWATCH_COLORS } from "@/store/enums/EnumTypes";
import FeatherBookmark from "@/icons/FeatherBookmark";
import FeatherChevronDown from "@/icons/FeatherChevronDown";
import FeatherFlag from "@/icons/FeatherFlag";
import FeatherCheck from "@/icons/FeatherCheck";
import FeatherUsers from "@/icons/FeatherUsers";
import FeatherToggleLeft from "@/icons/FeatherToggleLeft";
import FeatherToggleRight from "@/icons/FeatherToggleRight";
import FeatherMapPin from "@/icons/FeatherMapPin";
import RequiredActionsCollapse from "@/components/settings/taskFlow/taskTypeForm/RequiredActionsCollapse";
import CustomFieldsCollapse from "@/components/settings/taskFlow/taskTypeForm/CustomFieldsCollapse";

export default {
  props: ["modelValue", "readOnly"],
  emits: ["update:modelValue"],
  components: {
    CustomFieldsCollapse,
    RequiredActionsCollapse,
    FeatherMapPin,
    FeatherToggleRight,
    FeatherToggleLeft,
    FeatherUsers,
    FeatherCheck,
    FeatherFlag,
    FeatherChevronDown,
    FeatherBookmark,
  },
  setup(props, { emit }) {
    const swatchColors = ref(SWATCH_COLORS);

    const onFormChange = (value, property) => {
      const form = { ...props.modelValue };
      form[property] = value;
      emit("update:modelValue", form);
    };

    return {
      swatchColors,
      onFormChange,
    };
  },
};
</script>
