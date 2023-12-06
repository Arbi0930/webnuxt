<template >
    <div
      v-if="visible === true"
      class="mt-6 mr-4 absolute right-2"
      @click="backNative()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.556"
        height="15.556"
        viewBox="0 0 15.556 15.556"
      >
        <g
          id="Group_1919"
          data-name="Group 1919"
          transform="translate(-383.189 -61.725)"
        >
          <g
            v-if="color == false"
            id="Group_1918"
            data-name="Group 1918"
            transform="translate(20.467)"
          >
            <rect
              id="Rectangle_418"
              data-name="Rectangle 418"
              width="19"
              height="3"
              rx="1.5"
              transform="translate(364.843 61.725) rotate(45)"
              fill="#696b7b"
            />
            <rect
              id="Rectangle_419"
              data-name="Rectangle 419"
              width="19"
              height="3"
              rx="1.5"
              transform="translate(362.722 75.16) rotate(-45)"
              fill="#696b7b"
            />
          </g>
          <g
            v-if="color == true"
            id="Group_1918"
            data-name="Group 1918"
            transform="translate(20.467)"
          >
            <rect
              id="Rectangle_418"
              data-name="Rectangle 418"
              width="19"
              height="3"
              rx="1.5"
              transform="translate(364.843 61.725) rotate(45)"
              fill="#ffffff"
            />
            <rect
              id="Rectangle_419"
              data-name="Rectangle 419"
              width="19"
              height="3"
              rx="1.5"
              transform="translate(362.722 75.16) rotate(-45)"
              fill="#ffffff"
            />
          </g>
        </g>
      </svg>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "BackNative",
    components: {},
    props: {
      visible: { type: Boolean, default: false },
      color: { type: Boolean, default: false },
    },
    
    methods: {
      
      backNative() {
        console.log('back1')
      },
    },
  });
  </script>
  
  