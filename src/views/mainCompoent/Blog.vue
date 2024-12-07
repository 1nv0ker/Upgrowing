<template>
    <div class="w-full h-full flex">
        <div class="w-1/2 h-full border-r-[1px] border-r-[#DCDFE0] pr-[2rem]">
            <div class="h-[4rem]">
                <span class="text-[#333333] text-[1.5rem] font-medium">{{t('main.community.blog.recent')}}</span>
            </div>
            <div class="w-full h-[27rem] rounded-[0.75rem] bg-[#333333] relative">
                <div class="absolute h-[2rem] w-[6rem] bg-[#FF0000] top-[0.5rem] left-[0.5rem] flex justify-center items-center">
                    <span class="text-[white] text-[1rem]">1 min. read</span>
                </div>
            </div>
            <div class="pt-[2rem]">
                <span class="text-[2rem] text-[#333333] font-medium">Master VBA Web Scraping for Excel: A 2024 Guide</span>
            </div>
            <div class="flex items-center pt-[1rem]">
                <div class="w-[2.8rem] h-[2.8rem] rounded-full bg-[black]"></div>
                <span class="text-[1rem] text-[#2997FE] font-medium pl-[1rem]">Maltoniskin</span>
                <div class="w-[1px] ml-[1rem] mr-[1rem] h-[1rem] bg-[black]"></div>
                <span class="text-[#999999] text-[1rem] font-light">May 27, 2024</span>
            </div>
            <div class="pt-[2rem]">
                <span class="text-[#333333] text-[1.2rem] font-light">Excel is an incredibly powerful data management and analysis tool. But did you know that it can also...</span>
            </div>
        </div>
        <div class="w-1/2 h-full">
            <div class="h-[4rem] border-b-[1px] border-[#DCDFE0] ">
                <span class="text-[#333333] text-[1.5rem] font-medium pl-[2rem]">{{t('main.community.blog.popular')}}</span>
            </div>
            <div class="overflow-auto w-full pl-[1rem] h-[50rem] pr-[1rem]">
                <div v-for="blog in blogs" class="flex h-[12rem] w-full pt-[1rem] pl-[2rem] pr-[2rem] pb-[1rem] bg-[#F2F3F5] mt-[1.2rem]">
                    <div class="w-[7.5rem] h-[7.5rem] bg-[black] rounded-[0.75rem]">
                        
                    </div>
                    <div class="pl-[1rem] pt-[1rem]">
                        <span class="text-[#333333] text-[1.2rem] font-medium">{{blog.title}}</span>
                        <div class="flex pt-[1rem] items-center">
                            <span class="text-[#2997FE] text-[1rem] font-medium">{{ blog.user }}</span>
                            <div class="w-[1px] h-[1rem] ml-[1rem] mr-[1rem] bg-[#131414]"></div>
                            <span class="text-[#999999] text-[1rem] font-light">{{blog.date}}</span>
                        </div>
                        <div class="w-[7rem] h-[2rem] bg-[#DCDFE0] mt-[1rem] flex justify-center items-center">
                            <span class="text-[#333333] text-[1rem] font-medium">{{ blog.time }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const blogs = ref([
        {
            image: '',
            title: 'How to Send a cURL POST Request - Extensive...',
            date: 'May 27, 2024',
            user: 'Maltoniskin',
            time:'7 min. read'
        },
        {
            image: '',
            title: 'How to Send a cURL POST Request - Extensive...',
            date: 'May 27, 2024',
            user: 'Maltoniskin',
            time:'7 min. read'
        },
        {
            image: '',
            title: 'How to Send a cURL POST Request - Extensive...',
            date: 'May 27, 2024',
            user: 'Maltoniskin',
            time:'7 min. read'
        },
        {
            image: '',
            title: 'How to Send a cURL POST Request - Extensive...',
            date: 'May 27, 2024',
            user: 'Maltoniskin',
            time:'7 min. read'
        },
        {
            image: '',
            title: 'How to Send a cURL POST Request - Extensive...',
            date: 'May 27, 2024',
            user: 'Maltoniskin',
            time:'7 min. read'
        }
    ])
    const { t } = useI18n()
</script>