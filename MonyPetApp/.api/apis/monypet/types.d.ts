import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export declare type CreatePetsResponseDefault = FromSchema<
  typeof schemas.CreatePets.response['default']
>;
export declare type ListPetsMetadataParam = FromSchema<typeof schemas.ListPets.metadata>;
export declare type ListPetsResponse200 = FromSchema<typeof schemas.ListPets.response['200']>;
export declare type ListPetsResponseDefault = FromSchema<
  typeof schemas.ListPets.response['default']
>;
export declare type ShowPetByIdMetadataParam = FromSchema<typeof schemas.ShowPetById.metadata>;
export declare type ShowPetByIdResponse200 = FromSchema<typeof schemas.ShowPetById.response['200']>;
export declare type ShowPetByIdResponseDefault = FromSchema<
  typeof schemas.ShowPetById.response['default']
>;
