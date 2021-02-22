import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Project from './Projects';

@Entity('cards')
class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  taskName: string;

  @Column()
  description: string;

  @Column()
  column: number;

  @Column()
  project_id: string;

  @ManyToOne(() => Project, project => project.tasks)
  @JoinColumn({name: 'project_id'})
  project: Project;

  @Column()
  owner_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  user: User;

  @Column()
  blocked: boolean;
  default: false;
  
  @Column()
  whyBlocked: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Card;
