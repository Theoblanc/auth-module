import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import Token from "../Token/Token.postgres";

enum Role {
  REGULAR = "REGULAR",
  ADMIN = "ADMIN",
}

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id!: string;
  @CreateDateColumn() createdAt!: string;
  @UpdateDateColumn() updatedAt!: string;

  @Column({ type: "text", unique: true })
  email!: string;

  @Column({ type: "text" })
  password!: string;

  @Column({ type: "enum", enum: Role, default: Role.REGULAR })
  role!: Role;
}

export default User;
