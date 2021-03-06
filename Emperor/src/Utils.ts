/**
 * @create 2022-01-27 12:51:42
 */
class Utils {
    public constructor() {

    }

    /**
     * 生成[Min, Max]之间的随机数, 生成机制存在问题,导致Min与Max取数的概率只有其他数值的一半.
     * @param Min 最小值
     * @param Max 最大值
     */
    public static getRandomNum(Min = 0, Max):number {
        var range = Max - Min;
        var rand = Math.random();
        return (Min + Math.round(rand * range));
    }
    static readonly SURNAME= '王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,韩,邓,冯,曹,王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,韩,邓,冯,曹,王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,韩,邓,冯,曹,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,范,汪,廖,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,范,汪,廖,石,金,韦,贾,夏,付,方,邹,熊,白,孟,秦,邱,侯,江,尹,薛,闫,段,雷,龙,黎,史,陶,贺,毛,郝,顾,龚,邵,万,覃,武,钱,戴,严,莫,孔,向,常,欧阳,诸葛,司马,司徒,轩辕,皇甫,慕容,端木,上官,夏侯'.split(',');
    static readonly FEMALE_NAME = '媛,丹,莹,凝,霏,霄,钰,艳,妤,姝,芹,颖,韵,芝,婵,秋,灿,娥,霁,菁,真,蝶,雁,贞,希,姗,虹,妍,颖,素,莲,莎,梅,芳,琳,英,瑶,芬,荷,雅,雅,凌,馨,若,仟,璐,秋,筱,泺,珺,丹,丽,妍,素,筠,素,英,颖,婧,双,芯,凝,菱,婧,媚,紫,初,苑,珞,恬,纤,玫,梅,铃,滟,妙,菡,璐,童,璇,洁,馥,馨,昕,彤,如,卉,雪,秀,娟,英,华,慧,巧,美,娜,静,淑,惠,珠,翠,雅,芝,玉,萍,红,娥,玲,芬,芳,燕,彩,春,菊,兰,凤,洁,梅,琳,素,云,莲,真,环,雪,荣,爱,妹,霞,香,月,莺,媛,艳,瑞,凡,佳,嘉,琼,勤,珍,贞,莉,桂,娣,叶,璧,璐,娅,琦,晶,妍,茜,秋,珊,莎,锦,黛,青,倩,婷,姣,婉,娴,瑾,颖,露,瑶,怡,婵,雁,蓓,纨,仪,荷,丹,蓉,眉,君,琴,蕊,薇,菁,梦,岚,苑,婕,馨,瑗,琰,韵,融,园,艺,咏,卿,聪,澜,纯,毓,悦,昭,冰,爽,琬,茗,羽,希,宁,欣,飘,育,滢,馥,筠,柔,竹,霭,凝,晓,欢,霄,枫,芸,菲,寒,伊,亚,宜,可,姬,舒,影,荔,枝,思,丽,贤,淑,德,慧,贞,卿,端,庄,静,秀, 嘉,琼,桂,娣,叶,璧,璐,娅,琦,晶,妍,茜,秋,珊,莎,锦,黛,青,倩,婷,姣,婉,娴,瑾,颖,露,瑶,怡,婵,雁,蓓,纨,仪,荷,丹,蓉,眉,君,琴,蕊,薇,菁,梦,岚,苑,婕,馨,瑗,琰,韵,融,园,艺,咏,卿,聪,澜,纯,毓,悦,昭,冰,爽,琬,茗,羽,希,宁,欣,飘,育,滢,馥,筠,柔,竹,霭,凝,晓,欢,霄,枫,芸,菲,寒,伊,亚,宜,可,姬,舒,影,荔,枝,思,丽,秀,娟,英,华,慧,巧,美,娜,静,淑,惠,珠,翠,雅,芝,玉,萍,红,娥,玲,芬,芳,燕,彩,春,菊,勤,珍,贞,莉,兰,凤,洁,梅,琳,素,云,莲,真,环,雪,荣,爱,妹,霞,香,月,莺,媛,艳,瑞,凡,佳'.split(',');
    static readonly MALE_NAME = '伟,刚,勇,毅,俊,峰,强,军,平,保,东,文,辉,力,明,永,健,世,广,志,义,兴,良,海,山,仁,波,宁,贵,福,生,龙,元,全,国,胜,学,祥,才,发,武,新,利,清,飞,彬,富,顺,信,子,杰,涛,昌,成,康,星,光,天,达,安,岩,中,茂,进,林,有,坚,和,彪,博,诚,先,敬,震,振,壮,会,思,群,豪,心,邦,承,乐,绍,功,松,善,厚,庆,磊,民,友,裕,河,哲,江,超,浩,亮,政,谦,亨,奇,固,之,轮,翰,朗,伯,宏,言,若,鸣,朋,斌,梁,栋,维,启,克,伦,翔,旭,鹏,泽,晨,辰,士,以,建,家,致,树,炎,德,行,时,泰,盛,雄,琛,钧,冠,策,腾,楠,榕,风,航,弘,仁,义,礼,智,信,勇,忠,孝,温,良,恭,谦,诚,涛,昌,进,林,有,坚,和,彪,博,诚,先,敬,震,振,壮,会,群,豪,心,邦,承,乐,绍,功,松,善,厚,庆,磊,民,友,裕,河,哲,江,超,浩,亮,政,谦,亨,奇,固,之,轮,翰,朗,伯,宏,言,若,鸣,朋,斌,梁,栋,维,启,克,伦,翔,旭,鹏,泽,晨,辰,士,以,建,家,致,树,炎,德,行,时,泰,盛,雄,琛,钧,冠,策,腾,伟,刚,勇,毅,俊,峰,强,军,平,保,东,文,辉,力,明,永,健,世,广,志,义,兴,良,海,山,仁,波,宁,贵,福,生,龙,元,全,国,胜,学,祥,才,发,成,康,星,光,天,达,安,岩,中,茂,武,新,利,清,飞,彬,富,顺,信,子,杰,楠,榕,风,航,弘'.split(',');
    static readonly MID_NAME = '子,凡,悦,思,奕,易,坚,莎,耘,国,仑,良,裕,融,致,德,卿,桂,钊,钧,铎,铭,皑,柏,镇,淇,淳,一,洁,茹,清,吉,克,先,依,浩,亮,允,元,源,渊,和,函,妤,宜,云,琪,菱,宣,沂,健,信,媛,凯,欣,可,洋,萍,荣,榕,含,佑,明,雄,芝,英,义,卿,乾,亦,雅,芝,萱,昊,芸,天,岚,昕,尧,鸿,棋,琳,宸,乔,丞,安,毅,凌,惠,珠,泉,坤,恒,渝,菁,龄,弘,佩,勋,宁,元,栋,嘉,哲,俊,博,维,泰,乐,佳,涵,晋,逸,沅,海,圣,亚,宜,可,姬,舒,谚,娅,琦,苓,汉,娥,玲,芬,芳,燕,彩,月,美,心,茗,丹,森,学,轩,叶,璧,璐,娣,阳,彬,泓,伊,烨,书,诗,蔚'.split(',');

