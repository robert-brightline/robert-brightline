export type ResourceType = 'controller' | 'event-listener';

export interface ResourceGeneratorSchema {
  name: string;
  project: string;
  type: ResourceType;
}
