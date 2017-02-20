var GameStart = (function(_super){
    function GameStart(){
        GameStart.super(this);
        this.startBtn.on(Laya.Event.CLICK,this,this.onStartGame);
    }
    Laya.class(GameStart,"GameStart",_super);
    var _proto = GameStart.prototype;
    _proto.onStartGame = function(){
        //移除当前界面
        this.removeSelf();
        if(!LayaSample.game){
            LayaSample.game = new Game();
        }
        Laya.stage.addChild(LayaSample.game);
    }
    return GameStart;
})(ui.GameStartUI)
