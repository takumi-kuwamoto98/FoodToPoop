export class Food {
    name: string;
    flavor: string = '';
    weightInGrams: number = 0;
  
    constructor(name: string) {
      this.name = name;
      switch(name){
        case 'banana':
            this.flavor = '甘い';
            this.weightInGrams = 33;
            break;
        case 'apple':
            this.flavor = '酸っぱい';
            this.weightInGrams = 98;
            break;
        case 'orange':
            this.flavor = '甘酸っぱい'
            this.weightInGrams = 84;
      }
    }
  
    describe(): string {
      return `This poo tastes ${this.flavor}, and weighs ${this.weightInGrams} grams.`;
    }
  }
  