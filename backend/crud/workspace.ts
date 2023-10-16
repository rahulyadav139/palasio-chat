import { Document, Query } from 'mongoose';
import { Workspace } from '../models/workspace';
import { IWorkspace } from '../schema/workspace';

export const createWorkspace = (workspaceData: any) => {
  const workspace = new Workspace({
    name: workspaceData.name,
    owner: workspaceData.owner,
  });

  return workspace.save();
};

export const findWorkspace = (workspaceIds: string[]) => {
  return Workspace.find({ _id: { $in: workspaceIds } });
};

export default { createWorkspace, findWorkspace };
