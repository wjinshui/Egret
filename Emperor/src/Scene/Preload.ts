class Preload extends eui.Component implements  eui.UIComponent {
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
		var res:ResUtils = ResUtils.getInstance();
		res.loadGroupWithPro("preload",
			()=>{
				console.log("login load complete"); 
				SceneManager.getInstance().gotoScene(SceneManager.SCENE_START)},
			(e:RES.ResourceEvent)=>{console.log("login progress",e.itemsLoaded,e.itemsTotal)},this);
	}
	
}