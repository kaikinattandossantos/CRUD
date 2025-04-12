import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-components',
  imports: [],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
  user : User[] = [];
  novoUsuario: User = { name: '', numero: ''};


  constructor(private userservice: UserService) {}

  criarUsuario() {
    this.userservice.create(this.novoUsuario).subscribe((userCriado) => {
      this.user.push(userCriado);
      this.novoUsuario = { name: '', numero: '' };
    });
  }

  DeletarUsuario(id: number) {
    this.userservice.delete(id).subscribe(() => {
      this.user = this.user.filter(u => u.id !== id);
    });
  }



}
