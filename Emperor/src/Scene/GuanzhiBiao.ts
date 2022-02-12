class GuanzhiBiao extends eui.Component implements  eui.UIComponent {
	public tableGuanzhi:TableControl;
	public btnReturn:ImageButton;
	private type:string;
	public mask_fengjue:Fengjue;



	public constructor (_type:string = '')
	{
		super();
		this.type = _type;
		this.addEventListener(eui.UIEvent.COMPLETE,this.onComplete,this);
	}

	public setMaskVisual(visible:boolean)
	{
		this.mask_fengjue.setVisual(true);		
	}



	public onComplete(event: egret.Event): void
	{

		var sourceArr: any[] = [];
		var guanyuans: Array<Guanyuan>;
		if(this.type == '调换')
			guanyuans = PlayerPrefs.getInstance().getDiaohuan();
		else
			guanyuans = PlayerPrefs.getInstance().guanyuans;
		for (const guanyuan of guanyuans) {
			var _values = [guanyuan.name, guanyuan.guanzhi, guanyuan.wuli.toString(), guanyuan.zhili.toString(), guanyuan.zhengzhi.toString(),
				guanyuan.meili.toString(),guanyuan.zhongcheng.toString(),guanyuan.qinglian.toString(),guanyuan.juewei.toString()];
			sourceArr.push({ id: guanyuan.id, operation: this.type , values: _values});
		}
		sourceArr.sort((n1, n2) => {
			var v1 = Guanyuan.GUANZHIMAP[n1['values'][1]];
			var v2 = Guanyuan.GUANZHIMAP[n2['values'][1]];
			if (v1 == undefined)
				v1 = 100;
			if (v2 == undefined)
				v2 = 100;
			return v1 - v2;
		});
		if(this.type == '')
			var header: string[] = ['姓名','官职', '武力', '智力', '政治','魅力', '忠诚','清廉','爵位'];
		else
			var header: string[] = ['姓名','官职', '武力', '智力', '政治','魅力', '忠诚','清廉','爵位', '操作'];
		//用ArrayCollection包装
		var myCollection: eui.ArrayCollection = new eui.ArrayCollection(sourceArr);
		this.tableGuanzhi.collection = null;
		this.tableGuanzhi.collection = myCollection;
		this.tableGuanzhi.header = header;
		this.btnReturn.setContent('返回');
		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
	}

	private tap(e:egret.TouchEvent):void
	{
		SceneManager.getInstance().gotoScene(SceneManager.SCENE_COURT);
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