export class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    eat(): string {
      return `${this.name} is eating.`;
    }
    
    poop(): string {
      return`${this.name} has pooped.`;
    }
  }