import { createRouter,createWebHistory } from "vue-router";


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:"home",
            path:'/',
            component:()=>import("@/views/home/home.vue")
        },
    ]
})




export default router;
