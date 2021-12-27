import { DateTime } from './graphql';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { DonationsModule } from './donations/donations.module';
import { GraphQLISODateTime } from 'graphql-iso-date';

@Module({
  imports: [GraphQLModule.forRoot({
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    typePaths: ['./**/*.graphql'],
    resolvers: { DateTime: GraphQLISODateTime}
  }), DonationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
