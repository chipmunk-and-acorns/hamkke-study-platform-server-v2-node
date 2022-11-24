import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum StackCategory {
    BACKEND = "backend",
    FRONTEND = "frontend",
}

@Entity()
export class Stack {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 30})
    name: string;
    @Column({ type: "varchar", length: 30})
    category: StackCategory;
}