class Palace extends eui.Component implements  eui.UIComponent {
	public lblDong:eui.Label;
	public lblInfo:eui.Label;

	public lblXuanzheng:eui.Label;
	public lblYangxin:eui.Label;
	public lblZhichen:eui.Label;
	public lblXidian:eui.Label;
	public lblDongdian:eui.Label;
	public lblJingCheng:eui.Label;


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
		this.lblDong.text = GameController.getInstance().getTime();
		this.lblInfo.text = GameController.getInstance().curRole.toString();
		this.lblXuanzheng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gotoScene,this);		
	}

	private gotoScene(e:egret.TouchEvent):void
	{
		SceneManager.getInstance().gotoScene(SceneManager.SCENE_COURT);
		if(SceneManager.getInstance().initial_court)
			GameController.getInstance().playWansui();
		GameController.getInstance().spendTime();
	}
	
}