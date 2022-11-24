import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export enum ArticleType {
    STUDY = "study",
    PROJECT = "project",
}

export enum ArticleProceeding {
    ONLINE = "online",
    OFFLINE = "offline",
}

export enum ArticleContactKind {
    KAKAO = "kakao",
    EMAIL = "email",
    GOOGLE = "google",
}

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "int"})
    userId: number;
    @Column({type: "varchar"})
    title: string;
    @Column({type: "varchar", length: 5000})
    content: string;
    @Column({type: "int", nullable: true})
    personnel: number | null;
    @Column({type: "varchar", length: 20})
    type: ArticleType;
    @Column({type: "varchar", length: 20})
    proceeding: ArticleProceeding;
    @Column({type: "int", nullable: true})
    period: number | null;
    @Column({type: "date"})
    startDate: Date;
    @Column({type: "varchar", length: 20})
    contactKind: ArticleContactKind;
    @Column({type: "varchar", length: 100})
    contactLink: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    modifiedAt: Date;
}