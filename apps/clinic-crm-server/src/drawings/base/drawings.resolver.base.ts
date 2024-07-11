/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Drawings } from "./Drawings";
import { DrawingsCountArgs } from "./DrawingsCountArgs";
import { DrawingsFindManyArgs } from "./DrawingsFindManyArgs";
import { DrawingsFindUniqueArgs } from "./DrawingsFindUniqueArgs";
import { CreateDrawingsArgs } from "./CreateDrawingsArgs";
import { UpdateDrawingsArgs } from "./UpdateDrawingsArgs";
import { DeleteDrawingsArgs } from "./DeleteDrawingsArgs";
import { DrawingsService } from "../drawings.service";
@graphql.Resolver(() => Drawings)
export class DrawingsResolverBase {
  constructor(protected readonly service: DrawingsService) {}

  async _drawingsItemsMeta(
    @graphql.Args() args: DrawingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Drawings])
  async drawingsItems(
    @graphql.Args() args: DrawingsFindManyArgs
  ): Promise<Drawings[]> {
    return this.service.drawingsItems(args);
  }

  @graphql.Query(() => Drawings, { nullable: true })
  async drawings(
    @graphql.Args() args: DrawingsFindUniqueArgs
  ): Promise<Drawings | null> {
    const result = await this.service.drawings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Drawings)
  async createDrawings(
    @graphql.Args() args: CreateDrawingsArgs
  ): Promise<Drawings> {
    return await this.service.createDrawings({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Drawings)
  async updateDrawings(
    @graphql.Args() args: UpdateDrawingsArgs
  ): Promise<Drawings | null> {
    try {
      return await this.service.updateDrawings({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Drawings)
  async deleteDrawings(
    @graphql.Args() args: DeleteDrawingsArgs
  ): Promise<Drawings | null> {
    try {
      return await this.service.deleteDrawings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
