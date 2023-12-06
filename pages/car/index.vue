<template>
    <Loading :visible="loading"></Loading>
    <!-- Header click buttons -->
    <div class="w-full fixed top-0">
        <div v-if="step != 0">
                    <ArrowBack
                :color="'gray'"
                :visible="true"
                @click="backArrow()"
            >
            </ArrowBack>    
        </div>   
        <div class="flex justify-between w-full my-2">
            <backNative :color="step != 0 ? false : true" :visible="true">

            </backNative>
        </div> 
    </div>
   <!-- 1 Page -->
   <section v-if="step == 0">
    <!-- Header -->
    <div class="h-52 pt-16 bg-gradient-to-br p-4 from-sky-500 to-blue-800 shadow-lg rounded-b-3xl">
        <img
            class="w-16 h-16 mx-auto"
            src="../../assets//images//car1.png"
            alt=""
        />
        <p className="text-center text-white font-medium text-sm uppercase pt-4">Авто зам ашигласны төлбөр</p>
    </div>
    <!-- Search input -->
    <div class="grid grid-cols-1 text-center place-items-center gap-20">
        <div class="flex flex-col pt-40 place-items-center gap-5">
            <input className="p-2 border border-r-0 placeholder:lowercase shadow-b-sm text-center text-gray-700 uppercase rounded-lg border-gray-200" type="text" maxlength="7" v-model="vehichle" placeholder="Улсын дугаар"/>
            <input className="p-2 border border-r-0 placeholder:lowercase shadow-b-sm text-center text-gray-700 uppercase rounded-lg border-gray-200"  type="text" maxlength="10" v-model="regNo" placeholder="Регистрийн дугаар">
            <button  @click="searchVehicle()" className="p-2 w-1/4 border border-r-0 shadow-b-sm bg-gradient-to-br from-sky-500 to-blue-800 text-center font-bold text-gray-700 uppercase rounded-lg border-gray-200">
            <svg
                class="w-6 h-6 ml-2 pl"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
            </svg>
            </button>
        </div>
    </div>
   </section>
   <!-- Fee Information -->
   <section v-if="step == 1">
    <div className="h-44 top-0 p-4 pt-8">
        <div className="text-center font-bold text-xs">
            Замын хураамж
        </div>
        <div className="flex flex-row mt-4">
            <div className="flex mx-auto flex-col bg-white w-auto shadow-md mt-2 rounded-2xl text-center font-medium text-xs p-6">
                <h4 className="font-bold text-black">Улсан дугаар</h4>
                <p className="text-gray-500 uppercase font-bold mt-2">{{ vehichle }}</p>
            </div>
            <div className="flex flex-col mx-auto bg-white w-auto shadow-md mt-2 rounded-2xl text-center font-medium text-xs p-6">
                <h4 className="font-bold text-black">Машин загвар</h4>
                <p className="text-gray-500 uppercase font-bold mt-2"></p>
            </div>
        </div>
    </div>
    <!-- Fee information-2 -->
    <div className="h-full bg-gradient-to-br from-sky-500 to-blue-800 rounded-t-3xl fixed w-full">
        <div class="mx-auto">
            <img
                className="z-0 mx-auto w-20 mt-32"
                src="../../assets/images/car1.png" 
                />
            <div className="absolute right-0 top-36 left-0 text-center backdrop-fiter backdrop-saturate-150 bg-black bg-opacity-40 font-base text-sm text-white mx-auto py-2.5 text-center shadow-2xl h-64 w-4/5">
            <p className="mt-28 text-lg p-4">Дээрх тээврийн хэрэгсэлд бүртгэгдсэн хураамж байхгүй байна.</p>

            </div>
        </div>
    </div>
   </section>
</template>
<script lang="ts">
// import { BackNative, type Loading } from '#build/components';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
    },
    data() {
        return {
            loading: false as boolean,
            step: 0 as number,
            vehichle: "1917УНЧ" as string,
            carData: null,
            invoice: null as any,
            itemData: [] as any,
            ebarimt: null as any,
            regNo: "" as string,
        };
    },
    methods: {
        // back screen
        backArrow() {
            this.step = this.step - 1;
            if (this.step == 0) {
                this.vehichle = "";
                this.carData = null;
            }
            if (this.step == 1) {
                this.invoice = null;
                this.itemData = [];
                this.ebarimt = null;
            }
        },
        // Search car
        searchVehicle(){
            this.step = 1;
        }
    },
   
})
</script>
