<template>
  <div
    class="absolute z-50 inset-0 bg-gray-300 bg-opacity-50"
    v-if="visible === true"
  >
  <div 
  class="
        flex
        items-center
        justify-center
        w-full
        h-full
        bg-loader bg-cover bg-center bg-no-repeat
      "
  >
  <div class="flex-col space-y-1">
    <div class="flex justify-center animate-bounce">
      <img src="../../assets/images/logo-black.png" alt="Gerege Systems" class="w-14 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  components: {},
  props: {
    visible: { type: Boolean, default: false },
  },
  methods: {},
});
</script>