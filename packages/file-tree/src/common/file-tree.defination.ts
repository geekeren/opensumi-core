import { Injectable, Provider } from '@ali/common-di';
import {
  URI,
  ConstructorOf,
} from '@ali/ide-core-browser';
import { FileStat } from '@ali/ide-file-service';
import { SelectableTreeNode, TreeNode } from '@ali/ide-core-common';

export interface IFileTreeItem extends TreeNode<IFileTreeItem> {
  uri: URI;
  filestat: FileStat;
  children?: IFileTreeItem[] | any;
  // 排序优先级，数字越大优先级越高
  // 用于让新建文件的排序位置更靠前
  priority: number;
  [key: string]: any;
}

export interface IFileTreeItemStatus {
  [key: string]: {
    selected?: boolean;
    expanded?: boolean;
    focused?: boolean;
    needUpdated?: boolean;
    file: IFileTreeItem;
  };
}

export interface FileStatNode extends SelectableTreeNode {
  uri: URI;
  filestat: FileStat;
}

export namespace FileStatNode {
    export function is(node: object | undefined): node is FileStatNode {
        return !!node && 'filestat' in node;
    }

    export function getUri(node: TreeNode | undefined): string | undefined {
        if (is(node)) {
            return node.filestat.uri;
        }
        return undefined;
    }
}

@Injectable()
export abstract class FileTreeAPI {
  abstract getFiles(path: string | FileStat, parent?: IFileTreeItem | null): Promise<IFileTreeItem[]>;
  abstract getFileStat(path: string): Promise<any>;
  abstract createFile(uri: URI): Promise<void>;
  abstract createFolder(uri: URI): Promise<void>;
  abstract deleteFile(uri: URI): Promise<void>;
  abstract moveFile(from: URI, to: URI): Promise<void>;
  abstract generatorFileFromFilestat(filestat: FileStat, parent: IFileTreeItem): IFileTreeItem;
  abstract generatorTempFile(uri: URI, parent: IFileTreeItem): IFileTreeItem;
  abstract generatorTempFolder(uri: URI, parent: IFileTreeItem): IFileTreeItem;
  abstract sortByNumberic(files: IFileTreeItem[]): IFileTreeItem[];
  abstract exists(uri: URI): Promise<boolean>;
}

export function createFileTreeAPIProvider<T extends FileTreeAPI>(cls: ConstructorOf<T>): Provider {
  return {
    token: FileTreeAPI,
    useClass: cls,
  };
}
