new Vue({
    el:"#app",
    data:{
        newGame:true,
        gameGoing:false,
        yourDecrease:100,
        monsterDecrease:100,
        scoreHistory:[],
        yourStyle:{
            backgroundColor: "green",
            margin: 0,
            color: "white",
            width:"100%"
        },
        monsterStyle:{
            backgroundColor: "black",
            margin: 0,
            color: "white",
            width:"100%"
        },
    },
    methods:{
        attack:function(){
            var vm=this;
            this.gameGoing=true;
            var yoursmallRandom=Math.floor(Math.random()*(10-0+1)+0);
            var monstersmallRandom=Math.floor(Math.random()*(10-0+1)+0);
                vm.yourDecrease=vm.yourDecrease-yoursmallRandom;
                vm.yourStyle.width=vm.yourDecrease + "%";
                vm.monsterDecrease=vm.monsterDecrease-monstersmallRandom;
                vm.monsterStyle.width=vm.monsterDecrease+"%";
            var newHistory={
                you:yoursmallRandom,
                monster:monstersmallRandom
            }
            vm.scoreHistory.push(newHistory);            
        },
        specialAttack:function(){
            var vm=this;
            this.gameGoing=true;
            var yourbigRandom=Math.floor(Math.random()*(20-11+1)+11);
            var monsterbigRandom=Math.floor(Math.random()*(20-11+1)+11);
                vm.yourDecrease=vm.yourDecrease-yourbigRandom;
                vm.yourStyle.width=vm.yourDecrease + "%";
                vm.monsterDecrease=vm.monsterDecrease-monsterbigRandom;
                vm.monsterStyle.width=vm.monsterDecrease+"%";
            var newHistory={
                you:yourbigRandom,
                monster:monsterbigRandom
            }
            vm.scoreHistory.push(newHistory);
        },
        heal:function(){
            this.yourDecrease=100;
            this.yourStyle.width="100%";
            this.monsterDecrease=100;
            this.monsterStyle.width="100%";
        },
        giveUp:function(){
            this.gameGoing=false;
            this.newGame=true;
            this.yourDecrease=100;
            this.yourStyle.width="100%";
            this.monsterDecrease=100;
            this.monsterStyle.width="100%";
            this.scoreHistory=[];
        }
    }
})


// var bigRandom=Math.floor(Math.random()*(20-11+1)+11);