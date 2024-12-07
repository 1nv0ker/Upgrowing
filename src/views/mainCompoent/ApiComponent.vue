<template>
    <div class="w-full h-[20rem] flex justify-center pt-[1.2rem] pb-[1.2rem] relative">
        <div class="w-auto h-full flex flex-col justify-evenly pr-[4rem]">
            <div class="w-full h-[8rem] p-[1.2rem] hover:bg-[#131414] flex flex-col justify-evenly " v-for="box in leftBox" @click="onTap(box.defaultValue)">
                <div class="flex items-center" >
                    <div class="w-[0.6rem] h-[0.6rem] rounded-[0.3rem] bg-[#2997FE]"></div>
                    <span class="pl-[0.6rem] font-bold text-[1.25rem]">{{t(box.title)}}</span>
                </div>
                <div>
                    <span class="text-[1.25rem] text-[#999999] font-light">{{t(box.content)}}</span>
                </div>
            </div>
        </div>
        <v-divider
            class="ms-3"
            inset
            vertical>
        </v-divider>
        <div class="w-auto h-full flex flex-col justify-evenly pl-[4rem]">
            <div class="w-full h-[8rem] p-[1.2rem] hover:bg-[#131414] flex flex-col justify-evenly " v-for="box in rightBox" @click="onTap(box.defaultValue)">
                <div class="flex items-center" >
                    <div class="w-[0.6rem] h-[0.6rem] rounded-[0.3rem] bg-[#2997FE]"></div>
                    <span class="pl-[0.6rem] font-bold text-[1.25rem]">{{t(box.title)}}</span>
                </div>
                <div>
                    <span class="text-[1.25rem] text-[#999999] font-light">{{t(box.content)}}</span>
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
            title:'main.apiComponent.firstTitle',
            content:'main.apiComponent.firstContent',
            defaultValue:'缺省'
        },
        {
            title:'main.apiComponent.secondTitle',
            content:'main.apiComponent.secondContent',
            defaultValue:'缺省'
        }
    ])
    const rightBox = ref([
    {
            title:'main.apiComponent.thirdTitle',
            content:'main.apiComponent.thirdContent',
            defaultValue:'缺省'
        },
        {
            title:'main.apiComponent.fourthTitle',
            content:'main.apiComponent.fourthContent',
            defaultValue:'缺省'
        }
    ])
    const onTap = (defaultValue:string) => {
        console.log(defaultValue)
    }
    const onClose = () => {
        emit('onClose')
    }
</script>