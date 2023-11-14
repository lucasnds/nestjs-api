import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
 @Post()
 async create(@Body() { name }: CreateUserDto) {
  return { name };
 }

 @Get()
 async findAll() {
  return { users: [] };
 }

 @Get(':id')
 async findOne(@Param('id', ParseIntPipe) id: number) {
  return { user: {}, id };
 }

 @Put(':id')
 async update(@Param('id', ParseIntPipe) id: number, @Body() { name, email, password }: UpdatePutUserDto) {
  return {
   id,
   name, email, password,
  };
 }

 @Patch(':id')
 async updatePartial(@Param('id', ParseIntPipe) id: number, @Body() { name, email, password }: UpdatePatchUserDto) {
  return {
   id,
   name, email, password,
  };
 }

 @Delete(':id')
 async delete(@Param('id', ParseIntPipe) id: number) {
  return { id };
 }
}
