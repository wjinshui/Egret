class ImageButton extends eui.Component  implements  eui.UIComponent {
	public content:eui.Label;
	protected lbl:string = '户';


	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE, this.complete, this);
	}

	private complete():void
	{
		this.content.text = this.lbl;
		this.removeEventListener(eui.UIEvent.COMPLETE, this.complete, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);

	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public setContent(_content:string):void
	{
		this.lbl = _content;
		if(this.content != null)
			this.content.text = _content;
	}

	public getContent():string
	{
		return this.content.text;
	}
	
}