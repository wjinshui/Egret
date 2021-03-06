class TableControl extends eui.Component implements  eui.UIComponent {
	public groupContent:eui.Group;
	public groupHeader:eui.Group;
	public scroller:eui.Scroller;
	private ascend: boolean = true;
	private list: eui.List;

	public constructor() {
		super();
		this.width = TableManager.getInstance().width;
		this.maxWidth = this.width;
		this.addEventListener(egret.Event.COMPLETE,this.onComplete,this);
	}

	private _header:string[];

	get header(): string[] {
		return this._header;
	}

	set header(values: string[]) {
		this._header = values;
		this.groupHeader.removeChildren();
		var total:number = this.width - 80 * 3 - 2 * values.length;
		var avg = total  / (values.length - 3);
		for (let i = 0; i < values.length; i++) {
			var lbl = new eui.Label();
			lbl.name = i.toString();
			lbl.fontFamily = "KaiTi";
			lbl.background= true;
			lbl.backgroundColor = 0xA04C45;
			lbl.size = 20;
			lbl.text = values[i];
			lbl.height = 40;
			lbl.verticalAlign = "middle";
			lbl.textAlign = 'center';
			if(i < 2 || i==values.length -1)
				lbl.width = 80;
			else
				lbl.width = avg;
			this.groupHeader.addChild(lbl);
			lbl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sortCollection, this);
		}

	}

	private _collection: eui.ArrayCollection;

	get collection(): eui.ArrayCollection {
		return this._collection;
	}

	set collection(value: eui.ArrayCollection) {
		this._collection = value;
		this.list.dataProvider = this.collection;

	}

	public onComplete(event: egret.Event): void
	{
		this.list = new eui.List();
		this.list.dataProvider = this.collection;
		this.scroller.addChild(this.list);
		this.scroller.viewport = this.list;
		this.list.percentWidth = 100;
		this.list.selectedIndex = 1;
		this.list.itemRenderer = BasicCharaItem;
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTap, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	private sortCollection(e:egret.TouchEvent):void
	{
		let component = <eui.Label> e.currentTarget;
		var index = parseInt(component.name);
		var coll = this._collection;
		if (this.ascend)
			if (this._header[index] == '??????')
				coll.source.sort((n1, n2) => {
					var v1 = Guanyuan.GUANZHIMAP[n1['values'][index]];
					var v2 = Guanyuan.GUANZHIMAP[n2['values'][index]];
					if (v1 == undefined)
						v1 = 100;
					if (v2 == undefined)
						v2 = 100;
					return v1 - v2;
				});
			else
				coll.source.sort((n1, n2) => {
					return parseInt(n1['values'][index]) - parseInt(n2['values'][index])
				});
		else
			coll.source.reverse();
		this.ascend = !this.ascend;
		this.collection = null;
		this.collection = coll;

	}

	private onTap(e:eui.PropertyEvent):void{
		//??????????????????
		var item = this.list.selectedItem;
		if(item.operation == '??????')
		{
			PlayerPrefs.getInstance().setSelectedGuanyuan(item.id);
			SceneManager.getInstance().gotoScene(SceneManager.SCENE_DIAOHUAN_QUEREN);
		}
		else if(item.operation == '??????')
		{
			PlayerPrefs.getInstance().setDiaohuanGuanyuan(item.id);
			SceneManager.getInstance().gotoScene(SceneManager.SCENE_DIAOHUAN);
		}
		else if(item.operation == '??????')
		{
			PlayerPrefs.getInstance().setSelectedGuanyuan(item.id);
			let guanyuanbiao: GuanzhiBiao = <GuanzhiBiao> this.parent;
			guanyuanbiao.setMaskVisual(true);
		}

	}
	
}