import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'john@example.com',
      password: '123456',
      age: 28,
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Smith',
      password: '123456',
      email: 'jane@example.com',
      age: 34,
      isActive: true,
    },
    {
      id: 3,
      name: 'Bob',
      surname: 'Johnson',
      password: '123456',
      email: 'bob@example.com',
      age: 45,
      isActive: false,
    },
    {
      id: 4,
      name: 'Alice',
      surname: 'Williams',
      password: '123456',
      email: 'alice@example.com',
      age: 22,
      isActive: true,
    },
    {
      id: 5,
      name: 'Charlie',
      surname: 'Brown',
      password: '123456',
      email: 'charlie@example.com',
      age: 31,
      isActive: true,
    },
  ];

  private idCounter = 6;

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.idCounter++,
      name: createUserDto.name,
      surname: '',
      email: createUserDto.email,
      password: createUserDto.password,
      age: 0,
      isActive: true,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number): { deleted: boolean; message: string } {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.users.splice(userIndex, 1);
    return { deleted: true, message: `User with ID ${id} has been removed` };
  }
}
