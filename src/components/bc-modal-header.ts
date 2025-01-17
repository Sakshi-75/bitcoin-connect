import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {BitcoinConnectElement} from './BitcoinConnectElement';
import './bc-connector-list.js';
import './bc-help.js';
import {withTwind} from './twind/withTwind';
import store from '../state/store';
import {bcLogo} from './icons/bcLogo';
import {crossIcon} from './icons/crossIcon';
import {helpIcon} from './icons/helpIcon';

@customElement('bc-modal-header')
export class ModalHeader extends withTwind()(BitcoinConnectElement) {
  @property()
  onClose?: () => void;

  override render() {
    return html`<div
      class="flex justify-center items-center gap-2 w-full relative"
    >
      <div
        class="absolute right-0 h-full flex items-center justify-center gap-2"
      >
        <div
          class="cursor-pointer"
          @click=${() => store.getState().setRoute('/help')}
        >
          ${helpIcon}
        </div>
        <div class="cursor-pointer" @click=${this._handleClose}>
          ${crossIcon}
        </div>
      </div>
      ${bcLogo}
    </div>`;
  }

  private _handleClose() {
    this.onClose?.();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bc-modal-header': ModalHeader;
  }
}
