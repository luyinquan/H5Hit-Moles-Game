var Game = (function(_super){
    function Game(){
        //地鼠数组
        this.moles = new Array;
        this.molesNum = 9;
        Game.super(this);
        //进度条初始值为1
        this.timeBar.value = 1;
        //存储游戏得分
        this.score = 0;
        //敲击地鼠回调函数|执行域-回调方法-回调方法参数-默认执行一次false没有执行次数限制
        this.hitCallBackHd = Laya.Handler.create(this,this.setScore,null,false);
        for(var i = 0;i<this.molesNum;i++){
            this.box =  this.getChildByName("item"+i);
            this.mole = new Mole(this.box.getChildByName("normal"),this.box.getChildByName("hit"),19,this.hitCallBackHd,this.box.getChildByName("scoreImg"));
            this.moles.push(this.mole); 
        }
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        // this.hammer.start();
        Laya.timer.loop(1000,this,this.isSHow);
    }
    //注册类
    Laya.class(Game,"Game",_super);
    //接收原型
    var _proto = Game.prototype;
    _proto.isSHow = function(){
        this.timeBar.value-=(1/10);
        if(this.timeBar.value<=0){
            this.gameOver();
            return;
        }
        // this.mole.show();
        this.index = Math.floor(Math.random()*this.molesNum);
        this.moles[this.index].show();
    }
    //游戏结束
    _proto.gameOver = function(){
        Laya.timer.clear(this,this.isSHow);
        console.log('游戏结束');
    }
    //记分方法
    _proto.setScore = function(type){
        this.score+=(type==1?-100:100);
        if(this.score<=0)this.score = 0;
        this.updateScoreUI();
    }
    //更新得分ui
    _proto.updateScoreUI = function(){
        //存放切片动画数值对象
        this.data = {};
        this.temp = this.score;
        //切片动画赋值规则
        // this.scoreNums.dataSource = {item0:{index:5},item1:{index:2}};
        for(var i=9;i>=0;i--){
            this.data["item"+i] = {index:Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.scoreNums.dataSource = this.data;
    }
    return Game;
})(ui.GameUI)