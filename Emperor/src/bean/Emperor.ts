class Emperor
{
    public name:string;
    public liannao:string;
    public zhihui:number;
    public wushu:number;
    public caiyi:number;
    public meili:number;
    public jiankang:number = 100;
    public kuaile:number = 100;
    public souming:number = 1 * 3 * 12 * 50;
    public tili:number = 100;
    public maxTili:number = 120;
    public nianling:number = 16;

    public constructor() {
        var min = 60;
        var max = 100;
        this.zhihui = Utils.getRandomNum(min, max);
        this.wushu = Utils.getRandomNum(min, max);
        this.caiyi = Utils.getRandomNum(min, max);
        this.meili = Utils.getRandomNum(min, max);
        this.name = Utils.getRandomName();
        this.liannao = "太宗";
    }
}