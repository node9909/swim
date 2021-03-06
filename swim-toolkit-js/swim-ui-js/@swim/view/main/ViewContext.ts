// Copyright 2015-2020 Swim inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {View} from "./View";
import {ViewIdiom} from "./viewport/ViewIdiom";
import {Viewport} from "./viewport/Viewport";

export type ViewContextType<V extends View> =
  V extends {readonly viewContext: infer VC} ? VC : unknown;

export interface ViewContext {
  readonly updateTime: number;

  readonly viewIdiom: ViewIdiom;

  readonly viewport: Viewport;
}

/** @hidden */
export const ViewContext = {
  default(): ViewContext {
    return {
      updateTime: performance.now(),
      viewIdiom: "unspecified",
      viewport: Viewport.detect(),
    };
  },
};
