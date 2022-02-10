
class Guanyuan {

    public static readonly GUANZHIMAP: { [key: string]: number; } = {
        "丞相" : 0,
        "中央将军" : 1,
        "吏部尚书" :2,
        "户部尚书" :3,
        "礼部尚书" :4,
        "兵部尚书" :5,
        "刑部尚书" :6,
        "工部尚书" :7,
        "赋闲" : 10000,
    };

    public static readonly QUALITY_BAI : number = 60;  //不同品质的武将,其素质上限都有所影响
    public static readonly QUALITY_LAN : number = 70;
    public static readonly QUALITY_ZHI : number = 80;
    public static readonly QUALITY_CHENG : number = 90;

    public touxianID: number; // 头像ID
    public id:string;
    public name:string;  //姓名
    public guanzhi:string = '赋闲';  //官职
    public suoshu:string = Country.CUR_PLAYER; //所属, 默认就是当前玩家
    public male:boolean = true; //性别男
    public birthYear:number ;   //出生年份, 最大值为 当前年份 - 16(即最小16岁), 最小值为 当前年份 -100 (即最多100岁).
    public deadYear : number; // 死亡年份, 最小值为 当前年份, 最大值为  max(出生年份 + 100, 当前年份)
    public age: number;   //年龄，由 当前年份 - 出生年份, 例如 当前为游戏3年, 出生日期为 0, 则该角色的年龄为 3岁.

    public zhili:number; //智力，影响一些技术效果
    public wuli:number;  //武力，影响训练等效果
    public tongsuai:number; //统帅，影响防御
    public meili:number;    //魅力， 影响外交和交友
    public zhengzhi:number;  //政治
    public qinglian:number; //清廉,影响收入
    public zhongcheng:number; //忠诚, 决定反叛概率
    public juewei:string; //爵位, 影响忠诚值和俸禄
    public quality:string; // 品级, 影响武将各级上限
    public real:boolean; //是否真实武将

    public static generateRole(_quality = Guanyuan.QUALITY_BAI):Guanyuan
    {
        var age = Utils.getRandomNum(16, 40);
        var name = Utils.getRandomName();
        let role = new Guanyuan(age, name);
        var min_death = GameController.getInstance().year + 10;
        var max_death = Math.max(role.birthYear + 100, min_death);
        role.deadYear = Utils.getRandomNum(min_death, max_death);  //至少要活10年啊
        var min:number = Math.max(_quality - 30, 40);
        role.zhili = Utils.getRandomNum(min, _quality);
        role.wuli = Utils.getRandomNum(min, _quality);
        role.tongsuai = Utils.getRandomNum(min, _quality);
        role.zhengzhi = Utils.getRandomNum(min, _quality);
        role.meili = Utils.getRandomNum(min, _quality);
        role.qinglian = Utils.getRandomNum(min, 85);
        role.zhongcheng = Utils.getRandomNum(50, 90);
        role.juewei = '无';
        switch (_quality) {
            case Guanyuan.QUALITY_BAI:
                role.quality = '白';
                break;
            case Guanyuan.QUALITY_LAN:
                role.quality = '蓝';
                break;
            case Guanyuan.QUALITY_ZHI:
                role.quality = '紫';
                break;
            case Guanyuan.QUALITY_CHENG:
                role.quality = '橙';
                break;

        }

        role.real = false;
        return role;
    }

    public constructor(_age:number = 16, _name:string = "", _quality = Guanyuan.QUALITY_BAI) {
        this.age = _age;
        this.birthYear = GameController.getInstance().year - _age;
        this.name = _name;
        this.id =Utils.getGUID();
    }


    public get_age(): number {
        var num = GameController.getInstance().year - this.birthYear;
        return Math.floor(num);
    }




    public toString =() : string =>
    {
        return `智力：${this.zhili}  武力：${this.wuli}  统帅：${this.tongsuai}\n\n魅力：${this.meili}  政治：${this.zhengzhi}  `;
    }
}
