// noinspection JSUnusedGlobalSymbols
export const environment = {
  production: true,
  availableStatusWebSockets: new Map()
    .set('Field A', 'ws://192.168.0.104:4201/ssl-status/field-a/subscribe'),
  availableVisionWebSockets: new Map()
    .set('Field A', 'ws://192.168.0.104:4201/ssl-vision/field-a/subscribe'),
  legalNoticeUrl: '',
  dataProtectionUrl: '',
};
