export class Recipe {
  public name : string;
  public description :string;
  public imagePath : string;

  constructor(name: string, des : string, imgPAth : string){
      this.name = name;
      this.description = des;
      this.imagePath = imgPAth;
  }
}
