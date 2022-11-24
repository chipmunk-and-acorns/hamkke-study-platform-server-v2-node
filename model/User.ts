import {BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column("text", {nullable: false})
    email: string
    @Column("text", {nullable: false})
    password: string
    @Column("text", {nullable: false})
    nickname: string
    @Column("text", {nullable: true})
    token: string
    @CreateDateColumn()
    createdAt: Date;

    @BeforeInsert()
    async generatePasswordHash() {
        this.password = await bcrypt.hash(
            this.password,
            await bcrypt.genSalt(Number(process.env.BCRYPT_SALT_ROUND))
        );
    }
}