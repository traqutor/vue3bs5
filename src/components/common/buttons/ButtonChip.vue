<template>
  <div class="btn btn-chip" :class="active && 'active'" >
    <span class="label"><slot></slot></span>
  </div>
</template>
<script>
export default {
  props: ["active"],
};
</script>
<style lang="scss">
@import "../../../assets/scss/colors";

.btn-chip {
  /* chip */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 14px;

  height: 35px;

  border: 1px solid $grey;
  box-sizing: border-box;
  border-radius: 20px;
}

.btn-chip:hover {
  border: 1px solid #000000;
  color: #000000;
}

.btn-chip.active {
  background-color: #000000;
  color: white;
}

.btn-chip .label {
  height: 19px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}

.chips-selection-frame {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 10px 10px 0px;
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
