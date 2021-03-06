console.log(" __     __                                      \n" +
    " \\ \\   / /                                      \n" +
    "  \\ \\_/ /    ___    _   _   ____   __ _   _ __  \n" +
    "   \\   /    / _ \\  | | | | |_  /  / _` | | '_ \\ \n" +
    "    | |    | (_) | | |_| |  / /  | (_| | | | | |\n" +
    "    |_|     \\___/   \\__,_| /___|  \\__,_| |_| |_|\n" +
    "                                                \n" +
    "                                                ")
console.log("Youzan-School-Client - Create by Alan.")

import { createApp } from 'vue'
import App from './App.vue'
import { Toast } from 'vant';
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(router)
app.use(Toast)
app.use(Vant)
app.mount('#app')