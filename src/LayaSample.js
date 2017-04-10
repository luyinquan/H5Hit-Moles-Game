(function(){
    (function(LayaSample){
        //初始化引擎
        Laya.init(800,600);
        //设置stage颜色
        Laya.stage.bgColor = "#ffcccc";
        //加载资源,资源路径、回调、进度回调、资源类型
        Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this,onLoad),null,Laya.Loader.ATLAS);
    })();
    function onLoad(){
        // var game = new Game();
        // Laya.stage.addChild(game);
        LayaSample.gameStart = new GameStart();
        Laya.stage.addChild(LayaSample.gameStart);
    }
    function progress(proce){
        console.log(proce);
    }
    
})(window.LayaSample || (window.LayaSample = {}))


