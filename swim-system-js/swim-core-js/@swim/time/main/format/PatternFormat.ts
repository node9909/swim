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

import {Input, Output, Parser} from "@swim/codec";
import {DateTimeInit, DateTime} from "../DateTime";
import {DateTimeFormat} from "../DateTimeFormat";
import {DateTimeSpecifiers} from "../DateTimeSpecifiers";

/** @hidden */
export class PatternFormat extends DateTimeFormat {
  private readonly pattern: string;
  private readonly specifiers: DateTimeSpecifiers;

  constructor(pattern: string, specifiers: DateTimeSpecifiers) {
    super();
    this.pattern = pattern;
    this.specifiers = specifiers;
  }

  writeDate(date: DateTime, output: Output): void {
    const pattern = this.pattern;
    const specifiers = this.specifiers;
    let i = 0;
    let j = 0;
    const n = pattern.length;
    while (j < n) {
      if (pattern.charCodeAt(j) === 37/*'%'*/) {
        if (i !== j) {
          output.write(pattern.slice(i, j));
        }
        const s = pattern.charAt(j + 1);
        const f = specifiers[s];
        if (f !== void 0) {
          f.writeDate(date, output);
        }
        j += 2;
        i = j;
      } else {
        j += 1;
      }
    }
    if (i !== j) {
      output.write(pattern.slice(i, j));
    }
  }

  parseDateTime(input: Input, date: DateTimeInit): Parser<DateTimeInit> {
    return DateTimeFormat.PatternParser.parse(input, this.pattern, this.specifiers, date);
  }
}
DateTimeFormat.Pattern = PatternFormat;
