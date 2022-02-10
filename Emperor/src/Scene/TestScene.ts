class TestScene extends eui.Component implements  eui.UIComponent {
	public tableControl:TableControl;

	public constructor() {
		super();
		this.addEventListener(egret.Event.COMPLETE,this.onComplete,this);	}

	public onComplete(event: egret.Event): void
	{
		var sourceArr: any[] = [];
		for(var i: number = 1;i < 50;i++)
		{
			let role = new Guanyuan(12, '张三' +i.toString());
			var _values = [role.name, '丞相', role.wuli.toString(), role.zhili.toString(), role.tongsuai.toString(), role.zhengzhi.toString(),
				'44', '55', '77'];
			sourceArr.push({ label: "item" + i,num: "num=" + Math.ceil(Math.random() * 100), values: _values});
		}
		var header: string[] = ['姓名','官职', '武力', '智力', '统帅','政治','魅力', '体力','体能', '操作'];
		//用ArrayCollection包装
		var myCollection: eui.ArrayCollection = new eui.ArrayCollection(sourceArr);
		this.tableControl.collection = myCollection;
		this.tableControl.header = header;


	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}