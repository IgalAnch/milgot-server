import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UserRoles } from './user-roles/user-roles.entity';
import { UserPremissions } from './user-premissions/user-premissions.entity';
//Entities

//================== there are CHANGES IN THIS FILE with some JS FUNAMENTALS make sure to REMOVE LATER

export const TYPEORM_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'milgot_db',
  entities: [User, UserRoles, UserPremissions],
  synchronize: true,
  //name:'prolift2'
  /* ^^^ if emitted name is "default". can make multiple database 
  connections by using different repository names*/
};
