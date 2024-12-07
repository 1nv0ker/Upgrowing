<template>
     <v-container>
        <v-sheet
            :rounded="true"
            :elevation="12"
            class="mx-auto mt-[14vh]"
            height="500"
            width="400"
        >
        <v-row no-gutters>
            <v-col offset="9" cols="3">
                <v-switch
                    v-model="languageStatus"
                    :label="label"
                    hide-details
                    @update:modelValue="changelocale"
                ></v-switch>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" >
                <div class="w-full flex justify-center">
                    <span class="text-2xl">{{t('login.welcome')}}</span>
                </div>
                
            </v-col>
        </v-row>
        <v-row no-gutters class="pt-2" >
            <v-col cols="12">
                <div class="w-full flex justify-center">
                    <span class="text-sm tracking-wider opacity-90">{{t('login.subtitle')}}</span>
                </div>
            </v-col>
        </v-row>
        <v-form v-model="valid" ref="form">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        v-model="email"
                        :label="t('login.email')"
                        :rules="emailRules"
                        required
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                        v-model="password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        :label="t('login.password')"
                        :rules="passwordRules"
                        @click:append="show = !show"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-col cols="12">
                    <v-btn size="x-large" color="indigo-darken-3" class="w-full" @click="onLogin" :loading="loading">{{t('login.signin')}}</v-btn>
                </v-col>
                <v-col cols="12">
                    <div class="w-full flex justify-center items-center">
                        <span class="text-base">{{t('login.tip')}}</span>&nbsp;&nbsp;
                        <span class="text-lg cursor-pointer" style="color:rgb(52, 71, 103)" @click="signUp">{{t('login.signup')}}</span>
                    </div>
                </v-col>
            </v-container>
        </v-form>
    </v-sheet>
  </v-container>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    const { t } = useI18n()
    const i18n = useI18n()
    const router = useRouter()
    const languageStatus = ref(true)
    const loading = ref(false)
    const valid = ref(false)
    const show = ref(true)
    const email = ref('test@11.com')
    const password = ref('123')
    const form = ref()
    const emailRules = ref([
        (value:any) => {
            if (!value) 
                return t('valid.email')
            if (!/.+@.+\..+/.test(value))
                return t('valid.email')
            return true
        }
    ])
    const passwordRules = ref([
        (value:any)=> {
            if (!value) 
                return t('valid.password')
            return true
        }
    ])
    const changelocale = () => {
        form.value.reset()
        if (languageStatus.value) {
            i18n.locale.value = 'zh'
        } else {
            i18n.locale.value = 'en'
        }
    }
    const label = computed(() => {
        return languageStatus.value?'中/EN':'EN/中'
    })
    const signUp = () => {
        router.push({path: '/register'})
    }
    const onLogin = async () => {
        const { valid } = await form.value.validate()

        if (valid) {
            loading.value = true
            setTimeout(() => {
                loading.value = false
                router.push({path:'/main'})
            }, 2000);
        }
    }

</script>