class user_interfase{
    constructor(){
        this.input= createInput("name")
        this.input.position(370,250)

        this.button = createButton("GO")
        this.button.position(370,275)
    }
    display(){
        var title=createElement("H1")
        title.html('The Car Racing Game')
        title.position(360,150)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            Players=Players+1
            player.intex=Players
            player.updateName()
            player.updateNo_(Players)
            var Welcome_pls = createElement("H2")
            Welcome_pls.html("Hi,"+player.name)
            Welcome_pls.position(200,160)
        })


    }
}