<template>
    <div class="w-full h-[25rem] flex pt-[1.2rem] pb-[1.2rem] relative">
        <div class="w-auto h-full flex flex-col justify-evenly pr-[4rem]">
            <div class="h-[8rem] p-[1.2rem] ml-[30rem] hover:bg-[#131414] flex " v-for="box in leftBox" @click="onTap(box.defaultValue)">
                <div class="flex items-center">
                    <img :src="box.icon"/>
                </div>
                <div class="flex flex-col justify-center pl-[0.5rem]" >
                    <span class=" font-bold text-[1.25rem]">{{t(box.title)}}</span>
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
    import firstIcon from '../../assets/images/6.png'
    import secondIcon from '../../assets/images/7.png'
    import thirdIcon from '../../assets/images/8.png'
    const emit = defineEmits(['onClose'])
    const { t } = useI18n()
    const leftBox = ref([
        {
            title:'main.proxyComponent.firstTitle',
            content:'main.proxyComponent.firstContent',
            defaultValue:'缺省',
            icon:firstIcon
        },
        {
            title:'main.proxyComponent.secondTitle',
            content:'main.proxyComponent.secondContent',
            defaultValue:'缺省',
            icon: secondIcon
        },
        {
            title:'main.proxyComponent.thirdTitle',
            content:'main.proxyComponent.thirdContent',
            defaultValue:'缺省',
            icon: thirdIcon
        }
    ])
    const onTap = (defaultValue:string) => {
        console.log(defaultValue)
    }
    const onClose = () => {
        emit('onClose')
    }
</script>