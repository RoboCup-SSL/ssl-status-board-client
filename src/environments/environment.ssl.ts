// noinspection JSUnusedGlobalSymbols
export const environment = {
  production: true,
  availableStatusWebSockets: new Map()
    .set('Field A', 'ws://ssllive.robocup.org:4201/ssl-status/field-a/subscribe')
    .set('Field B', 'ws://ssllive.robocup.org:4201/ssl-status/field-b/subscribe'),
  availableVisionWebSockets: new Map()
    .set('Field A', 'ws://ssllive.robocup.org:4201/ssl-vision/field-a/subscribe')
    .set('Field B', 'ws://ssllive.robocup.org:4201/ssl-vision/field-b/subscribe'),
  legalNoticeUrl: '',
  dataProtectionUrl: '',
};
