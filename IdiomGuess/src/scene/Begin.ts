class Begin extends eui.Component implements  eui.UIComponent {
	public btnStart:eui.Button;

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
		this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
	}

	private handler(e: egret.TouchEvent):void
	{
		SceneManager.getInstance().gotoScene(SceneManager.PLAY);
		console.log('aaa');
	}
	
}