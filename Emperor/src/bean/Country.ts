class Country
{
    public name: string;
    public emperor: string;
    public static readonly CUR_PLAYER:string = 'CUR_PLAYER';
    public cities :Array<City> = new Array<City>();
    public guanyuans :Array<Guanyuan> = new Array<Guanyuan>();

}