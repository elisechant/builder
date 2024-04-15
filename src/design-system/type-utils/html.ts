import {ChangeEvent} from "react";

export type HTMLFileInputEvent = ChangeEvent<HTMLInputElement> & {
  target: EventTarget & { files: FileList };
  currentTarget: EventTarget & { files: FileList };
};

