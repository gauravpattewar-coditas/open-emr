import { Injectable } from '@nestjs/common';
import { CreateOrmDto } from './dto/create-orm.dto';

@Injectable()
export class OrmService {
  private ormData: CreateOrmDto[] = [];
  private bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  create(createOrmDto: CreateOrmDto) {
    try {
      this.ormData.push(createOrmDto);

      const randomIndex = Math.floor(Math.random() * this.bloodTypes.length);
      const randomBloodType = this.bloodTypes[randomIndex];

      return {
        status: 'success',
        bloodType: randomBloodType,
        data: { ...createOrmDto },
      };
    } catch (error) {
      throw error;
    }
  }
}
