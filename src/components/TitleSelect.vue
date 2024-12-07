<template>
    <div class="flex items-center cursor-pointer h-full" @click="onOpen">
        <span class="text-[#B8B8B8] text-[1.2rem]" :style="isOpen?'color:#00FFFF':''">{{ t(title) }}</span>
        <img :src="isOpen?upIcon:downIcon" class="w-[1.25rem] h-[0.7rem] ml-[0.8rem]"/>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, watch } from 'vue'
    import { useI18n } from 'vue-i18n'
    import upIcon from '../assets/images/up.png'
    import downIcon from '../assets/images/down.png'
    const { t } = useI18n()
    const isOpen = ref(false)
    const props = defineProps({
        title:{
            type:String,
            default:''
        },
        currentTitle: {
            type:String,
            default:''
        }
    })
    const emit = defineEmits(['isOpen'])
    const title = computed(() =>props.title)
    watch(()=>props.currentTitle, (newtitle) => {
        if(newtitle !== title.value) {
            isOpen.value = false
        }
    })
    const onOpen = () => {
        isOpen.value = !isOpen.value
        emit('isOpen', isOpen.value, title.value)
    }
    defineExpose({
        isOpen
    })
</script>