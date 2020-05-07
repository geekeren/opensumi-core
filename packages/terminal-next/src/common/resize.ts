import { Event } from '@ali/ide-core-common';
import { Disposable } from '@ali/ide-core-common';

export interface IWidget extends Disposable {
  id: string;
  name: string;
  dynamic: number;
  shadowDynamic: number;
  element: HTMLDivElement;
  group: IWidgetGroup;
  reuse: boolean;
  resize: (dynamic?: number) => void;
  increase: (increment: number) => void;
  dispose: () => void;
  onRender: Event<void>;
  onResize: Event<void>;
}

export interface IWidgetGroup extends Disposable {
  id: string;
  name: string;
  editable: boolean;
  activated: boolean;
  length: number;
  widgets: IWidget[];
  widgetsMap: Map<string, IWidget>;
  last: IWidget;
  snapshot: string;
  addWidget(widget: IWidget): void;
  removeWidgetByIndex: (index: number) => IWidget;
  edit(): void;
  rename(name: string): void;
  dispose: () => void;
}
