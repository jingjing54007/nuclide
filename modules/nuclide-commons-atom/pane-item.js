/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

import invariant from 'assert';
import {observableFromSubscribeFunction} from 'nuclide-commons/event';

export function isPending(paneItem: atom$PaneItem) {
  const pane = atom.workspace.paneForItem(paneItem);
  return pane && pane.getPendingItem() === paneItem;
}

export function observePendingStateEnd(paneItem: atom$PaneItem) {
  invariant(
    typeof paneItem.onDidTerminatePendingState === 'function',
    'paneItem must implement onDidTerminatePendingState method',
  );

  return observableFromSubscribeFunction(
    paneItem.onDidTerminatePendingState.bind(paneItem),
  );
}

const CONSOLE_VIEW_URI = 'atom://nuclide/console';

export function isConsoleVisible(): boolean {
  const consolePane = atom.workspace.paneForURI(CONSOLE_VIEW_URI);
  const consoleItem = consolePane && consolePane.itemForURI(CONSOLE_VIEW_URI);
  const paneContainer = atom.workspace.paneContainerForItem(consoleItem);
  // This visibility check has been taken from
  // https://github.com/atom/atom/blob/v1.28.2/src/workspace.js#L1084
  return (
    (paneContainer === atom.workspace.getCenter() ||
      (paneContainer != null && paneContainer.isVisible())) &&
    consoleItem === consolePane.getActiveItem()
  );
}
