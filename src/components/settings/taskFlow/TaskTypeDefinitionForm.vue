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

    <div class="border-top border-secondary-light f-col-2x my-3"></div>

    <!-- start:: collapse operations -->
    <div
      data-bs-toggle="collapse"
      data-bs-target="#collapseTypeOperations"
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
      Operation names
      <feather-chevron-down class="text-secondary" />
    </div>
    <div class="collapse" id="collapseTypeOperations">
      <div class="d-flex mt-3">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <feather-phone
            class="me-3 align-self-center f-icon-20 text-secondary"
          />
          <div class="media-body">
            <div class="text-secondary mb-2">Accept call</div>
            <div class="input-group input-group-sm border-0">
              <input
                type="text"
                class="form-control form-control-sm bg-light shadow-none"
                value="Accept"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex mt-3">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              feather feather-phone-call
              me-3
              align-self-center
              f-icon-20
              text-secondary
            "
          >
            <path
              d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
          <div class="media-body">
            <div class="text-secondary mb-2">Confirm call</div>
            <div class="input-group input-group-sm border-0">
              <input
                type="text"
                class="form-control form-control-sm bg-light shadow-none"
                value="Confirm"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex mt-3">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              feather feather-phone-outgoing
              me-3
              align-self-center
              f-icon-20
              text-secondary
            "
          >
            <polyline points="23 7 23 1 17 1"></polyline>
            <line x1="16" y1="8" x2="23" y2="1"></line>
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
          <div class="media-body">
            <div class="text-secondary mb-2">Resolve call</div>
            <div class="input-group input-group-sm border-0">
              <input
                type="text"
                class="form-control form-control-sm bg-light shadow-none"
                value="Resolve"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex mt-3 pb-2">
        <div class="d-flex align-items-center w-100 f-col-2x">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="
              feather feather-phone-incoming
              me-3
              align-self-center
              f-icon-20
              text-secondary
            "
          >
            <polyline points="16 2 16 8 22 8"></polyline>
            <line x1="23" y1="1" x2="16" y2="8"></line>
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
          <div class="media-body">
            <div class="text-secondary mb-2">Acknowledge call</div>
            <div class="input-group input-group-sm border-0">
              <input
                type="text"
                class="form-control form-control-sm bg-light shadow-none"
                value="Acknowledge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: collapse operations -->

    <div class="border-top border-secondary-light f-col-2x my-3"></div>

    <!-- start:: collapse custom fields -->
    <div
      data-bs-toggle="collapse"
      data-bs-target="#collapseTypeCustomFields"
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
      data-toggle="collapse"
      data-target="#field-list-4"
      aria-expanded="true"
      aria-controls="field-list-4"
    >
      Custom Fields<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down text-secondary"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
    <div class="collapse" id="collapseTypeCustomFields">
      <div class="card bg-grey-light border-secondary-light mt-3 f-col-2x">
        <div class="d-flex">
          <div class="media-body py-2 px-3">
            <div class="row align-items-center mb-2">
              <div class="col-2">Code</div>
              <div class="col">
                <input
                  type="text"
                  class="form-control form-control-sm shadow-none"
                />
              </div>
            </div>

            <div class="row align-items-center mb-2">
              <div class="col-2">Name</div>
              <div class="col">
                <input
                  type="text"
                  class="form-control form-control-sm shadow-none"
                />
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-2">Type</div>
              <div class="col-5">
                <div class="input-group input-group-sm">
                  <select class="custom-select shadow-none">
                    <option value="0" selected="">String</option>
                    <option value="1">Boolean</option>
                  </select>
                </div>
              </div>
              <div class="col text-right">
                <label
                  class="toggle-input toggle-input-success f-size-14 mb-0 mt-1"
                >
                  <input type="checkbox" checked="" />
                  <span class="input-icon f-icon-20 me-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-circle"
                    >
                      <circle cx="12" cy="12" r="10"></circle></svg
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline
                        points="22 4 12 14.01 9 11.01"
                      ></polyline></svg></span
                  >Required
                </label>
              </div>
            </div>
          </div>
          <div class="px-2 pt-2">
            <div class="btn-group btn-group-vertical">
              <button
                type="button"
                class="
                  btn
                  text-secondary text-dark-hover
                  border-0
                  px-2
                  shadow-none
                  rounded
                  m-0
                  cursor-move
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-move f-icon-18"
                >
                  <polyline points="5 9 2 12 5 15"></polyline>
                  <polyline points="9 5 12 2 15 5"></polyline>
                  <polyline points="15 19 12 22 9 19"></polyline>
                  <polyline points="19 9 22 12 19 15"></polyline>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                </svg>
              </button>
              <button
                type="button"
                class="
                  btn
                  text-secondary text-dark-hover
                  border-0
                  px-2
                  shadow-none
                  rounded
                  m-0
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-copy f-icon-18"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path
                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="
                  btn
                  text-secondary text-dark-hover
                  border-0
                  px-2
                  shadow-none
                  rounded
                  m-0
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trash-2 f-icon-18"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  ></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="my-3 text-right f-col-2x">
        <a class="text-primary" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus f-icon-18 me-1"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line></svg
          >Add fields</a
        >
      </div>
    </div>
    <!-- end:: collapse custom fields -->
  </perfect-scrollbar>
  <!-- end::task type definition  -->
</template>
<script>
import { ref } from "vue";
import FeatherBookmark from "@/icons/FeatherBookmark";
import FeatherChevronDown from "@/icons/FeatherChevronDown";
import FeatherFlag from "@/icons/FeatherFlag";
import FeatherCheck from "@/icons/FeatherCheck";
import FeatherUsers from "@/icons/FeatherUsers";
import FeatherToggleLeft from "@/icons/FeatherToggleLeft";
import FeatherToggleRight from "@/icons/FeatherToggleRight";
import { SWATCH_COLORS } from "@/store/enums/EnumTypes";
import FeatherMapPin from "@/icons/FeatherMapPin";
export default {
  props: ["modelValue", "readOnly"],
  emits: ["update:modelValue"],
  components: {
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
      console.log("update:modelValue", value);
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
