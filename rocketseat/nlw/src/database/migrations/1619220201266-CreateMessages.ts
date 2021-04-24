import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMessages1619220201266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'messages',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'admin_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'text',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKUser',
                    columnNames: ["User_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"]
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('messages');
    }
}
