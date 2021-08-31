export class Course {
    name: string;
    desc: string;
    code: string;
    url: string;

    constructor(name: string, desc : string, code: string, url:string) {
      this.name = name;
      this.desc = desc;
      this.code = code;
      this.url = url;
    }

    toString(): string {
      return "Name:"+ this.name + " code:"+this.code+ " desc:"+ this.desc + " url:" + this.url;
    }
}