export class Recipe {
  public name: string;
  public description: string;
  public imgRef: string;

  constructor(name: string, description: string, imgRef: string) {
    this.name = name;
    this.description = description;
    this.imgRef = imgRef;
  }
}
