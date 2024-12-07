<template>
    <v-container>
        <v-sheet
            :rounded="true"
            :elevation="12"
            class="mx-auto mt-[14vh]"
            height="600"
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
                        <span class="text-2xl">{{t('signup.title')}}</span>
                    </div>
                </v-col>
            </v-row>
            <v-form v-model="valid" ref="form">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            v-model="email"
                            :label="t('signup.email')"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            v-model="password"
                            :label="t('signup.password')"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            required
                            :rules="passwordRules"
                            @click:append="show = !show"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            v-model="confirmPassword"
                            :label="t('signup.confirm')"
                            required
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            :rules="confirmPasswordRules"
                            @click:append="show1 = !show1"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-col cols="12">
                        <v-btn size="x-large" color="indigo-darken-3" class="w-full" @click="onSignUp">{{t('signup.signup')}}</v-btn>
                    </v-col>
                    <v-col cols="12">
                        <div class="w-full flex justify-center items-center">
                            <span class="text-base">{{t('signup.tip')}}</span>&nbsp;&nbsp;
                            <span class="text-lg cursor-pointer" style="color:rgb(52, 71, 103)" @click="signin">{{t('signup.signin')}}</span>
                        </div>
                    </v-col>
                </v-container>
            </v-form>
        </v-sheet>
    </v-container>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref, computed } from 'vue'
    import { useRouter } from 'vue-router'
    const { t } = useI18n()
    const i18n = useI18n()
    const router = useRouter()
    const form = ref()
    const languageStatus = ref(true)
    const valid = ref(false)
    const email = ref('')
    const password = ref('')
    const show = ref(false)
    const show1 = ref(false)
    const confirmPassword = ref('')
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
            if (value !== confirmPassword.value )
                return t('valid.confirm')
            return true
        }
    ])
    const confirmPasswordRules = ref([
        (value:any)=> {
            if (!value) 
                return t('valid.password')
            if (value !== password.value )
                return t('valid.confirm')
            return true
        }
    ])
    const label = computed(() => {
        return languageStatus.value?'中/EN':'EN/中'
    })
    const changelocale = () => {
        form.value.reset()
        if (languageStatus.value) {
            i18n.locale.value = 'zh'
        } else {
            i18n.locale.value = 'en'
        }
    }
    const onSignUp = async () => {
        const { valid } = await form.value.validate()

        if (valid) {
            
        }
    }
    const signin = () => {
        router.push({path: '/login'})
    }
</script>