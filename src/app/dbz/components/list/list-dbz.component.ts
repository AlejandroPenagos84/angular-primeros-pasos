import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css',
})
export class DbzListComponent { 

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeletedCharacter: EventEmitter<string> = new EventEmitter();
  
  onDeleteCharacter(id: string | undefined): void{
    this.onDeletedCharacter.emit(id);
  }
}
