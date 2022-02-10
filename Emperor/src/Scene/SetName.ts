class SetName extends eui.Component implements  eui.UIComponent {
	public txtCountry:eui.TextInput;
	public txtYear:eui.TextInput;
	public txtName:eui.TextInput;
	public txtSon:eui.TextInput;
	public lblNext:eui.Label;
	
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
		this.lblNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.create_role, this);
	}

	private create_role(e: egret.TouchEvent): void
	{
		let role = new Guanyuan(16, this.txtName.text, Guanyuan.QUALITY_ZHI);
		let control = GameController.getInstance();
		control.curRole = role;
		control.国号 = this.txtCountry.text.trim();
		control.年号 = this.txtName.text.trim();
		SceneManager.getInstance().gotoScene(SceneManager.SCENE_PALACE);

	}
	
}