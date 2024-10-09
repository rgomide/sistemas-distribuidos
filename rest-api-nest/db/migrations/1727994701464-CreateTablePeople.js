const { Table } = require('typeorm');

module.exports = class CreateTablePeople1727994701464 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table(
        {
          name: 'people',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
            },
            {
              name: 'first_name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'last_name',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'gender',
              type: 'char',
              length: '1',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP(6)',
              nullable: false,
              createDate: true,
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP(6)',
              nullable: false,
              updateDate: true,
            },
          ],
        },
        true,
      ),
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('people');
  }
};
