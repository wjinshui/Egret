class Fengjue extends eui.Component implements  eui.UIComponent
{
	public lab_wang:eui.Label;
	public lab_gong:eui.Label;
	public lab_hou:eui.Label;
	public lab_bo:eui.Label;
	public lab_nan:eui.Label;
	public lab_zi:eui.Label;
	public lab_wu:eui.Label;

	public setVisual(visual:boolean):void
	{
		this.visible = visual;
		if(this.visible)
		{

			var guanyuan = PlayerPrefs.getInstance().getSelectedGuanyuan();
			switch (guanyuan.juewei)
			{
				case '王':
					this.unableLabel(this.lab_wang);
					break;
				case '公':
					this.unableLabel(this.lab_gong);
					break;
				case '候':
					this.unableLabel(this.lab_hou);
					break;
				case '伯':
					this.unableLabel(this.lab_bo);
					break;
				case '子':
					this.unableLabel(this.lab_zi);
					break;
				case '男':
					this.unableLabel(this.lab_nan);
					break;
				case '无':
					this.unableLabel(this.lab_wu);
					break;
			}
			this.lab_wang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.lab_gong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.lab_hou.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.lab_bo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.lab_nan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.lab_zi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
			this.lab_wu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
		}
	}

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
		
	}

	private onTouch(e:egret.TouchEvent):void
	{
		var lbl:eui.Label =<eui.Label> e.currentTarget;
		lbl.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
		PlayerPrefs.getInstance().getSelectedGuanyuan().juewei = lbl.text;
		SceneManager.getInstance().gotoScene(SceneManager.SCENE_FENGJUE);
	}



	private onComplete(e:eui.UIEvent):void
	{

	}

	private unableLabel(lbl:eui.Label):void
	{
		lbl.textColor = 0xADA2A2;
		lbl.touchEnabled = false;
	}
	
}