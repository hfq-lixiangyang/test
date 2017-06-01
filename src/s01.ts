/**
 * Created by huifenqi on 2017/6/1.
 */


class Foo{
    static age: number = 25;
    name: string = "asd";
    constructor(name: string){
      this.name = name;
    };
    say(){
        console.log(this.name)
    }
}

export default Foo;
