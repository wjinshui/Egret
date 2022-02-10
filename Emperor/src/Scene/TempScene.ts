class TempScene extends eui.Component implements  eui.UIComponent {
    public scroller:eui.Scroller;


    public dataGroup:eui.DataGroup;

	public constructor() {
		super();
		this.addEventListener(egret.Event.COMPLETE,this.onAddToStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	public onAddToStage(event: egret.Event): void
    {
        //先创建一个数组
        var sourceArr: any[] = [];
        for(var i: number = 1;i < 50;i++)
        {
            let role = new Guanyuan(12, '张三' +i.toString());
            var _values = [role.name, '丞相', role.wuli.toString(), role.zhili.toString(), role.tongsuai.toString(), role.zhengzhi.toString(),
            '44', '55', '77'];
            sourceArr.push({ label: "item" + i,num: "num=" + Math.ceil(Math.random() * 100), values: _values});
        }
        //用ArrayCollection包装
        var myCollection: eui.ArrayCollection = new eui.ArrayCollection(sourceArr);
        // let dataGroup = new eui.DataGroup();
        // dataGroup.dataProvider = myCollection;
        // dataGroup.percentWidth = 100;
        // dataGroup.percentHeight = 100;
        // dataGroup.useVirtualLayout = true;//性能优化，避免创建过多对象实例
        // dataGroup.itemRenderer = LabelRenderer;

        // this.scroller.viewport = dataGroup;
        this.list = new eui.List();
        this.list.dataProvider = myCollection;
        this.scroller.addChild(this.list);
        this.scroller.viewport = this.list;
        this.list.useVirtualLayout = true;
        this.list.percentWidth = 100;

        this.list.selectedIndex = 1;
        this.list.itemRenderer = BasicCharaItem;
        this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onTap, this);
    }
    private list: eui.List;

    private onTap(e:eui.PropertyEvent):void{
        //获取点击消息
        console.log(this.list.selectedItem,this.list.selectedIndex)
    }


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}

