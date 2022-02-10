

class BasicCharaItem extends eui.ItemRenderer implements  eui.UIComponent {	
	public static even:boolean = true;
	private tableManager: TableManager = TableManager.getInstance();

	public constructor() {
		super();
		this.width = this.tableManager.width;
		this.maxWidth = this.width;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected dataChanged(): void
	{
		if(!this.data) return;
		this.removeChildren();
		var group = new eui.Group();
		var layout = new eui.HorizontalLayout();
		layout.gap = 2;
		group.layout = layout;
		group.left = 0;
		group.right = 0;
		group.height = 40;

		this.addChild(group);
		var length = this.data.values.length;
		if(this.data.operation != '')
			length ++;
		var total:number = this.width - 80 * 3 - layout.gap * length;
		var avg = total / (length - 3);
		for (let i = 0; i < this.data.values.length; i++) {
			var lbl = new eui.Label();
			lbl.fontFamily = "KaiTi";
			lbl.background= true;
			if(BasicCharaItem.even)
				lbl.backgroundColor = 0xb2b295;
			else
				lbl.backgroundColor = 0xDADABD;
			lbl.size = 20;
			lbl.text = this.data.values[i];
			lbl.height = 40;
			lbl.verticalAlign = "middle";
			lbl.textAlign = 'center';
			if(i < 2)
				lbl.width = 80;
			else
				lbl.width = avg;
			group.addChild(lbl);
		}
		console.log('in item:  avg: ', avg, ' width: ', this.width );
		let btn = new eui.Button();
		if(this.data.operation != null)
			btn.label = this.data.operation;
		else
			btn.label = '确认';
		btn.height = 40;
		btn.width = 80;
		if(this.data.operation != '')
			group.addChild(btn);
		BasicCharaItem.even = ! BasicCharaItem.even;

	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}