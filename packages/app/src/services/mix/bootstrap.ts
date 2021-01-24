import { Mix } from 'sohda-api';

export function cleanGlobal() {
  window.alert = window.confirm = () => {
    throw new Error(
      'Alert and confirm are disabled for mixes. Use the notification service instead.'
    );
  };

  window.eval = () => {
    throw new Error('Eval is disabled for mixes.');
  };
}
