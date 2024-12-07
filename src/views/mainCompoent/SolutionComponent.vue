<template>
    <div class="w-full h-[35rem] pt-[1.2rem] pb-[1.2rem] relative">
        <div class="w-auto  flex flex-col pr-[4rem] pt-[2rem] pl-[20rem]">
            <div class="pl-[2rem] h-[4rem]">
                <span class="font-bold text-[#999999] text-[1.25rem]">{{t('main.solutionComponent.title')}}</span>
            </div>
            <div class="flex pl-[0.5rem]">
                <div class="flex flex-col justify-evenly">
                    <div class="w-[15rem] p-[1.5rem] hover:bg-[#131414] flex justify-between" v-for="box in leftBox" @click="onTap(box.defaultValue)">
                        <div class="flex items-center">
                            <span class="font-light text-[1.25rem] text-[white] ">{{t(box.content)}}</span>
                        </div>
                    </div>
                </div>
                <v-divider
                    class="ms-3"
                    inset
                    vertical>
                </v-divider>
                    <div class="flex flex-col justify-evenly pl-[4rem]">
                        <div class="w-[25rem] p-[1.5rem] hover:bg-[#131414] flex justify-between" v-for="box in rightBox" @click="onTap(box.defaultValue)">
                            <div class="flex items-center">
                                <span class="font-light text-[1.25rem] text-[white] ">{{t(box.content)}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        <div class="absolute top-[2rem] right-[20rem] cursor-pointer" @click="onClose">
            <img src="../../assets//images/11.png" />
        </div>
        <div class="pl-[22rem] pt-[1rem]">
            <div class="border-[1px] border-[white] rounded-[2px] w-[13rem] h-[3.2rem] flex items-center justify-center cursor-pointer">
                <span class="font-bold text-[1.25rem]">{{t('main.solutionComponent.bottomContent')}}</span>
            </div>
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
            content:'main.solutionComponent.firstContent',
            defaultValue:'缺省'
        },
        {
            content:'main.solutionComponent.secondContent',
            defaultValue:'缺省'
        },
        {
            content:'main.solutionComponent.thirdContent',
            defaultValue:'缺省'
        },
        {
            content:'main.solutionComponent.fourthContent',
            defaultValue:'缺省'
        }
    ])
    const rightBox = ref([
        {
            content:'main.solutionComponent.fifthContent',
            defaultValue:'缺省'
        },
        {
            content:'main.solutionComponent.sixthContent',
            defaultValue:'缺省'
        },
        {
            content:'main.solutionComponent.seventhContent',
            defaultValue:'缺省'
        },
        {
            content:'main.solutionComponent.eighthContent',
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