/**
 * @create 2022-01-27 13:03:13
 */
class GameController {

    private _curRole: Guanyuan;   //当前角色
    public year:number = 1;
    private month:number = 0;
    private time:number = 0;

    private music_on: boolean;
    private music_bg: egret.Sound;
    private music_wansui: egret.Sound;

    public static MONTH_NAME :string[] = ['正月','二月','三月', '四月','五月','六月','七月', '八月','九月','十月','十一月','十二月'];
    public static SEASON_NAME :string[] = ['春','夏','秋','冬'];
    private static TIME_NAME :string[] = ['清晨','正午','傍晚'];

    public spendTime(t = 1) :void
    {
        this.time += t; 
        if(this.time >= 3)
        {
            this.time = 0;
            this.month +=1;  
            if(this.month >= 12)
            {
                this.month = 0;
                this.year +=1;
            }
        }
    }
    public getTime():string
    {
        var result = `${this.国号} ${this.年号} ${Utils.digitToChinese(this.year)}年(${GameController.SEASON_NAME[Math.floor( this.month / 3)]}) ${GameController.MONTH_NAME[this.month]} ${GameController.TIME_NAME[this.time]}   `; 
        return result;
    }

    private initialSound(): void {
        this.music_on = true;
        this.music_bg = RES.getRes('bg_mp3');
        this.music_wansui = RES.getRes('万岁_mp3');
        // this.music_bg.load("resource/assets/music/bg.mp3");
        // this.music_wansui.load("resource/assets/music/万岁.mp3");
    }

    public playBGM(): void {
        if (this.music_on)
            this.music_bg.play(0, 0);
    }

    public playWansui():void
    {
        if (this.music_on)
            this.music_wansui.play(0, 1);
    }

    private _国号: string;
    public get 国号(): string {
        return this._国号;
    }
    public set 国号(value: string) {
        this._国号 = value;
    }
    private _年号: string;
    public get 年号(): string {
        return this._年号;
    }
    public set 年号(value: string) {
        this._年号 = value;
    }

    private static instance: GameController;
    private constructor() {
        console.log('in Gamecontroll');
        this.initialSound();
        this.loadConf();
    }

    public get Conf():object
    {
        return this.conf;
    }

    public get Newgame_setting(): object
    {
        return this.newgame_setting ;
    }

    private conf:object;
    private newgame_setting:object;

    private loadConf()
    {
        this.conf = RES.getRes("conf_json");
        this.newgame_setting = RES.getRes("new_game");
    }

    public static getInstance(): GameController {
        if (GameController.instance == null)
            GameController.instance = new GameController();
        return GameController.instance;
    }

    set curRole(value: Guanyuan) {
        this._curRole = value;
    }
    get curRole(): Guanyuan {
        return this._curRole;
    }
    
}