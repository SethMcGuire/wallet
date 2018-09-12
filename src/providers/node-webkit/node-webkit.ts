import { Injectable } from '@angular/core';
import { Logger } from '../../providers/logger/logger';

@Injectable()
export class NodeWebkitProvider {
  constructor(private logger: Logger) {
    this.logger.debug('NodeWebkitProvider initialized');
  }

  public readFromClipboard() {
    let gui = (window as any).require('nw.gui');
    let clipboard = gui.Clipboard.get();
    return clipboard.get();
  }

  public writeToClipboard(text) {
    let gui = (window as any).require('nw.gui');
    let clipboard = gui.Clipboard.get();
    return clipboard.set(text);
  }

  public clearClipboard() {
    let gui = (window as any).require('nw.gui');
    let clip = gui.Clipboard.get();
    clip.clear();
  }

  public openExternalLink(url) {
    let gui = (window as any).require('nw.gui');
    return gui.Shell.openExternal(url);
  }
}
