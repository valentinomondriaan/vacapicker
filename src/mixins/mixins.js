export default {
    methods: {
        getImgUrl(img) {
            return require('../assets/countries/' + img);
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
}