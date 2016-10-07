'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import {DebuggerProcessInfo} from '../../nuclide-debugger-base';
import {IwdpDebuggerInstance} from './IwdpDebuggerInstance';

import type {NuclideUri} from '../../commons-node/nuclideUri';

export class AttachProcessInfo extends DebuggerProcessInfo {
  constructor(targetUri: NuclideUri) {
    super('iwdp', targetUri);
  }

  async debug(): Promise<IwdpDebuggerInstance> {
    return new IwdpDebuggerInstance(this);
  }
}
