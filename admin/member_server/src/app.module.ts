import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MemberModule } from './modules/member/member.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { MailModule } from './modules/mail/mail.module'
import { LoginModule } from './modules/login/login.module'
import { BannerModule } from './modules/banner/banner.module'
import { CategoryModule } from './modules/category/category.module'
import { BrandModule } from './modules/brand/brand.module'
import { ProductModule } from './modules/product/product.module'
import { UserModule } from './modules/user/user.module'
import { ReceiptModule } from './modules/receipt/receipt.module'
// import { DataModule } from './data/data.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MemberModule, 
    PrismaModule,
    MailModule,
    LoginModule,
    BannerModule,
    CategoryModule,
    BrandModule,
    ProductModule,
    UserModule,
    ReceiptModule,
    // DataModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