    public static getRandomName(female:boolean = false):string
    {
        var name = '';
        name = name + this.SURNAME[this.getRandomNum(0, this.SURNAME.length)];
        if(Math.random()> 0.5)
            name = name + this.MID_NAME[this.getRandomNum(0, this.MID_NAME.length)];
        if(female)
            name = name + this.FEMALE_NAME[this.getRandomNum(0, this.FEMALE_NAME.length)]
        else
            name = name + this.MALE_NAME[this.getRandomNum(0, this.MALE_NAME.length)];

        return name;
    }

    public static getGUID():string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static digitToChinese(digit: number): string
    {
        let chnNum = ["零","一","二","三","四","五","六","七","八","九"];
        let chnNumUnit = ["","十","百","千"];
        let tmp = "";
        let chnString = "";
        let zero = true;
        let unitIndex = 0;
        let isTen = false;
        if(digit > 9 && digit < 20)
        {
            isTen = true;
        }
        while(digit > 0)
        {
            let num = digit % 10;
            if(num === 0)
            {
                if(!zero)
                {
                    zero = true;
                    chnString = chnNum[num] + chnString;
                }
            }
            else
            {
                zero = false;
                if(isTen && unitIndex == 1)
                {
                    tmp = "";
                }
                else
                {
                    tmp = chnNum[num];
                }
                tmp += chnNumUnit[unitIndex];
                chnString = tmp + chnString;
            }
            unitIndex++;
            digit = Math.floor(digit / 10);
        }
        return chnString;
    }

}