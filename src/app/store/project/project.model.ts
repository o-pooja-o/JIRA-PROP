export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  
}

export function createProject(params: Partial<Project>) {
  return {

  } as Project;
}
