var Hammer = (function(_super){
    function Hammer(){
        Hammer.super(this);
        //实例化锤子类即开始使用
        this.start();
    }
    Laya.class(Hammer,"Hammer",_super);
    var _proto = Hammer.prototype;
    //开始使用
    _proto.start = function(){
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
    }
    //结束使用
    _proto.end = function(){
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        // this.visible = false;
    }
    //舞台鼠标按下事件
    _proto.onMouseDown = function(){
        //播放动画，开始帧-是否循环播放
        this.hit.play(0,false);
    }
    //舞台鼠标移动动画
    _proto.onMouseMove = function(){
        //小锤子在舞台上的坐标值
        //mouseX为鼠标在舞台上的坐标值，mouseY同理
        this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/3);
    }
    return Hammer;
})(ui.HammerUI)