import { createMetadata } from '../helpers/create-metadata.js';

export const {
  getMetadata: isPublicRessource,
  setClassMetadata: PublicResource,
} = createMetadata<never>('PUBLIC');

export const { getMetadata: getResourceName, setClassMetadata: ResourceName } =
  createMetadata<string>('RESOURCE_NAME');
