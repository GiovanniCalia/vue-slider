const app = new Vue({
    el: "#root",
    data: {
        arrIndex: 0,
        arrSlides: [
            {
                title: "Svezia",
                items: "img/01.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                title: "Norvegia",
                items: "img/02.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                title: "Finlanda",
                items: "img/03.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                title: "Irlanda",
                items: "img/04.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                title: "Germania",
                items: "img/05.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
        ],
    },
    methods: {
        previous(){
            if (this.arrIndex == 0){
                this.arrIndex = this.arrSlides.length - 1;
            } else{
                this.arrIndex--;
            }

        },
        next(){
            if (this.arrIndex == this.arrSlides.length - 1){
                this.arrIndex = 0;
            } else{
                this.arrIndex++;
            }
        },
    },
    created(){
        setInterval(changeImage, 1000);

        function changeImage(){
            if (this.arrIndex == this.arrSlides.length - 1){
                this.arrIndex = 0;
            } else{
                this.arrIndex++;
            } 
        }
    },
});