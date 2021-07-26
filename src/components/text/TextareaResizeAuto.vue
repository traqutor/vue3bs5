<script>
export default {
  name: "TextareaResizeAuto",
  methods: {
    resize(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$el) {
        console.log("TextareaResizeAuto", this);
        this.$el.setAttribute("style", "height", `${this.$el.scrollHeight}px`);
      }
    });
  },
  render() {
    return this.$slots.default({
      resize: this.resize,
    });
  },
};
</script>
