class SceneManager extends egret.DisplayObjectContainer {
    private start: Start;
    private setname: SetName;
    private palace: Palace;
    private court:Court;
    private guanzhibiao:GuanzhiBiao;
    private diaohuan: GuanzhiBiao;
    private diaohuan_queren:GuanzhiBiao;
    private preload:Preload;
    public static readonly SCENE_START = 'start';
    public static readonly SCENE_SETNAME = 'setname';
    public static readonly SCENE_PALACE = 'palace';
    public static readonly SCENE_COURT = 'court';
    public static readonly SCENE_GUANZHIBIAO = 'guanzhibiao';
    public static readonly SCENE_DIAOHUAN = 'diaohuan';
    public static readonly SCENE_PRELOAD = 'preload';
    public static readonly SCENE_DIAOHUAN_QUEREN = 'queren';
    private static instance: SceneManager;

 

    public static getInstance(): SceneManager {
        if (SceneManager.instance == null)
            SceneManager.instance = new SceneManager();
        return SceneManager.instance;
    }




    private constructor() {
        super();
        this.start = new Start();
        this.setname = new SetName();
        this.palace = new Palace();
        this.court = new Court();
        this.guanzhibiao = new GuanzhiBiao();
        this.diaohuan = new GuanzhiBiao('选择');
        this.preload = new Preload();
        this.diaohuan_queren = new GuanzhiBiao('调换');
        this.addChild(this.preload);

    }


    public initial_court =  false;
    public gotoScene(scene): void {
        this.removeChildren();
        switch (scene) {
            case SceneManager.SCENE_START:
                this.addChild(this.start);
                break;
            case SceneManager.SCENE_SETNAME:
                this.addChild(this.setname);
                break;
            case SceneManager.SCENE_PALACE:
                this.addChild(this.palace);
                break;
            case SceneManager.SCENE_COURT:
                this.addChild(this.court);
                break;
            case SceneManager.SCENE_GUANZHIBIAO:
                this.addChild(new GuanzhiBiao());
                break;
            case SceneManager.SCENE_DIAOHUAN:
                this.addChild(new GuanzhiBiao('选择'));
                break;
            case SceneManager.SCENE_PRELOAD:
                this.addChild(this.preload);
                break;
            case SceneManager.SCENE_DIAOHUAN_QUEREN:
                this.addChild(new GuanzhiBiao('调换'));
                break;


        }
    }
}
