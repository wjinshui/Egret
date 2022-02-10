/**
 * @create 2022-02-01 20:13:06
 */
class TableManager {
    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }
    get operation(): string {
        return this._operation;
    }

    set operation(value: string) {
        this._operation = value;
    }
    get titles(): string[] {
        return this._titles;
    }

    set titles(value: string[]) {
        this._titles = value;
    }
    private static instance:TableManager;
    private _width:number = 800;
    private _titles :string[];
    private _operation:string;

    
    public static getInstance(): TableManager {
        if (TableManager.instance == null)
            TableManager.instance = new TableManager();
        return TableManager.instance;
    }


    private constructor() {
    
    }
    
}