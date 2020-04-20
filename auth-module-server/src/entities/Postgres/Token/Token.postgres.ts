import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  Entity,
} from "typeorm";
import User from "../User/User.postgres";

@Entity()
class Token extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id!: string;
  @CreateDateColumn() createdAt!: string;
  @UpdateDateColumn() updatedAt!: string;

  @Column({ type: "timestamp" })
  accessedAt!: Date;

  @ManyToOne((type) => User)
  user!: User;
}

export default Token;
