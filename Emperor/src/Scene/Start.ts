class Start extends eui.Component implements  eui.UIComponent {
	public lblStart:eui.Label;
	public lblContinue:eui.Label;

	public constructor() {
		super();
		//this.visible= false;
		//RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigComplete, this);
	}

	private onConfigComplete(event: RES.ResourceEvent):void
	{
		console.log('资源初始化成功');
		RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onConfigComplete, this);
		this.visible = true;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.lblStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_start, this);
		this.lblContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_music, this);
	}
	
	private tap_start(e: egret.TouchEvent):void
	{
		SceneManager.getInstance().gotoScene(SceneManager.SCENE_SETNAME);
	}

	private tap_music(e: egret.TouchEvent):void
	{
		GameController.getInstance().playBGM();
	}
}