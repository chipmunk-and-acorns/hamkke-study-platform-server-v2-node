import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
    @Column({type: "text"})
    title: string;
    @Column({type: "text", length: 5000})
    content: string;
    @Column({type: "int", nullable: true})
    personnel: number | null;
    @Column({type: "text", length: 20})
    type: ArticleType;
    @Column({type: "text", length: 20})
    proceeding: ArticleProceeding;
    @Column({type: "number", nullable: true})
    period: number | null;
    @Column({type: "date"})
    startDate: Date;
    @Column({type: "text", length: 20})
    contactKind: ArticleContactKind;
    @Column({type: "text", length: 100})
    contactLink: string;
}