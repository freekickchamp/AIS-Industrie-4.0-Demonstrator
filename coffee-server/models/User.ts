import {Table, Column, Model, UpdatedAt, CreatedAt} from 'sequelize-typescript';

@Table
export class User extends Model<User> {

    @Column
    username: string;

    @Column
    password: string;

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}
