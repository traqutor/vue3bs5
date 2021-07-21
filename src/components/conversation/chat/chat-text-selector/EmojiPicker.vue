<template>
  <div class="dropdown-menu p-3" aria-labelledby="dropdownEmojiMenuButtonId">
    <div>
      <div class="input-group input-group-sm filter-control-group flex-grow-1">
        <input
          v-model="search"
          type="text"
          class="form-control bg-light shadow-none"
          placeholder="Search"
        />
      </div>
    </div>
    <perfect-scrollbar class="emoji-wrapper">
      <div v-for="(emojiGroup, category) in emojis" :key="category">
        <span class="f-size-13 text-secondary">{{ category }}</span>
        <div class="emoji-line text-wrap">
          <span
            class="f-size-26 ign-pointer"
            v-for="(emoji, emojiName) in emojiGroup"
            :key="emojiName"
            @click="onInsert(emoji)"
            :title="emojiName"
            >{{ emoji }}
          </span>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import emojis from "@/const/emojis";

export default {
  name: "EmojiPicker",
  data() {
    return {
      search: null,
      emojiTable: emojis,
    };
  },
  methods: {
    onInsert(emoji) {
      this.$emit("onInsert", emoji);
    },
  },
  computed: {
    emojis() {
      if (this.search) {
        const obj = {};
        for (const category in this.emojiTable) {
          obj[category] = {};
          for (const emoji in this.emojiTable[category]) {
            if (new RegExp(`.*${this.search}.*`).test(emoji)) {
              obj[category][emoji] = this.emojiTable[category][emoji];
            }
          }
          if (Object.keys(obj[category]).length === 0) {
            delete obj[category];
          }
        }
        return obj;
      }
      return this.emojiTable;
    },
  },
};
</script>
<style scoped>
.emoji-wrapper {
  height: 459px;
  max-height: 459px;
  width: 338px;
}
.emoji-line {
  max-width: 338px;
}
</style>
