class Player {
    constructor(){
        this.Distance=0
        this.name=null
        this.Intex=0
    }
    getNo_(){
        var Playercountref=database.ref("Players")
        Playercountref.on("value",function(data){
            Players=data.val()
        })
    }
    updateNo_(No){
        database.ref("/").update({
            Players:No
        })
    }
    updateName(){
        var playerIntex="player"+this.Intex
        database.ref(playerIntex).set({
            Name:this.name,
            Distance:this.Distance
        })
    }
    static INFO_ALL(){
        var inforef=database.ref("/")
        inforef.on("value",function(data){
            allplayers=data.val()
        })
    }
}