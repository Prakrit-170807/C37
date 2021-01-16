class g_status{
    constructor(){

    }
    getStates(){
        var GameModeref=database.ref("GameMode")
        GameModeref.on("value",function(data){
            GameMode=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            GameMode:state
        })
    }
    START(){
        if(GameMode==0){
            player=new Player()
            player.getNo_()
            form=new user_interfase()
            form.display()
        }
    }
    play(){
        form.hide()
        Player.INFO_ALL()
        if(allplayers!=undefined){
            var Y = 100+10
            var X = 100+10
            text(allplayers[p].Name+":"+allplayers[p].Distance,X,Y)
        }
        if(keyWentDown("up_arrow")&&player.Intex!=null){
            player.Distance=player.Distance+10
            player.updateName()
        }
    }
}