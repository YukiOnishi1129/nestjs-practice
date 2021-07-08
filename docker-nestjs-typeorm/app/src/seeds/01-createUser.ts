import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
/* entities */
import { User } from '../entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const initUserState = [
      {
        name: '武雄',
        email: 'takeo@gmail.com',
      },
      {
        name: 'よしお',
        email: 'tyoshio@gmail.com',
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(initUserState)
      .execute();
  }
}
