/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type FileTreeStore from '../lib/FileTreeStore';
import type {FileTreeAction} from '../lib/FileTreeDispatcher';

export type AppState = FileTreeStore;

export type Store = {
  getState(): AppState,
  dispatch(action: Action): void,
};

export type Action = FileTreeAction;
