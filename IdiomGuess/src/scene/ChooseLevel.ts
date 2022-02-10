class ChooseLevel extends eui.Component implements  eui.UIComponent {
	public btnReturnMain:eui.Button;

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
		this.btnReturnMain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handler, this);
	}

	private handler(e: egret.TouchEvent): void{
		SceneManager.getInstance().gotoScene(SceneManager.SCENE_BEGIN);
	}
	
}