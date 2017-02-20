var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.ani1=null;
		    this.timeBar=null;
		    this.scoreNums=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}

		STATICATTR$(GameUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"compId":1,"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":198,"x":154,"name":"item0"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":199,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":203,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":292,"x":122,"name":"item3"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":76,"x":5,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":291,"x":343,"name":"item4"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":76,"x":1,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":289,"x":544,"name":"item5"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":123,"name":"item6"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"x":-1,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":394,"x":346,"name":"item7"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":393,"x":561,"name":"item8"},"child":[{"type":"Image","props":{"y":1,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":10,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":78,"x":3,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":18,"x":64,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":5,"x":5,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":40,"x":10,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}],"animations":[{"nodes":[{"target":1,"keyframes":{"rotation":[{"value":-18,"tweenMethod":"linearNone","tween":true,"target":1,"key":"rotation","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};}
		]);
		return GameUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);
		}

		STATICATTR$(GameStartUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55.5,"x":38.5,"skin":"ui/help.png"}},{"type":"Button","props":{"y":443,"x":304,"var":"startBtn","stateNum":"2","skin":"ui/btn_start.png"}}]};}
		]);
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}

		STATICATTR$(HammerUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":62,"x":61,"width":98,"var":"hammer","skin":"ui/hammer.png","rotation":-20,"pivotY":50,"pivotX":56,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":63,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":62,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"var":[{"value":"hammer","tweenMethod":"linearNone","tween":false,"target":2,"key":"var","index":0}],"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};}
		]);
		return HammerUI;
	})(View);