import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
import ProjectsRepository from '@modules/projects/infra/typeorm/repositories/ProjectsRepository';

import ICardsRepository from '@modules/projects/repositories/ICardsRepository';
import CardsRepository from '@modules/projects/infra/typeorm/repositories/CardsRepository';

import IContributorsRepository from '@modules/projects/repositories/IContributorsRepository';
import ContributorsRepository from '@modules/projects/infra/typeorm/repositories/ContributorsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INewUserTokensRepository from '@modules/users/repositories/INewUserTokensRepository';
import NewUserTokensRepository from '@modules/users/infra/typeorm/repositories/NewUserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository,
);

container.registerSingleton<ICardsRepository>(
  'CardsRepository',
  CardsRepository,
);

container.registerSingleton<IContributorsRepository>(
  'ContributorsRepository',
  ContributorsRepository,
);``

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INewUserTokensRepository>(
  'NewUserTokensRepository',
  NewUserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
