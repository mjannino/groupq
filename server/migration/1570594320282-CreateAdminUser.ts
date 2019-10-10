import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from "../entity/User"

/**
 * So, this is a data migration
 * not quite my idea of migrations, but hey
 */

export class CreateAdminUser1570594320282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "admin";
        user.password = "admin";
        user.hashPassword();
        user.role = "ADMIN";
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
