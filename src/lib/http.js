import request from 'superagent';
import btoa from 'btoa';

import {dispatch} from 'io/store';
import {API_URL} from 'io/config';

const {
  AlertIOS,
} = React;

export default function http(sig, options = {}) {
  const [method, path] = sig.split(' ');

  return new Promise((resolve, reject) => {
    let req = request[method.toLowerCase()](API_URL + path);

    if (options.params) {
      req.send(options.params);
    }

    if (options.query) {
      req.query(options.query);
    }

    const hash = new Buffer(process.env.CLOSE_API_KEY + ':').toString('base64');
    req.set('Authorization', `Basic ${hash}`);

    req.end((err, res) => {
      if (res && res.status === 401) {
        reject();
        return;
      }

      if (err) {
        if (!options.silent) {
          AlertIOS.alert('There was a problem', 'Something went wrong. Check your Internet connection and try again.');
        }

        return reject(err);
      }

      let body = res.body;

      if (!body && res.data) {
        body = JSON.parse(res.data);
      }

      resolve(body);
    });
  });
}
