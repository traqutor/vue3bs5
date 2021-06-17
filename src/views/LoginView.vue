<template>
  <div class="container-fluid splash-image-panel">
    <div class="ign-grid-center">
      <div class="sign-in-form">
        <img
            class="sign-company-logo"
            data-tenant-branding-logo="true"
            src="https://secure.aadcdn.microsoftonline-p.com/447973e2-4lvfxi2jlmwvkyxdgkhbcfabjazk-ycbaeyyhr2nzkw/logintenantbranding/0/bannerlogo?ts=637391782718144813"
            alt="Company Logo"
        />

        <div class="sign-intro">
          Sign in with your User name
        </div>

        <form @submit.prevent="onLogIn">
          <div class="mb-3">
            <input
                v-model="authData.username"
                required
                class="form-control"
                type="text"
                placeholder="User name"
            />
          </div>
          <div class="mb-3">
            <input
                v-model="authData.password"
                required
                class="form-control"
                type="password"
                placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <button
                type="submit"
                :disabled="isLoadingLogin"
                class="btn btn-primary align-items-center"
            >
              SignIn

              <div v-if="isLoadingLogin" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
          <div class="form-group">
            <small v-if="getErrors" id="passwordHelp" class="text-danger">
              {{ getErrors }}
            </small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      authData: {
        username: "",
        password: ""
      },
      imageNumber: 0
    };
  },
  methods: {
    onLogIn() {
      this.$store.dispatch("onLogin", this.authData).then(() => {
        this.$router.push({name: "Conversations"});
      });
    }
  },
  computed: {
    ...mapGetters({
      getErrors: "getErrors",
      isLoadingLogin: "isLoadingLogin"
    })
  },
};
</script>

<style scoped>
.ign-grid-center {
  display: grid;
  height: 100vh;
  place-items: center;
}

.splash-image-panel {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-image: url(https://secure.aadcdn.microsoftonline-p.com/447973e2-4lvfxi2jlmwvkyxdgkhbcfabjazk-ycbaeyyhr2nzkw/logintenantbranding/0/illustration?ts=637391759051677859);
}

.sign-in-form {
  padding: 40px 30px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.sign-intro {
  font-size: 20px;
  padding-bottom: 12px;
}

.sign-company-logo {
  margin-left: 100px;
  padding-bottom: 12px;
}
</style>

