import { useCounterStore } from "@/store/index";

export default {
    methods: {
        getImgUrl(img) {
            return require('../assets/countries/' + img);
        },

        addLike(name){
            this.store.$state[name] += 1 

            console.log(this.store.$state["België"])
        }
    },
    created(){
        console.log("create");
    },
    updated(){
        console.log("update");
    },


    mounted(){
        console.log("mounted");
    },
    unmounted(){
        console.log("unmounted");
    },
    data(){
        return {
            store: new useCounterStore(),
        }
    }
}