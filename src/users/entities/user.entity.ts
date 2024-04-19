import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ROLE } from "../enums";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    code: string

    @Column()
    password: string

    @Column()
    email: string

    @Column({
        type: 'enum',
        enum: ROLE,
        default: ROLE.USER,
      })
    role: ROLE

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
