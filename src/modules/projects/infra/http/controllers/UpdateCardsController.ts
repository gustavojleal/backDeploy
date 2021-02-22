import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCardsService from '@modules/projects/services/UpdateCardService';
import FindCardService from '@modules/projects/services/FindCardsService';
import FindOneCardService from '@modules/projects/services/FindOneCardService';
import CreateCardService from '@modules/projects/services/CreateCardService';

interface ICard {
  id?: any;
  owner_id?: any;
  column: any;
  taskName: any;
  description: any;
  project_id: any;
  blocked: any;
  whyblocked: any;
}


export default class UpdateCardssController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const projectId = request.body.id
    const tasks = JSON.parse(request.body.tasks)

    const findCards = container.resolve(FindCardService);
    const findOneCard = container.resolve(FindOneCardService);
    const updateCards = container.resolve(UpdateCardsService)
    const createTasks = container.resolve(CreateCardService) 

    // const cards = await findCards.execute(projectId);
    // const updateds = await updateCards.execute(cards)

    tasks.map( async (card: ICard) => {
      const exists = findOneCard.execute(card.id)

      if (exists) {
        const id = card.id
        const taskName = card.taskName
        const description = card.description
        const column = card.column
        const blocked = !card.blocked ? false : true
        const whyBlocked = card.whyblocked

        await updateCards.execute
          ({
            id,
            project_id: projectId,
            column,
            taskName,
            description,
            owner_id: user_id,
            blocked,
            whyBlocked,
          })

      } else {
        const id = card.id
        const taskName = card.taskName
        const description = card.description
        const column = card.column
        const blocked = !card.blocked ? false : true
        const whyBlocked = card.whyblocked

        await createTasks.execute 
          ({
            id,
            project_id: projectId,
            column,
            taskName,
            description,
            owner_id: user_id,
            blocked,
            whyBlocked,
          })
      }
    })

    const cards = await findCards.execute(projectId);

    return response.json(cards);
  }
}
