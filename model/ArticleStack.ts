import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class ArticleStack {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "int"})
    stackId: number;
    @Column({ type: "int"})
    articleId: number;
}