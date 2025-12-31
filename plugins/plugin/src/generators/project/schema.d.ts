import type { ProjectType } from './project';

export type ProjectType =
  | 'api'
  | 'cli'
  | 'client'
  | 'client-library'
  | 'graphql'
  | 'library'
  | 'prisma';

export interface ProjectGeneratorSchema {
  type: ProjectType;
  directory: string;
}
