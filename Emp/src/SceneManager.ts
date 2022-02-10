class SceneManager extends egret.DisplayObjectContainer 
{
    private start:Start;
    public static readonly SCENE_START = 'start';
    private static instance:SceneManager;

    public static getInstance(): SceneManager{
        if(SceneManager.instance == null)
            SceneManager.instance = new SceneManager();
        return SceneManager.instance;
    }

    private constructor() {
        super();
		this.start = new Start();
        this.addChild(this.start);
        
	}

    public gotoScene(scene):void
	{
		this.removeChildren();
		switch(scene)
		{
			case SceneManager.SCENE_START:
				this.addChild(this.start);
				break;


		}
	}
}
