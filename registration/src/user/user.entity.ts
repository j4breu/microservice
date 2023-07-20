import { Reservation } from 'src/reservation/reservation.entity';
import { Role } from 'src/role/role.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  roleId: number;

  @ManyToOne(() => Role, role => role.users)
  role: Role;

  @OneToMany(() => Reservation, reservation => reservation.author)
  reservations: Reservation[];
}
