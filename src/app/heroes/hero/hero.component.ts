import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public age : number = 45;
  
  // Es una propiedad
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  // Es un metodo
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(newName: string):void{
    this.name = newName;
  }

  changeAge(newAge: number):void{
    this.age = newAge;
  }
}
