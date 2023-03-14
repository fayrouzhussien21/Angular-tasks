export class Recipe
{
    public description:string;
    public imagePath:string;
    public name:string;

    constructor(name:string,description:string,imagePath:string)
    {
        this.description=description;
        this.imagePath=imagePath;
        this.name=name;
    }

}