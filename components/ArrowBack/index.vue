<template >
    <div v-if="visible === true" class="mt-6 ml-4 absolute left-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 pt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        :style="{ color: color }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ArrowBack",
    components: {},
    props: {
      visible: { type: Boolean, default: false },
      color: { type: String, default: "black" },
    },
    methods: {},
  });
  </script>
  
  