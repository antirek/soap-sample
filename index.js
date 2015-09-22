  var soap = require('soap');
  var url = 'https://api4mini.webmoney.ru/AppActivationApi.asmx?wsdl';
  var args = {appId: 'XXXX'};
  soap.createClient(url, function (err, client) {
      client.NewSessionForServerApp(args, function (err, result) {          
          console.log('sessionId:', result.sessionId);
      });
  });