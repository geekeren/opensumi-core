import { NodeModule, ConstructorOf} from '@ali/ide-core-node';
import { FileServiceModule } from '@ali/ide-file-service/lib/node';
import { DocModelModule } from '@ali/ide-doc-model/lib/node';

import { WorkspaceModule } from '@ali/ide-workspace/lib/node';
import { StorageModule } from '@ali/ide-storage/lib/node';
import { ExtensionStorageModule } from '@ali/ide-extension-storage/lib/node';

import { FeatureExtensionServerModule } from '@ali/ide-feature-extension';
import { VSCodeExtensionServerModule } from '@ali/ide-vscode-extension';

import { ProcessModule } from '@ali/ide-process';

import { SearchModule } from '@ali/ide-search';
import { Terminal2Module } from '@ali/ide-terminal2';
import { LogServiceModule } from '@ali/ide-logs/lib/node';

export const CommonNodeModules: ConstructorOf<NodeModule>[] = [
  LogServiceModule,
  FileServiceModule,
  DocModelModule,
  FeatureExtensionServerModule,
  VSCodeExtensionServerModule,
  WorkspaceModule,
  ExtensionStorageModule,
  StorageModule,
  ProcessModule,
  SearchModule,
  Terminal2Module,
];
