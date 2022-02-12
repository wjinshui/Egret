/**
 * 游戏存档
 */
class PlayerPrefs {

    public guanyuans :Array<Guanyuan> = new Array<Guanyuan>();
    public countries: Array<Country> = new Array<Country>();
    public cities: Array<City> = new Array<City>();
    public selected_guanyuan:Guanyuan;


    private static instance: PlayerPrefs;
    private localAccess: DataAccess;


    public static getInstance(): PlayerPrefs {
        if (PlayerPrefs.instance == null)
            PlayerPrefs.instance = new PlayerPrefs();
        return PlayerPrefs.instance;
    }

    public setSelectedGuanyuan(guanyuanID:string):void
    {
        for (const guanyuan of this.guanyuans) {
            if(guanyuan.id == guanyuanID)
                this.selected_guanyuan = guanyuan;
        }
    }

    public getSelectedGuanyuan():Guanyuan
    {
        return this.selected_guanyuan;
    }

    private constructor() {

    }

    public newGame():void
    {
        var newgame_setting = GameController.getInstance().Newgame_setting;
        this.construct_country(newgame_setting['countries']);
        this.construct_cities(newgame_setting['cities']);
        this.construct_guanyuan(newgame_setting['guanyuans']);
        var emperor = new Emperor();
    }

    private construct_guanyuan(guanyuan_setting:Array<any>)
    {
        for (const element of guanyuan_setting) {
            var g1:Guanyuan = element;
            var guanyuan = new Guanyuan(g1.age, g1.name); // 从json转过来的本质上还是一个object, 无法支持该类的任何方法
            guanyuan.quality = g1.quality;
            guanyuan.guanzhi = g1.guanzhi;
            guanyuan.id = g1.id;
            guanyuan.suoshu = g1.suoshu;
            guanyuan.birthYear = g1.birthYear;
            guanyuan.deadYear = g1.deadYear;
            guanyuan.juewei = g1.juewei;
            guanyuan.male = g1.male;
            guanyuan.meili = g1.meili;
            guanyuan.wuli = g1.wuli;
            guanyuan.tongsuai = g1.tongsuai;
            guanyuan.zhili = g1.zhili;
            guanyuan.zhengzhi = g1.zhengzhi;
            guanyuan.qinglian = g1.qinglian;
            guanyuan.zhongcheng = g1.zhongcheng;
            guanyuan.real = g1.real;
            guanyuan.touxianID = g1.touxianID;
            for (const country of this.countries) {
                if(country.name == guanyuan.suoshu)
                {
                    country.guanyuans.push(guanyuan);
                    break;
                }
            }
            this.guanyuans.push(guanyuan);
        }
    }

    private construct_cities(city_setting: Array<any>)
    {
        for (const element of city_setting) {
            var city = new City();
            city.name = element['name'];
            city.country = element['country'];
            for (const country of this.countries) {
                if(country.name == city.country)
                {
                    country.cities.push(city);
                    break;
                }
            }
            this.cities.push(city);
        }
    }

    private construct_country(country_setting: Array<any>)
    {
        for (const element of country_setting) {
            var country = new Country();
            country.emperor = element['emperor'];
            country.name = element['name'];
            this.countries.push(country);
        }
    }

    public save():void
    {
        var json = JSON.stringify(this);
        this.localAccess.save_key('game', json);
    }

    public load():void
    {
        var json = this.localAccess.get_key('game');
        const t1 = JSON.parse(json);
    }

    public getDiaohuan():Array<Guanyuan> {
        var guanyuans: Array<Guanyuan> = new Array<Guanyuan>();
        for (const guanyuan of this.guanyuans) {
            if(guanyuan.suoshu != Country.CUR_PLAYER)
                continue;
            if(guanyuan.guanzhi == '赋闲')
                guanyuans.push(guanyuan);
        }
        guanyuans.push(this.selected_guanyuan);
        guanyuans.reverse();
        return guanyuans;
    }

    public setDiaohuanGuanyuan(id:string):void {
        for (const guanyuan of this.guanyuans) {
            if(guanyuan.id == id)
            {
                guanyuan.guanzhi = this.selected_guanyuan.guanzhi;
                this.selected_guanyuan.guanzhi = '赋闲';
                
            }
        }

    }
}