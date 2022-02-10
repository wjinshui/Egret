class Court extends eui.Component implements eui.UIComponent {
	public group_type:eui.Group;
	public group_detail:eui.Group;


	private type_name:string[] = ['奏','吏','户','礼','兵','刑','工','军','退'];
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	private conf:Array<any>;
	private complete(): void {
		this.conf = <Array<any>> GameController.getInstance().Conf;
		SceneManager.getInstance().initial_court = true;
		for (let i = 0; i < this.conf.length; i++) {
		 	let component = <ImageLabel> this.group_type.getChildAt(i);
		 	component.setContent(this.conf[i]['type']);
			component.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_type, this);
		}
		GameController.getInstance().playWansui();
		this.group_detail.removeChildren();
	}

	private tap_type(e:egret.TouchEvent):void
	{
		let component = <ImageLabel> e.currentTarget;
		switch (component.getContent())
		{
			case '奏':
				break;
			case '退':
				this.group_detail.removeChildren();
				SceneManager.getInstance().gotoScene(SceneManager.SCENE_PALACE);
				break;
			default:
				this.group_detail.removeChildren();
				for (let i = 0; i < this.conf.length; i++) {
					if(this.conf[i]['type'] == component.getContent())
					{
						for (const detail of this.conf[i]['detail']) {
							let com_detail = new ImageLabel();
							com_detail.setContent(detail);
							com_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_detail, this);
							this.group_detail.addChildAt(com_detail,0);
						}
						break;
					}
				}
		}
	}

	private tap_detail(e:egret.TouchEvent):void
	{
		let component = <ImageLabel> e.currentTarget;
		switch (component.getContent()) {
			case '官职表':
				SceneManager.getInstance().gotoScene(SceneManager.SCENE_GUANZHIBIAO);
				break;
			case '调换官员':
				SceneManager.getInstance().gotoScene(SceneManager.SCENE_DIAOHUAN);
				break;
			case '取消':
				this.group_detail.removeChildren();
				break;
			default:
				break;

		}
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		// for (let i = 0; i < this.group_type.numChildren; i++) {
		// 	let component = <ImageLabel> this.group_type.getChildAt(i);
		// 	component.setContent(this.type_name[i]);
		// }

	}
	
}