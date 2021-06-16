import {Entity, model, property} from '@loopback/repository';

@model()
export class Party extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;


  constructor(data?: Partial<Party>) {
    super(data);
  }
}

export interface PartyRelations {
  // describe navigational properties here
}

export type PartyWithRelations = Party & PartyRelations;
