/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

declare var __karma__: {loaded: Function, start: Function
  error: Function
};

  __karma__.loaded = function() {};
  (window as any).global = window;

  System.config({defaultJSExtensions: true});
  System.import('/base/build/test/browser_entry_point')
      .then(
          () => {
            __karma__.start();
          },
          (error) => {
            console.error(error.stack || error);
          });