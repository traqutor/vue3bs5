<template>
  <div class="d-flex vw-100 vh-100">
    <!--  start:: left part form   -->
    <div class="d-col-1 d-flex flex-column">
      <div class="d-flex align-items-center p-4">
        <img class="f-icon-52 mr-2" src="../../public/images/logo.svg" alt="" />
        <img
          style="height: 32px"
          src="../../public/images/logo-1-dark.svg"
          alt=""
        />
      </div>

      <div class="d-flex align-items-center justify-content-center flex-fill">
        <div class="w-col-xl steps-section">
          <form v-if="viewMode === 'login'" @submit.prevent="onLogIn">
            <div class="pb-3">
              <div class="h1 text-primary-dark">Welcome to Olinqua</div>
              <div class="text-secondary f-size-18">
                Helping staff to help patients
              </div>
            </div>

            <div class="input-group input-group-lg mt-5">
              <div class="input-group-prepend">
                <span class="input-group-text bg-light text-muted">
                  <feather-user class="f-icon-20" />
                </span>
              </div>
              <input
                v-model="authData.username"
                @input="onInputChange"
                type="text"
                class="
                  form-control
                  bg-light
                  border-left-0
                  shadow-none
                  pl-0
                  f-size-16
                "
                placeholder="Username"
                required=""
                autofocus=""
              />
            </div>

            <div class="input-group input-group-lg mt-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-light text-muted">
                  <feather-unlock class="f-icon-20" />
                </span>
              </div>
              <input
                v-model="authData.password"
                @input="onInputChange"
                type="password"
                class="
                  form-control
                  bg-light
                  border-left-0
                  shadow-none
                  pl-0
                  f-size-16
                "
                placeholder="Password"
                required=""
              />
            </div>

            <button
              type="submit"
              :disabled="
                isLoadingLogin || !(authData.username && authData.password)
              "
              class="btn btn-primary btn-lg btn-block mt-4 f-size-16"
            >
              <div
                v-if="isLoadingLogin"
                class="spinner-border spinner-border-sm"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>

              Login
            </button>

            <div class="form-group mt-3">
              <small v-if="errors" id="passwordHelp" class="text-danger">
                {{ errors }}
              </small>
            </div>

            <div class="border-top border-secondary-light mb-4 mt-5"></div>

            <div class="d-flex align-items-center f-size-15">
              <div class="text-secondary">
                Don't have an account?
                <a
                  @click="viewMode = 'create'"
                  class="ms-1 text-decoration-none ign-pointer"
                  >Register</a
                >
              </div>
              <div class="ms-auto text-center">
                <a
                  @click="viewMode = 'reset'"
                  class="text-decoration-none ign-pointer"
                  >Forgot password?</a
                >
              </div>
            </div>
          </form>

          <form v-if="viewMode === 'create'">
            <div class="pb-3">
              <div class="h1 text-primary-dark">Create account</div>
              <div class="text-secondary f-size-18">
                Enter details to create your account
              </div>
            </div>

            <div class="input-group input-group-lg mt-5">
              <div class="input-group-prepend">
                <span class="input-group-text bg-light text-muted">
                  <feather-user class="f-icon-20" />
                </span>
              </div>
              <input
                type="email"
                class="
                  form-control
                  bg-light
                  border-left-0
                  shadow-none
                  pl-0
                  f-size-16
                "
                placeholder="Full Name"
                required=""
              />
            </div>

            <div class="input-group input-group-lg mt-4">
              <div class="input-group-prepend">
                <span class="input-group-text bg-light text-muted">
                  <feather-at-sign class="f-icon-20" />
                </span>
              </div>
              <input
                type="email"
                class="
                  form-control
                  bg-light
                  border-left-0
                  shadow-none
                  pl-0
                  f-size-16
                "
                placeholder="Email"
                required=""
              />
            </div>

            <button
              type="button"
              class="btn btn-primary btn-lg btn-block mt-4 f-size-16"
              disabled=""
            >
              Continue
            </button>

            <div class="border-top border-secondary-light mb-4 mt-5"></div>

            <div class="d-flex align-items-center f-size-15">
              <div class="text-secondary">
                Already have account?
                <a
                  @click="viewMode = 'login'"
                  class="ml-1 text-decoration-none ign-pointer"
                  >Login</a
                >
              </div>
            </div>
          </form>

          <form v-if="viewMode === 'reset'">
            <div class="pb-3">
              <div class="h1 text-primary-dark">Reset password</div>
              <div class="text-secondary f-size-18">
                Enter your email address and we'll send you an email with
                instructions to reset your password
              </div>
            </div>

            <div class="input-group input-group-lg mt-5">
              <div class="input-group-prepend">
                <span class="input-group-text bg-light text-muted">
                  <feather-at-sign class="f-icon-20" />
                </span>
              </div>
              <input
                type="email"
                class="
                  form-control
                  bg-light
                  border-left-0
                  shadow-none
                  pl-0
                  f-size-16
                "
                placeholder="Email"
                required=""
              />
            </div>

            <button
              type="button"
              class="btn btn-primary btn-lg btn-block mt-4 f-size-16"
              disabled=""
            >
              Send
            </button>

            <div class="border-top border-secondary-light mb-4 mt-5"></div>

            <div class="d-flex align-items-center f-size-15">
              <div class="text-secondary">
                Already registered?
                <a
                  @click="viewMode = 'login'"
                  class="ml-1 text-decoration-none ign-pointer"
                  >Login here</a
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--  end:: left part form   -->

    <!--  start:: right part picture   -->
    <div class="d-col-1 d-flex steps-section">
      <div v-if="viewMode === 'login'" class="flex-fill">
        <div
          class="d-flex align-items-center justify-content-center h-100 w-100"
        >
          <img src="images/login/img-dentist-2.png" class="mw-100" />
        </div>
      </div>

      <div v-if="viewMode === 'create'" class="flex-fill">
        <div
          class="d-flex align-items-center justify-content-center h-100 w-100"
        >
          <img src="images/login/img-dentist-3.png" class="mw-100" />
        </div>
      </div>

      <div v-if="viewMode === 'reset'" class="flex-fill">
        <div
          class="d-flex align-items-center justify-content-center h-100 w-100"
        >
          <img src="images/login/img-dentist-1.png" class="mw-100" />
        </div>
      </div>
    </div>
    <!--  end:: right part picture   -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FeatherUser from "@/icons/FeatherUser";
import FeatherUnlock from "@/icons/FeatherUnlock";
import FeatherAtSign from "@/icons/FeatherAtSign";
import { computed, ref } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  name: "Login",
  components: { FeatherAtSign, FeatherUnlock, FeatherUser },
  setup() {
    const store = useStore();
    const router = useRouter();

    const authData = ref({
      username: "",
      password: "",
    });
    const viewMode = ref("login");

    const isLoadingLogin = computed(() => store.getters.getIsLoadingLogin);
    const errors = computed(() => store.getters.getErrors);

    const onInputChange = () => {
      store.commit(Mutations.setLoggedError, null);
    };

    const onLogIn = () => {
      store.dispatch("onLogin", authData.value).then(() => {
        router.push({ name: "Conversations" });
      });
    };

    return {
      authData,
      viewMode,
      isLoadingLogin,
      errors,
      onLogIn,
      onInputChange,
    };
  },
};
</script>
