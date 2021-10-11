<template>
  <div v-if="patient" class="media-body ms-n1">
    <div class="text-secondary f-size-13">Patient Name</div>
    <div>{{ patient.firstName }} {{ patient.firstName }}</div>
    <div class="d-flex mt-2">
      <div class="w-50">
        <div class="text-secondary f-size-13">UR number</div>
        <div>{{ patient.urNumber }}</div>
      </div>
      <div class="w-50">
        <div class="text-secondary f-size-13">Date of birth</div>
        <div>{{ patient.birthDate }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: ["task"],
  setup(props) {
    const store = useStore();

    const patient = computed(() =>
      store.getters.getPatientById(props.task.subjectId)
    );

    return { patient };
  },
};
</script>
