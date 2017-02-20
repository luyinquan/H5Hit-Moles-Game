var Mole = (function(){
    function Mole(normalState,hitState,downY,hitCallBackHd,scoreImg){
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.hitCallBackHd = hitCallBackHd;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;     
        this.reset();
        this.normalState.on(Laya.Event.CLICK,this,this.hit);
    }
    var _proto = Mole.prototype;
    //重置
    _proto.reset = function(){
        this.normalState.visible = false;
        this.hitState.visible =false;
        this.scoreImg.visible = false;
        this.isVctive = false;
        this.isShow = false;
        this.isHit = false;
    }
    //显示
    _proto.show = function(){
        if(this.isVctive) return;
        this.isVctive = true;
        this.isShow = true;
        this.type = Math.random()<0.3?1:2;
        this.normalState.skin = "ui/mouse_normal_"+this.type+".png";
        this.hitState.skin = "ui/mouse_hit_"+this.type+".png";
        this.scoreImg.skin = "ui/score_"+this.type+".png";
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        //缓动动画
        //参数列表：执行的对象-属性列表-动画时间-动画类型-回调函数(执行域、回调函数名)-延迟执行时间;
        Laya.Tween.to(this.normalState,{y:this.upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete),0);
    }
    //停留
    _proto.showComplete = function(){
        if(this.isShow && !this.isHit){
            //时间函数，2000秒只执行一次，执行域，回调;
            Laya.timer.once(2000,this,this.hide);
        }
    }
    //消失
    _proto.hide = function(){
        if(this.isShow && !this.isHit){
            this.isHit = false;
            Laya.Tween.to(this.normalState,{y:this.downY},300,Laya.Ease.backIn,Laya.Handler.create(this,this.reset),0);
        }
    }
    //打击状态
    _proto.hit = function(){
        if(this.isShow && !this.isHit){
            this.isShow = false;
            this.isHit = true;
            //清楚停留定时器
            this.normalState.visible = false;
            this.hitState.visible = true;
            this.hitCallBackHd.runWith(this.type);
            Laya.timer.clear(this,this.hide);
            Laya.timer.once(500,this,this.reset);
            this.showScore();
        }
    }
    //显示飘字效果
    _proto.showScore = function(){
        this.scoreImg.y = this.scoreY+30;
        this.scoreImg.scale(0,0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg,{y:this.scoreY,scaleY:1,scaleX:1},300,Laya.Ease.backOut);
    }
    return Mole;
})()