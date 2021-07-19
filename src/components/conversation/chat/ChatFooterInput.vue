<template>
  <div class="chat-section-footer mt-2">
    <div class="steps-section">
      <div id="chat-footer-input-textarea">
        <div class="d-flex">
          <div class="media-body me-3">
            <div
              class="
                input-group
                h-100
                position-relative
                dialog-input-group
                has-transition
                border border-grey-middle
                rounded
                bg-light
              "
            >
              <div class="input-group-prepend">
                <div
                  class="btn-group dropup bg-transparent dropdown"
                  role="group"
                >
                  <button
                    type="button"
                    class="
                      btn
                      d-inline-flex
                      align-items-center
                      text-secondary text-dark-hover
                      border-0
                      pb-10px
                      btn-options
                      shadow-none
                    "
                    id="dropdownMenuChatInputTextAreaAppendMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <feather-more-vertical class="f-icon-22" />
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-sm shadow"
                    aria-labelledby="dropdownMenuChatInputTextAreaAppendMenu"
                  >
                    <button
                      class="dropdown-item"
                      onclick="document.querySelector('.inputFile').click();"
                    >
                      Add Media
                    </button>
                    <input class="inputFile d-none" type="file" />

                    <a class="dropdown-item" href="#">Add Body Map</a>
                    <a class="dropdown-item dialog-ack-contol" href="#"
                      >Request Acknowledgement</a
                    >
                  </div>
                </div>
              </div>

              <textarea
                class="
                  form-control
                  dialog-input-textarea
                  chat-textarea-control
                  f-size-14
                  bg-transparent
                  border-0
                  rounded-0
                  is-keyup-group-control
                  shadow-none
                  ps-2
                  autoresize-textarea
                  no-resize
                "
                rows="1"
                placeholder="Type a message ..."
                style="height: 42px; overflow-y: hidden"
              ></textarea>

              <div
                class="
                  input-group-append
                  bg-transparent
                  input-acknowledgement
                  is-hidden
                "
              >
                <button
                  class="
                    btn
                    text-primary
                    px-2
                    d-inline-flex
                    align-items-end
                    pb-2
                    text-primary-hover
                    border-0
                    dialog-ack-contol
                    shadow-none
                    rounded-0
                  "
                  type="button"
                >
                  <feather-point-square class="f-icon-26" />
                </button>
              </div>
              <div class="input-group-append bg-transparent">
                <div class="btn-group dropdown">
                  <button
                    type="button"
                    class="
                      btn
                      text-secondary
                      px-2
                      d-inline-flex
                      align-items-end
                      pb-2
                      text-dark-hover
                      border-0
                      shadow-none
                      rounded-0
                    "
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <feather-smile class="f-icon-26" />
                  </button>
                </div>
              </div>

              <div class="input-group-append bg-transparent">
                <button
                  class="
                    btn
                    text-secondary
                    ps-2
                    d-inline-flex
                    align-items-end
                    pb-2
                    text-primary-hover
                    border-0
                    shadow-none
                    rounded-0
                    step-tabpanel-open
                    todo-tabpanel-open
                  "
                  data-slide-tabpanel="#dialogTempsList"
                  data-todo="temp"
                  data-outside="true"
                  href="#tempAddTabPanel"
                >
                  <feather-paper class="f-icon-24" />
                </button>
              </div>
            </div>
          </div>

          <div class="align-self-end btn-group-send">
            <div>
              <button
                id="dialogSendControl"
                class="
                  btn btn-circle
                  rounded
                  f-icon-42
                  btn-primary
                  border-0
                  shadow-none
                "
                type="button"
              >
                <feather-arrow-up class="f-icon-22" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <chat-record-message v-if="false"></chat-record-message>
      <chat-play-message v-if="false"></chat-play-message>
    </div>
  </div>
</template>
<script>
import FeatherPointSquare from "@/icons/FeatherPointSquare";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherSmile from "@/icons/FeatherSmile";
import FeatherMic from "@/icons/FeatherMic";
import FeatherArrowUp from "@/icons/FeatherArrowUp";
import FeatherPaper from "@/icons/FeatherPaper";
import ChatRecordMessage from "@/components/conversation/chat/ChatRecordMessage";
import ChatPlayMessage from "@/components/conversation/chat/ChatPlayMessage";

export default {
  components: {
    ChatPlayMessage,
    ChatRecordMessage,
    FeatherPaper,
    FeatherArrowUp,
    FeatherMic,
    FeatherSmile,
    FeatherMoreVertical,
    FeatherPointSquare,
  },
};
</script>
