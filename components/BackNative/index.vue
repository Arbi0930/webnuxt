
<template>
    <div  class="mt-6 mr-4 absolute right-2" @click="backNative()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "BackNative",
    components: {},
    props: {

    },
    methods:{
        backNative(){
            // const router = useRouter();

            // router.push('/')
        }
    }

})
</script>
