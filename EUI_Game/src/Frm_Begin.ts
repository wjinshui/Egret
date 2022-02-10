class Frm_Begin extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}