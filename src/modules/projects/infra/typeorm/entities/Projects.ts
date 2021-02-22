import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  } from 'typeorm';

import Card from './Cards';
import Contributor from './Contributors';

@Entity('projects')
class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Contributor, contributor => contributor.projects)
  @JoinColumn({ name: 'id' })
  projectsContributs: Project[];

  @Column()
  name: string;

  @Column()
  structure: 'json';
  profile: { column: number, name: string }
   
  @Column()
  createdBy_id: string;

  @OneToMany(() => Card, card => card.project)
  tasks: Card[];

  @Column()
  responsable_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Project;
