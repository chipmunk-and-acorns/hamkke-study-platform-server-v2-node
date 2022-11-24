import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity()
export class ArticleComment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "int"})
    userId: number;
    @Column({type: "int"})
    articleId: number;
    @Column({ type: "varchar", length: 1000})
    content: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    modifiedAt: Date;
}