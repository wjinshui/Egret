class DataAccess {
	public constructor() {
	}

	/**
	 * 数据存储函数
	 */
	public save_key(key_name:string,key_value:string){
		let key:string = key_name;
		let value:string = key_value;
		egret.localStorage.setItem(key,value);
	}
	/**
	 * 读取数据
	 */
	public get_key(key_name:string){
		let value:string = egret.localStorage.getItem(key_name);
		return value;
	}
	/**
	 * 删除数据
	 */
	public del_key(key_name:string){
		egret.localStorage.removeItem(key_name);
		return true;
	}
}