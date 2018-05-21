// noinspection JSUnusedGlobalSymbols
export const environment = {
  production: true,
  availableStatusWebSockets: new Map()
    .set('Field A', 'wss://tigers-mannheim.de/ssl-status/field-a/subscribe')
    .set('Field B', 'wss://tigers-mannheim.de/ssl-status/field-b/subscribe'),
  availableVisionWebSockets: new Map()
    .set('Field A', 'wss://tigers-mannheim.de/ssl-vision/field-a/subscribe')
    .set('Field B', 'wss://tigers-mannheim.de/ssl-vision/field-b/subscribe'),
};
