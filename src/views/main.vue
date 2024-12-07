<template>
    <div class="w-full h-dvh scroll-auto">
        <!-- 第一个段落 -->
        <div class="w-screen h-[80rem] border-1 bg-black relative">
            <div :style="titleSelectStatus?'bottom:0;background:rgba(19,29,29, 0.8);z-index:999':''" class="w-full fixed top-0 bg-[rgb(19,29,29)] z-10">
                <div class="w-full flex justify-between bg-[#131414]">
                    <div class="pl-[14rem] pt-[3rem] h-[11rem] flex pb-[3rem]">
                        <div class="flex items-center h-full">
                            <img src="../assets/images/logo.png" />
                            <span class="pl-[0.8rem] text-[1.5rem] text-white">Upgrowing</span>
                        </div>
                        <div class="pl-[6rem] h-full">
                            <TitleSelect :title="'main.api'" @isOpen="onOpenTitle" :currentTitle="currentTitle" ref="titleselect" />
                        </div>
                        <div class="pl-[6rem] h-full">
                            <TitleSelect :title="'main.proxy'" @isOpen="onOpenTitle" :currentTitle="currentTitle" ref="titleselect" />
                        </div>
                        <div class="pl-[6rem] h-full">
                            <TitleSelect :title="'main.price'" @isOpen="onOpenTitle" :currentTitle="currentTitle" ref="titleselect" />
                        </div>
                        <div class="pl-[6rem] h-full">
                            <TitleSelect :title="'main.solutions'" @isOpen="onOpenTitle" :currentTitle="currentTitle" ref="titleselect" />
                        </div>
                        <!-- <div class="pl-[0.5rem] h-full">
                            <img src="../assets//images//new.png"/>
                        </div> -->
                    </div>
                    <div class="h-[8rem] pr-[16rem] pt-[3rem] flex">
                        <div class=" flex h-full items-center cursor-pointer" @click="onChangeLanguage">
                            <span class="text-[1.2rem] text-[#B8B8B8] font-medium">{{!languageStatus?'EN/中':'中/EN'}}</span>
                        </div>
                        <div class="pl-[3rem] flex h-full items-center cursor-pointer">
                            <span class="text-[1.2rem] text-[#B8B8B8] font-medium" @click="onSignIn">{{t('main.login')}}</span>
                        </div>
                        <div class="flex h-full items-center pl-[3rem]">
                            <div class="w-[14rem] rounded-[0.5rem] h-[3rem] flex items-center justify-center cursor-pointer" 
                            @click="onCreateAccount"
                            style="background: linear-gradient( 89deg, #00FFFF 0%, #2954FE 100%);">
                                <span class="text-[#FFFFFF] text-[1.25rem]">{{t('main.signup')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 下拉框 -->
                <div v-show="titleSelectStatus" class="w-full bg-[rgb(38,39,41)]">
                    <ApiComponent v-show="currentTitle=='main.api'" @onClose="onClose" />
                    <ProxyComponent v-show="currentTitle=='main.proxy'" @onClose="onClose" />
                    <PricingComponent v-show="currentTitle=='main.price'" @onClose="onClose" />
                    <SolutionComponent v-show="currentTitle=='main.solutions'" @onClose="onClose" />
                </div>
            </div>
            <!-- 主标题 -->
            <div class="w-full h-[8rem] top-[24rem] absolute flex justify-center">
                <div class="w-[36rem] h-[4rem] flex">
                    <div class="w-[10rem] h-full flex flex-col justify-evenly">
                        <div class="flex">
                            <img src="../assets/images/greenstar.png"/>
                            <span class="pl-[0.2rem]">{{t('main.subtitle1')}}</span>
                        </div>
                        <div class="flex w-[7rem] flex justify-evenly">
                            <img src="../assets/images/star.png"/>
                            <img src="../assets/images/star.png"/>
                            <img src="../assets/images/star.png"/>
                            <img src="../assets/images/star.png"/>
                            <img src="../assets/images/star.png"/>
                        </div>
                    </div>
                    <v-divider
                        class="ms-3"
                        inset
                        vertical>
                    </v-divider>
                    <div class="w-[10rem] h-full flex flex-col justify-evenly ml-[3rem]">
                        <div class="flex">
                            <img src="../assets/images/redarrow.png"/>
                            <span class="pl-[0.2rem]">{{t('main.subtitle2')}}</span>
                        </div>
                        <div class="flex w-[7rem] flex justify-evenly">
                            <img src="../assets/images/redstar.png"/>
                            <img src="../assets/images/redstar.png"/>
                            <img src="../assets/images/redstar.png"/>
                            <img src="../assets/images/redstar.png"/>
                            <img src="../assets/images/redstar.png"/>
                        </div>
                    </div>
                    <v-divider
                        class="ms-3"
                        inset
                        vertical>
                    </v-divider>
                    <div class="w-[10rem] h-full flex flex-col justify-evenly ml-[3rem]">
                        <div class="flex">
                            <img src="../assets/images/orange.png"/>
                            <span class="pl-[0.4rem]">{{t('main.subtitle3')}}</span>
                        </div>
                        <div class="flex w-[7rem] flex justify-evenly">
                            <img src="../assets/images/orangestart.png"/>
                            <img src="../assets/images/orangestart.png"/>
                            <img src="../assets/images/orangestart.png"/>
                            <img src="../assets/images/orangestart.png"/>
                            <img src="../assets/images/orangestart.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full absolute top-[30rem] flex flex-col justify-between items-center">
                <span class="font-bold text-[white] text-[2.75rem]">{{t('main.bigtitle')}}</span>
                <span class="font-light text-[1.25rem] text-[#B8B8B8]">{{t('main.describe')}}</span>
            </div>
            <div class="w-full absolute h-[4.5rem] top-[40rem] flex justify-center">
                <div class="w-[44rem] h-full flex justify-between">
                    <div class="w-[20rem] h-full rounded-[0.75rem] flex justify-center items-center cursor-pointer" style="background: linear-gradient( 89deg, #00FFFF 0%, #2954FE 100%);box-shadow: inset -2px -4px 12px 1px #00FFFF;">
                        <span class="text-[white] font-medium text-[1.3rem]">{{t('main.trialbutton')}}</span>
                    </div>
                    <div class="w-[20rem] h-full rounded-[0.75rem] cursor-pointer flex items-center justify-center" style="background: linear-gradient( 89deg, #FFFFFF 0%, #C8E4FF 100%);">
                        <img src="../assets/images/google.png" class="w-[2rem] h-[2rem]"/>
                        <span class="text-[#333333] text-[1.3rem] pl-[0.5rem]">{{t('main.googlebutton')}}</span>
                    </div>
                </div>
            </div>
            <div class="w-full absolute top-[50rem] h-[12rem] flex justify-center">
                <div class="h-full w-[100rem] bg-[rgba(38,39,41, 0.8)]  flex rounded-[0.3rem] pt-[2rem] pb-[2rem] justify-between">
                    <div class="w-[30rem] h-full">
                        <div class="flex items-center">
                            <img src="../assets/images/图层 5.png" />
                            <span class="pl-[0.5rem] font-medium text-[1.1rem]">{{ t('main.featurestitle1') }}</span>
                        </div>
                        <div class="pt-[1rem]">
                            <span class="text-[1rem] text-[#999999] font-light">{{t('main.features1')}}</span>
                        </div>
                    </div>
                    <div class="w-[30rem] h-full">
                        <div class="flex items-center">
                            <img src="../assets/images/图层 8.png" />
                            <span class="pl-[0.5rem] font-medium text-[1.1rem]">{{ t('main.featurestitle2') }}</span>
                        </div>
                        <div class="pt-[1rem]">
                            <span class="text-[1rem] text-[#999999] font-light">{{t('main.features2')}}</span>
                        </div>
                    </div>
                    <div class="w-[30rem] h-full">
                        <div class="flex items-center">
                            <img src="../assets/images/图层 10.png" />
                            <span class="pl-[0.5rem] font-medium text-[1.1rem]">{{ t('main.featurestitle3') }}</span>
                        </div>
                        <div class="pt-[1rem]">
                            <span class="text-[1rem] text-[#999999] font-light">{{t('main.features3')}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full absolute top-[65rem] h-[6rem] flex justify-center">
                <div class="w-[100rem] h-full">
                    <span class="text-[#999999] text-[1.25rem]">{{t('main.recognized')}}</span>
                    <div class="w-full flex items-center pt-[1.2rem] justify-between">
                        <img src="../assets/images/amazon.png" />
                        <img src="../assets/images/techradar.png" />
                        <img src="../assets/images/ha.png" />
                        <img src="../assets/images/techjury.png" />
                        <img src="../assets/images/yahoo.png" />
                    </div>
                </div>
            </div>
            <div class="w-full absolute top-[73rem] h-[3.2rem] flex justify-center">
                <div class="w-[100rem] h-full flex justify-center items-center">
                    <span>
                        <span class="text-[white] text-[1.25rem]">
                            {{ t('main.result') }}
                        </span>
                        <span class="text-[1.25rem] text-[#2997FE]">
                            {{ t('main.result1') }}
                        </span>
                        <span class="text-[2rem] text-[#2997FE]">
                            48,918
                        </span>
                        <span class="text-[1.25rem] text-[#2997FE]">
                            {{ t('main.result2') }}
                        </span>
                        <span class="text-[1.25rem] text-[white]">
                            {{ t('main.result3') }}
                        </span>
                </span>
                </div>
            </div>
       </div>
       <!-- 第二个段落 -->
       <div class="w-screen bg-[white] pb-[13rem]">
            <div class="w-full pt-[10rem] justify-center flex">
                <span class="text-[#333333] text-[3rem] font-bold">{{t('main.secondSection.title')}}</span>
            </div>
            <div class="w-full flex justify-center mt-[4rem]">
                <div class="w-[100rem] flex justify-between">
                    <div class="w-[30rem]">
                        <div class="w-full flex items-center">
                            <span class="text-[#333333] text-[2rem] font-medium pr-[1.8rem]">{{t('main.secondSection.api.title')}}</span>
                            <img src="../assets//images/blackarrow.png" />
                        </div>
                        <div class="pt-[1.25rem]">
                            <span class="text-[#333333] text-[1.5rem] font-light">{{t('main.secondSection.api.detail')}}</span>
                        </div>
                        <div class="pt-[1rem]">
                            <img src="../assets/images/滑轮.png" />
                        </div>
                    </div>
                    <div class="w-[65rem]">
                        <v-expansion-panels v-model="apiPanel">
                            <v-expansion-panel value="first">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/对话框.png"/>
                                        <span class="text-[#2997FE] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.api.first.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$1.2</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="apiPanel=='first'?arrow2:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div class="w-full h-[18rem] bg-[#F2F3F5] pl-[2rem] pr-[2rem]">
                                        <div class="flex w-full h-[5rem] justify-between">
                                            <div class="flex items-center">
                                                <img src="../assets/images/图层 16.png"/>
                                                <span class="text-[#333333] text-[1.2rem] pl-[0.75rem] font-medium">{{t('main.secondSection.api.first.features1')}}</span>
                                            </div>
                                            <div class="flex items-center">
                                                <img src="../assets/images/图层 16.png"/>
                                                <span class="text-[#333333] text-[1.2rem] pl-[0.75rem] font-medium">{{t('main.secondSection.api.first.features2')}}</span>
                                            </div>
                                            <div class="flex items-center">
                                                <img src="../assets/images/图层 16.png"/>
                                                <span class="text-[#333333] text-[1.2rem] pl-[0.75rem] font-medium">{{t('main.secondSection.api.first.features3')}}</span>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <span class="text-[#333333] text-[1.2rem] font-light">
                                                {{t('main.secondSection.api.first.detail')}}
                                            </span>
                                        </div>
                                        <div class="w-full flex items-center pt-[2rem]">
                                            <div class="bg-[#333333] rounded-[0.3rem] h-[3.1rem] w-[13rem] flex justify-center items-center cursor-pointer">
                                                <span class="text-[#FFFFFF] text-[1.2rem]">{{t('button.free')}}</span>
                                            </div>
                                            <div class="pl-[3rem] flex items-center cursor-pointer">
                                                <span class="pr-[1rem] text-[#2997FE] text-[1.2rem]">
                                                    {{t('button.more')}}
                                                </span>
                                                <img src="../assets/images/arrow.png"/>
                                            </div>
                                        </div>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel value="second" class="mt-[1rem]">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/对话框.png"/>
                                        <span class="text-[#2997FE] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.api.second.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$1.6</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="apiPanel=='second'?arrow2:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                   
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel value="third" class="mt-[1rem]">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/对话框.png"/>
                                        <span class="text-[#2997FE] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.api.third.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$1.4</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="apiPanel=='third'?arrow2:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                   
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel value="fourth" class="mt-[1rem]">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/对话框.png"/>
                                        <span class="text-[#2997FE] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.api.fourth.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$0.89</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="apiPanel=='fourth'?arrow2:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                   
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </div>
            </div>

            <div class="w-full flex justify-center mt-[6rem]">
                <div class="w-[100rem] flex justify-between">
                    <div class="w-[30rem]">
                        <div class="w-full flex items-center">
                            <span class="text-[#333333] text-[2rem] font-medium pr-[1.8rem]">{{t('main.secondSection.proxy.title')}}</span>
                            <img src="../assets//images/blackarrow.png" />
                        </div>
                        <div class="pt-[1.25rem]">
                            <span class="text-[#333333] text-[1.5rem] font-light">{{t('main.secondSection.proxy.detail')}}</span>
                        </div>
                        <div class="pt-[1rem]">
                            <img src="../assets/images/滑轮.png" />
                        </div>
                    </div>
                    <div class="w-[65rem]">
                        <v-expansion-panels v-model="proxyPanel">
                            <v-expansion-panel value="first">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/1.png"/>
                                        <span class="text-[#00CCC0] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.proxy.first.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$1.2</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="proxyPanel=='first'?arrow3:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <div class="w-full h-[18rem] bg-[#F2F3F5] pl-[2rem] pr-[2rem]">
                                        <div class="flex h-[5rem]">
                                            <div class="flex items-center">
                                                <img src="../assets/images/图层 18.png"/>
                                                <span class="text-[#333333] text-[1.2rem] pl-[0.75rem] font-medium">{{t('main.secondSection.proxy.first.features1')}}</span>
                                            </div>
                                            <div class="flex items-center pl-[2.5rem]">
                                                <img src="../assets/images/图层 18.png"/>
                                                <span class="text-[#333333] text-[1.2rem] pl-[0.75rem] font-medium">{{t('main.secondSection.proxy.first.features2')}}</span>
                                            </div>
                                            <div class="flex items-center pl-[2.5rem]">
                                                <img src="../assets/images/图层 18.png"/>
                                                <span class="text-[#333333] text-[1.2rem] pl-[0.75rem] font-medium">{{t('main.secondSection.proxy.first.features3')}}</span>
                                            </div>
                                        </div>
                                        <div class="w-full">
                                            <span class="text-[#333333] text-[1.2rem] font-light">
                                                {{t('main.secondSection.proxy.first.detail')}}
                                            </span>
                                        </div>
                                        <div class="w-full flex items-center pt-[2rem]">
                                            <div class="bg-[#333333] rounded-[0.3rem] h-[3.1rem] w-[13rem] flex justify-center items-center cursor-pointer">
                                                <span class="text-[#FFFFFF] text-[1.2rem]">{{t('button.start')}}</span>
                                            </div>
                                            <div class="pl-[3rem] flex items-center cursor-pointer">
                                                <span class="pr-[1rem] text-[#2997FE] text-[1.2rem] underline">
                                                    {{t('button.free3GB')}}
                                                </span>
                                                <img src="../assets/images/arrow.png"/>
                                            </div>
                                        </div>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel value="second" class="mt-[1rem]">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/2.png"/>
                                        <span class="text-[#00CCC0] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.api.second.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$1.6</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="proxyPanel=='second'?arrow3:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                   
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                            <v-expansion-panel value="third" class="mt-[1rem]">
                                <v-expansion-panel-title>
                                    <div class="flex items-center">
                                        <img src="../assets/images/3.png"/>
                                        <span class="text-[#00CCC0] text-[1.5rem] pl-[0.5rem]">{{t('main.secondSection.api.third.title')}}</span>
                                    </div>
                                    <template v-slot:actions>
                                        <div class="flex items-center">
                                            <div class="w-[4rem] h-[1.5rem] bg-[#2997FE] flex justify-center items-center">
                                                <span class="text-[white] text-[1rem]">From</span>
                                            </div>
                                            <div class="pl-[1rem]">
                                                <span class="text-[#333333] text-[2rem] font-medium">$1.4</span>
                                                <span class="text-[1.5rem] text-[#333333] font-light">/k req</span>
                                            </div>
                                            <div class="pl-[2rem]">
                                                <img :src="proxyPanel=='third'?arrow3:arrow1"/>
                                            </div>
                                        </div>
                                    </template>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                   
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </div>
            </div>
       </div>
       <!-- 第三个段落 -->
       <div class="w-full bg-[white] pb-[10rem]">
            <div class="w-full flex justify-center pt-[5rem]">
                <span class="text-[#333333] text-[3rem] font-bold" >{{t('main.thirdSection.title')}}</span>
            </div>
            <div class="w-full h-[20rem] flex justify-center">

                <div class="w-[100rem] h-full flex items-center justify-between">
                    <div class="w-[15rem] h-[16rem] border-[1px] border-[#DCDFE0] bg-[#DCDFE0] rounder-[0.75rem] hover:bg-[#0C2D4D] hover:h-[18rem] hover:text-[#FFFFFF]">
                        <div class="w-full flex justify-center pt-[2rem]">
                            <img src="../assets/images/美国.png" class="w-[4.5rem] h-[4.5rem]"/>
                        </div>
                        <div class="w-full flex justify-center pt-[2rem]">
                            <span class="text-[1rem] font-light"> 
                                {{t('main.thirdSection.us.name')}}
                            </span>
                        </div>
                        <div class="w-full flex justify-center pt-[1.5rem]">
                            <span class=" text-[1.2rem] font-medium"> 
                                7.4M+ IPs
                            </span>
                        </div>
                    </div>

                    <div class="w-[15rem] h-[16rem] border-[1px] border-[#DCDFE0] bg-[#DCDFE0] rounder-[0.75rem] hover:bg-[#0C2D4D] hover:h-[18rem] hover:text-[#FFFFFF]">
                        <div class="w-full flex justify-center pt-[2rem]">
                            <img src="../assets/images/德国.png" class="w-[4.5rem] h-[4.5rem]"/>
                        </div>
                        <div class="w-full flex justify-center pt-[2rem]">
                            <span class=" text-[1rem] font-light"> 
                                {{t('main.thirdSection.Germany.name')}}
                            </span>
                        </div>
                        <div class="w-full flex justify-center pt-[1.5rem]">
                            <span class=" text-[1.2rem] font-medium"> 
                                7.4M+ IPs
                            </span>
                        </div>
                    </div>

                    <div class="w-[15rem] h-[16rem] border-[1px] border-[#DCDFE0] bg-[#DCDFE0] rounder-[0.75rem] hover:bg-[#0C2D4D] hover:h-[18rem] hover:text-[#FFFFFF]">
                        <div class="w-full flex justify-center pt-[2rem]">
                            <img src="../assets/images/英国国旗.png" class="w-[4.5rem] h-[4.5rem]"/>
                        </div>
                        <div class="w-full flex justify-center pt-[2rem]">
                            <span class=" text-[1rem] font-light"> 
                                {{t('main.thirdSection.uk.name')}}
                            </span>
                        </div>
                        <div class="w-full flex justify-center pt-[1.5rem]">
                            <span class="text-[1.2rem] font-medium"> 
                                7.4M+ IPs
                            </span>
                        </div>
                    </div>

                    <div class="w-[15rem] h-[16rem] border-[1px] border-[#DCDFE0] bg-[#DCDFE0] rounder-[0.75rem] hover:bg-[#0C2D4D] hover:h-[18rem] hover:text-[#FFFFFF]">
                        <div class="w-full flex justify-center pt-[2rem]">
                            <img src="../assets/images/印度.png" class="w-[4.5rem] h-[4.5rem]"/>
                        </div>
                        <div class="w-full flex justify-center pt-[2rem]">
                            <span class=" text-[1rem] font-light"> 
                                {{t('main.thirdSection.India.name')}}
                            </span>
                        </div>
                        <div class="w-full flex justify-center pt-[1.5rem]">
                            <span class=" text-[1.2rem] font-medium"> 
                                7.4M+ IPs
                            </span>
                        </div>
                    </div>

                    <div class="w-[15rem] h-[16rem] border-[1px] border-[#DCDFE0] bg-[#DCDFE0] rounder-[0.75rem] hover:bg-[#0C2D4D] hover:h-[18rem] hover:text-[#FFFFFF]">
                        <div class="w-full flex justify-center pt-[2rem]">
                            <img src="../assets/images/加拿大国旗.png" class="w-[4.5rem] h-[4.5rem]"/>
                        </div>
                        <div class="w-full flex justify-center pt-[2rem]">
                            <span class=" text-[1rem] font-light"> 
                                {{t('main.thirdSection.Canada.name')}}
                            </span>
                        </div>
                        <div class="w-full flex justify-center pt-[1.5rem]">
                            <span class=" text-[1.2rem] font-medium"> 
                                7.4M+ IPs
                            </span>
                        </div>
                    </div>

                    <div class="w-[15rem] h-[16rem] border-[1px] border-[#DCDFE0] bg-[#DCDFE0] rounder-[0.75rem] hover:bg-[#0C2D4D] hover:h-[18rem] hover:text-[#FFFFFF]">
                        <div class="w-full flex justify-center pt-[2rem]">
                            <img src="../assets/images/日本.png" class="w-[4.5rem] h-[4.5rem]"/>
                        </div>
                        <div class="w-full flex justify-center pt-[2rem]">
                            <span class=" text-[1rem] font-light"> 
                                {{t('main.thirdSection.Japan.name')}}
                            </span>
                        </div>
                        <div class="w-full flex justify-center pt-[1.5rem]">
                            <span class=" text-[1.2rem] font-medium"> 
                                7.4M+ IPs
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center pt-[1rem] flex-col items-center">
                <span class="text-[#333333] text-[1.2rem] font-light">{{t('main.thirdSection.detail')}}</span>
                <div class="flex items-center pt-[1rem] cursor-pointer">
                    <span class="text-[#2997FE] text-[1.wrem] pr-[1rem]">{{t('button.more')}}</span>
                    <img src="../assets/images/arrow.png"/>
                </div>
            </div> 
            <!-- case展示 -->
            <div class="w-full">
                <div class="w-full flex justify-center pt-[10rem]">
                    <span class="text-[#333333] text-[3rem] font-bold">{{t('main.thirdSection.case.title')}}</span>
                </div>
                <div class="w-full flex justify-center mt-[2rem]">
                    <div class="w-[100rem] h-[28rem] flex flex-wrap">
                        <div class="w-1/3 h-1/2 flex flex-col items-center justify-evenly border-r-[1px] border-[#d7d7d7] border-b-[1px]">
                            <img src="../assets/images/图层 21.png" />
                            <span class="text-[#333333] text-[1.5rem]">{{t('main.thirdSection.case.case1')}}</span>
                        </div>
                        <div class="w-1/3 h-1/2 flex flex-col items-center justify-evenly ">
                            <img src="../assets/images/图层 23.png"/>
                            <span class="text-[#333333] text-[1.5rem]">{{t('main.thirdSection.case.case2')}}</span>
                        </div>
                        <div class="w-1/3 h-1/2 flex flex-col items-center justify-evenly border-l-[1px] border-[#d7d7d7] border-b-[1px]">
                            <img src="../assets/images/图层 25.png" />
                            <span class="text-[#333333] text-[1.5rem]">{{t('main.thirdSection.case.case3')}}</span>
                        </div>
                        <div class="w-1/3 h-1/2 flex flex-col items-center justify-evenly">
                            <img src="../assets/images/图层 27.png" />
                            <span class="text-[#333333] text-[1.5rem]">{{t('main.thirdSection.case.case4')}}</span>
                        </div>
                        <div class="w-1/3 h-1/2 flex flex-col items-center justify-evenly border-[1px] border-[#d7d7d7] border-b-[0px]">
                            <img src="../assets/images/price.png" class="w-[5rem] h-[5rem]" />
                            <span class="text-[#333333] text-[1.5rem]">{{t('main.thirdSection.case.case5')}}</span>
                        </div>
                        <div class="w-1/3 h-1/2 flex flex-col items-center justify-evenly ">
                            <img src="../assets/images/ad.png" />
                            <span class="text-[#333333] text-[1.5rem]">{{t('main.thirdSection.case.case6')}}</span>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-[4rem]">
                    <span class="text-[#333333] text-[1.2rem] font-light">{{t('main.thirdSection.case.detail')}}</span>
                </div>
                <div class="w-full flex justify-center mt-[1.2rem]">
                    <div class="w-[14rem] h-[3.2rem] bg-[#333333] rounded-[0.4rem] flex justify-center items-center cursor-pointer">
                        <span class="text-[#FFFFFF] text-[1.2rem] font-medium">{{t('button.free')}}</span>
                    </div>
                </div>
            </div>
            <!-- ips -->
            <div class="w-full mt-[12rem]">
                <div class="full flex items-center flex-col">
                    <span class="text-[#333333] text-[3rem] font-bold">{{t('main.thirdSection.proxy.title')}}</span>
                    <span class="text-[#333333] text-[1.5rem] font-light pt-[1.2rem]">{{t('main.thirdSection.proxy.detail')}}</span>
                </div>
                <div class="w-full flex justify-center mt-[6rem]">
                    <div class="w-[100rem] flex items-center">
                        <div class="w-[32rem] bg-[black] h-[22rem]">
                            <div class="flex items-center pt-[2rem] pl-[2rem]">
                                <img src="../assets/images/logo.png" />
                                <span class="pl-[0.5rem] text-[white]">Upgrowing</span>
                            </div>
                            <div class="pt-[3rem] pl-[2rem] pr-[2rem]">
                                <span class="text-[#18FFF1] text-[2rem] ">{{t('main.thirdSection.proxy.subtitle')}}</span>
                            </div>
                        </div>
                        <div class="w-[68rem] h-[30rem] flex flex-col pl-[1rem] justify-between">
                            <div class="w-full h-[7rem] bg-[#DCDFE0] rounded-[0.75rem] flex">
                                <div class="w-[0.75rem] bg-[#2997FE] h-full rounded-tl-[0.75rem] rounded-bl-[0.75rem]">

                                </div>
                                <div class="h-full flex items-center w-auto">
                                    <span class="text-[#333333] text-[1.5rem] pl-[2rem]">{{t('main.thirdSection.proxy.first')}}</span>
                                </div>
                            </div>
                            <div class="w-full h-[7rem] bg-[#DCDFE0] rounded-[0.75rem] flex">
                                <div class="w-[0.75rem] bg-[#2997FE] h-full rounded-tl-[0.75rem] rounded-bl-[0.75rem]">

                                </div>
                                <div class="h-full flex items-center w-auto">
                                    <span class="text-[#333333] text-[1.5rem] pl-[2rem]">{{t('main.thirdSection.proxy.second')}}</span>
                                </div>
                            </div>
                            <div class="w-full h-[7rem] bg-[#DCDFE0] rounded-[0.75rem] flex">
                                <div class="w-[0.75rem] bg-[#2997FE] h-full rounded-tl-[0.75rem] rounded-bl-[0.75rem]">

                                </div>
                                <div class="h-full flex items-center">
                                    <span class="text-[#333333] text-[1.5rem] pl-[2rem]">{{t('main.thirdSection.proxy.third')}}</span>
                                </div>
                            </div>
                            <div class="w-full h-[7rem] bg-[#DCDFE0] rounded-[0.75rem] flex">
                                <div class="w-[0.75rem] bg-[#2997FE] h-full rounded-tl-[0.75rem] rounded-bl-[0.75rem]">

                                </div>
                                <div class="h-full flex items-center">
                                    <span class="text-[#333333] text-[1.5rem] pl-[2rem]">{{t('main.thirdSection.proxy.fourth')}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center mt-[4rem]">
                    <div class="w-[13rem] h-[3.25rem] rounded-[0.25rem] bg-[#333333] flex justify-center items-center cursor-pointer">
                        <img src="../assets/images/download_round.png" class="w-[2rem] h-[2rem]" />
                        <span class="text-[#FFFFFF] text-[1.2rem] pl-[0.4rem]">{{t('button.download')}}</span>
                    </div>
                </div>
            </div>
       </div>

       <!-- 社区 -->
        <div class="w-full bg-[#d7d7d7] pb-[12rem]">
            <div class="w-full flex items-center pt-[10rem] flex-col">
                <span class="text-[#333333] text-[3rem] font-bold">{{t('main.community.title')}}</span>
                <span class="pt-[1rem] text=[#333333] text-[1.5rem] font-light">{{t('main.community.subtitle')}}</span>
            </div>

            <div class="w-full flex justify-center">
                <div class="w-[113.5rem] h-[16.8rem] mt-[5rem] flex justify-between">
                    <div class="w-[20rem] h-[16.8rem] rounded-[0.75rem]">
                        <div class="w-full h-[13.8rem] rounded-[0.75rem] bg-[white] flex flex-col justify-center items-center">
                            <img src="../assets/images/linkedin.png" class="w-[4.5rem] h-[4.5rem]" />
                            <span class="pt-[1.2rem] text-[#333333] text-[1.5rem]">LinkedIn</span>
                        </div>
                        <div class="w-full h-[3rem] bg-[#333333] rounded-bl-[0.75rem] rounded-br-[0.75rem] flex justify-center items-center cursor-pointer">
                            <span class="text-[#00FFFF] text-[1rem] pr-[0.5rem] font-medium">{{t('button.join')}}</span>
                            <img src="../assets/images/图层 33.png" />
                        </div>
                    </div>
                    <div class="w-[20rem] h-[16.8rem] rounded-[0.75rem]">
                        <div class="w-full h-[13.8rem] rounded-[0.75rem] bg-[white] flex flex-col justify-center items-center">
                            <img src="../assets/images/discord.png" class="w-[4.5rem] h-[4.5rem]" />
                            <span class="pt-[1.2rem] text-[#333333] text-[1.5rem]">Discord</span>
                        </div>
                        <div class="w-full h-[3rem] bg-[#333333] rounded-bl-[0.75rem] rounded-br-[0.75rem] flex justify-center items-center cursor-pointer">
                            <span class="text-[#00FFFF] text-[1rem] pr-[0.5rem] font-medium">{{t('button.join')}}</span>
                            <img src="../assets/images/图层 33.png" />
                        </div>
                    </div>
                    <div class="w-[20rem] h-[16.8rem] rounded-[0.75rem]">
                        <div class="w-full h-[13.8rem] rounded-[0.75rem] bg-[white] flex flex-col justify-center items-center">
                            <img src="../assets/images/github.png" class="w-[4.5rem] h-[4.5rem]" />
                            <span class="pt-[1.2rem] text-[#333333] text-[1.5rem]">GitHub</span>
                        </div>
                        <div class="w-full h-[3rem] bg-[#333333] rounded-bl-[0.75rem] rounded-br-[0.75rem] flex justify-center items-center cursor-pointer">
                            <span class="text-[#00FFFF] text-[1rem] pr-[0.5rem] font-medium">{{t('button.join')}}</span>
                            <img src="../assets/images/图层 33.png" />
                        </div>
                    </div>
                    <div class="w-[20rem] h-[16.8rem] rounded-[0.75rem]">
                        <div class="w-full h-[13.8rem] rounded-[0.75rem] bg-[white] flex flex-col justify-center items-center">
                            <img src="../assets/images/icon_YouTube.png" class="w-[4.5rem] h-[4.5rem]" />
                            <span class="pt-[1.2rem] text-[#333333] text-[1.5rem]">Youtube</span>
                        </div>
                        <div class="w-full h-[3rem] bg-[#333333] rounded-bl-[0.75rem] rounded-br-[0.75rem] flex justify-center items-center cursor-pointer">
                            <span class="text-[#00FFFF] text-[1rem] pr-[0.5rem] font-medium">{{t('button.join')}}</span>
                            <img src="../assets/images/图层 33.png" />
                        </div>
                    </div>
                    <div class="w-[20rem] h-[16.8rem] rounded-[0.75rem]">
                        <div class="w-full h-[13.8rem] rounded-[0.75rem] bg-[white] flex flex-col justify-center items-center">
                            <img src="../assets/images/推特.png" class="w-[4.5rem] h-[4.5rem]" />
                            <span class="pt-[1.2rem] text-[#333333] text-[1.5rem]">Twitter</span>
                        </div>
                        <div class="w-full h-[3rem] bg-[#333333] rounded-bl-[0.75rem] rounded-br-[0.75rem] flex justify-center items-center cursor-pointer">
                            <span class="text-[#00FFFF] text-[1rem] pr-[0.5rem] font-medium">{{t('button.join')}}</span>
                            <img src="../assets/images/图层 33.png" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 上传blog -->

            <div class="w-full flex justify-center mt-[10rem]">
                <span class="text-[#333333] text-[3rem] font-bold">{{t('main.community.blog.title')}}</span>
            </div>
            <div class="w-full h-[57rem] mt-[5rem] flex justify-center">
                <div class="w-[100rem] h-[57rem] border-[#D8D8D8] border-[1px] rounded-[0.75rem] bg-[white] p-[2rem]">
                    <BlogComponent />
                </div>
            </div>
        </div>
        <div class="w-full h-[50rem] bg-[#000000] pl-[30rem] pt-[5rem]">
            <div class="flex">
                <img src="../assets/images/图层 35.png" />
                <span class="text-[#FFFFFF] text-[2.4rem] pl-[1rem]">Upgrowing</span>
            </div>
            <div class="flex pt-[7rem] text-[#FFFFFF] text-[1rem] font-light w-full">
                <span class="cursor-pointer">{{t('main.bottom.touch')}}</span>
                <span class="pl-[10rem] cursor-pointer">{{t('main.bottom.COMPANY')}}</span>
                <span class="pl-[10rem] cursor-pointer">{{t('main.bottom.PRODUCTS')}}</span>
                <span class="pl-[10rem] cursor-pointer">{{t('main.bottom.TOOLS')}}</span>
            </div>
            <div class="pt-[12rem] text-[#FFFFFF] text-[1rem] font-light">
                <span class="cursor-pointer">{{t('main.bottom.follow')}}</span>
            </div>
        </div>
        <div class="w-full h-[4rem] flex justify-center items-center bg-[#333333]">
            <span class="text-[#FFFFFF] text-[1rem]">© 2024 upgrowing.net, All Rights Reserved</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import TitleSelect from '../components/TitleSelect.vue'
    import ApiComponent from './mainCompoent/ApiComponent.vue'
    import ProxyComponent from './mainCompoent/ProxyComponent.vue'
    import PricingComponent from './mainCompoent/PricingComponent.vue'
    import SolutionComponent from './mainCompoent/SolutionComponent.vue'
    import BlogComponent from './mainCompoent/Blog.vue'
    import arrow1 from '../assets/images/图层 11.png'
    import arrow2 from '../assets/images/图层 12.png'
    import arrow3 from '../assets/images/图层 14.png'
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const { t } = useI18n()
    const i18n = useI18n()
    const titleselect = ref()
    const currentTitle = ref('')
    const apiPanel = ref('')
    const proxyPanel = ref('')
    const languageStatus = ref(true)
    const titleSelectStatus = ref(false)
    const onOpenTitle = (status:boolean, title:string) => {
        titleSelectStatus.value = status
        currentTitle.value = title
    }
    const onChangeLanguage = () => {
        languageStatus.value = !languageStatus.value
        if (languageStatus.value) {
            i18n.locale.value = 'zh'
        } else {
            i18n.locale.value = 'en'
        }
    }
    const onSignIn = () => {
        router.push({path: '/login'})
    }
    const onCreateAccount = () => {
        router.push({path: '/register'})
    }
    const onClose = () => {
        titleSelectStatus.value = false
        currentTitle.value = ''
    }
</script>