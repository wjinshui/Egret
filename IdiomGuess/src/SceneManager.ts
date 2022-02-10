class SceneManager extends egret.DisplayObjectContainer {

	private static instance:SceneManager;
	public static readonly SCENE_BEGIN = 'begin';
	public static readonly SCENE_CHOOSE_LEVEL = 'choose_level';
	public static readonly PLAY = 'play';
	private begin:Begin;
	private choose_level: ChooseLevel;
	private play:Play;
	private constructor() {
		super();
		this.begin = new Begin();
		this.choose_level = new ChooseLevel();
		this.play = new Play();
		this.addChild(this.begin);
	}

	public static getInstance(): SceneManager
	{
		if(SceneManager.instance == null)
			SceneManager.instance = new SceneManager();
		return SceneManager.instance;
	}

	public gotoScene(scene):void
	{
		this.removeChildren();
		switch(scene)
		{
			case SceneManager.SCENE_BEGIN:
				this.addChild(this.begin);
				break;
			case SceneManager.SCENE_CHOOSE_LEVEL:
				this.addChild(this.choose_level);
				break;
			case SceneManager.PLAY:
				this.addChild(this.play);
				break;

		}
	}
}