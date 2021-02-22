import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  BaseEntity,
  Column,
  ManyToMany
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Project from './Projects';

@Entity('contributors')
class Contributor extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  userId: string;

  @Column()
  projectId: string;
  
  @ManyToOne(() => User, user => user.contributorOnProject)
  @JoinColumn({name: 'id'})
  user: User;

  @ManyToMany(type => Project, project => project)
  @JoinColumn()
  projects: Project[];
 
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Contributor;
