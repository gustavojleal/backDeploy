import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCards1610463723853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
            new Table({
                name: 'cards',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'column',
                        type: 'smallint',
                    },
                    {
                        name: 'taskName',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'project_id',
                        type: 'uuid',
                    },
                    {
                        name: 'owner_id',
                        type: 'varchar',
                    },
                    {
                        name: 'blocked',
                        type: 'boolean',
                    },
                    {
                        name: 'whyBlocked',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
 
            }),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('cards');
    }

}
