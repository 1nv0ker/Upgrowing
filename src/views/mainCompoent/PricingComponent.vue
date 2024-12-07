<template>
    <div class="w-full h-[30rem] flex justify-center pt-[1.2rem] pb-[1.2rem] relative">
        <div class="w-auto h-full flex flex-col pr-[4rem] pt-[1rem]">
            <div class="pl-[1.5rem]">
                <span class="font-bold text-[#999999] text-[1.25rem]">{{t('main.priceCompoent.firstTitle')}}</span>
            </div>
            <div class="flex flex-col justify-evenly pt-[3rem]">
                <div class="w-[30rem] p-[1.5rem] hover:bg-[#131414] flex justify-between" v-for="box in leftBox" @click="onTap(box.defaultValue)">
                    <div class="flex items-center">
                        <span class="font-light text-[1.25rem] text-[white] ">{{t(box.title)}}</span>
                    </div>
                    <div class="flex items-center w-[10rem]">
                        <div class="w-[4.2rem] h-[1.2rem] border-[1px] border-[#D95AFF] flex items-center justify-center">
                            <span class="text-[#D95AFF]">from</span>
                        </div>
                        <span class="pl-[0.5rem] text-[1.25rem] text-[white] font-light">{{t(box.content)}}</span>
                        <span class="text-[#999999] font-light">{{box.unit}}</span>
                    </div>
                </div>
            </div>
        </div>
        <v-divider
            class="ms-3"
            inset
            vertical>
        </v-divider>
        <div class="w-auto h-full flex flex-col pr-[4rem] pl-[4rem] pt-[1rem]">
            <div class="pl-[1.5rem]">
                <span class="font-bold text-[#999999] text-[1.25rem]">{{t('main.priceCompoent.secondTitle')}}</span>
            </div>
            <div class="flex flex-col justify-evenly pt-[3rem]">
                <div class="w-[35rem] p-[1.5rem] hover:bg-[#131414] flex justify-between" v-for="box in middleBox" @click="onTap(box.defaultValue)">
                    <div class="flex items-center">
                        <span class="font-light text-[1.25rem] text-[white] ">{{t(box.title)}}</span>
                    </div>
                    <div class="flex items-center w-[12rem]">
                        <div class="w-[4.2rem] h-[1.2rem] border-[1px] border-[#13FF13] flex items-center justify-center">
                            <span class="text-[#13FF13]">from</span>
                        </div>
                        <span class="pl-[0.5rem] text-[1.25rem] text-[white] font-light">{{t(box.content)}}</span>
                        <span class="text-[#999999] font-light">{{box.unit}}</span>
                    </div>
                </div>
            </div>
        </div>
        <v-divider
            class="ms-3"
            inset
            vertical>
        </v-divider>
        <div class="w-auto h-full flex flex-col pr-[4rem] pl-[4rem] pt-[1rem]">
            <div class="pl-[1.5rem]">
                <span class="font-bold text-[#999999] text-[1.25rem]">{{t('main.priceCompoent.thirdTitle')}}</span>
            </div>
            <div class="w-[35rem] p-[1.5rem] hover:bg-[#131414] flex justify-between pt-[4.5rem]">
                
                <div class="flex items-center">
                    <img src="../../assets/images/9.png"/>
                    <span class="font-light text-[1.25rem] text-[white] pl-[1rem]">{{t('main.priceCompoent.thirdSubtitle')}}</span>
                </div>
            </div>
        </div>
        <div class="absolute top-[2rem] right-[20rem] cursor-pointer" @click="onClose">
            <img src="../../assets//images/11.png" />
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const emit = defineEmits(['onClose'])
    const { t } = useI18n()
    const leftBox = ref([
        {
            title:'main.priceCompoent.firstSubtitle1',
            content:'$6.0',
            unit:'/GB',
            defaultValue:'缺省'
        },
        {
            title:'main.priceCompoent.firstSubtitle2',
            content:'$3.0',
            unit:'/IP',
            defaultValue:'缺省'
        },
        {
            title:'main.priceCompoent.firstSubtitle3',
            content:'$1.0',
            unit:'/IP',
            defaultValue:'缺省'
        },
    ])
    const middleBox = ref([
    {
            title:'main.priceCompoent.secondSubtitle1',
            content:'$1.3',
            unit:'/K Req',
            defaultValue:'缺省'
        },
        {
            title:'main.priceCompoent.secondSubtitle2',
            content:'$1.5',
            unit:'/K Req',
            defaultValue:'缺省'
        },
        {
            title:'main.priceCompoent.secondSubtitle3',
            content:'$0.65',
            unit:'/K Req',
            defaultValue:'缺省'
        },
        {
            title:'main.priceCompoent.secondSubtitle4',
            content:'$1.2',
            unit:'/K Req',
            defaultValue:'缺省'
        },
    ])
    const onTap = (defaultValue:string) => {
        console.log(defaultValue)
    }
    const onClose = () => {
        emit('onClose')
    }
</script>