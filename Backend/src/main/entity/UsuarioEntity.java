package entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class UsuarioEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nome", nullable = false, length = 100)
    private String nome;
    
    @Column(name = "numero", unique = true, length = 20)
    private String numero;
    
    public UsuarioEntity() {
    }
    
    public UsuarioEntity(String nome, String numero) {
        this.nome = nome;
        this.numero = numero;
    }
}