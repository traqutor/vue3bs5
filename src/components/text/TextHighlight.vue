<template>
  <span v-html="getHighlightedText()"></span>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  props: {
    text: {type: String}
  },
  setup(props) {
    const store = useStore();
    const textToHighlight = computed(() => store.getters.getTextToSearchParticipants);

    function getHighlightedText() {
      const textToFind = textToHighlight.value;
      const regex = new RegExp(textToFind, 'gi');

      let oldText = props.text
      if (oldText) {
        oldText = oldText.replace(/(<mark class="highlight">|<\/mark>)/gim, '');
        return oldText.replace(regex, '<mark class="highlight">$&</mark>');
      }
      return oldText;
    }

    return {
      getHighlightedText
    }
  }
}
</script>
