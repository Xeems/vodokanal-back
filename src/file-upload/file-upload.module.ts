import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { AddressService } from 'src/address/address.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { DataService } from 'src/data/data.service';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService, AddressService, PrismaService, DataService],
})
export class FileUploadModule {}
