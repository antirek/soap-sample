var soap = require('soap');
//  var url = 'https://api4mini.webmoney.ru/AppActivationApi.asmx?wsdl';
var url = 'http://127.0.0.1:8000/wsdl?wsdl';
var args = {appId: 'XXXX'};

soap.createClient(url, function (err, client) {
    console.dir(client.describe());

    client.sayHello({name: 'vasya', surname: 'petrov'}, function (err, result) {
        console.log(err, result);
    });
});