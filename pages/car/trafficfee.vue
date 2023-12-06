<template>
    <Loader :visible="loading"></Loader>
    <div class="w-full fixed top-0">
        <div v-if="step != 0">
            <ArrowBack :color="'gray'" :visible="true" @click="ArrowBack">

            </ArrowBack>
        </div>
        <div class="flex justify-between w-full my-2">
            <BackNative>

            </BackNative>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        
    },
    data(){
        return{
            loading: false as boolean,
            step: 0 as number,
        }
    },
    methods: {
        ArrowBack(){
            if(this.step == 1){
                console.log(1);
            }
        }
    }
})
</script>
