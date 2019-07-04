let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function(event, context, callback) {
    sns.publish({
  Message: 'test',
  Subject: 'test',
  MessageAttributes: {},
  MessageStructure: 'String',
  TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
}).promise()
                .then(data => {
                    console.log(data);
                    callback(null, data);
                    // your code goes here
                })
                .catch(err => {
                    console.log(err);
                    callback(null, err);
                    // error handling goes here
                });
    
    
}