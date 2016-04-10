const FileTransfer = React.NativeModules.FileTransfer;

export default class SuperUploader {
  static post(url) {
    return new this(url);
  }

  constructor(url) {
    this.url = url;
    this.headers = {};
  }

  accept() {
    return this;
  }

  set(header, value) {
    this.headers[header] = value;
    return this;
  }

  send(data) {
    this.data = data;
    return this;
  }

  attach(options) {
    this.attachment = options;
  }

  end(cb) {
    let options = {};

    options.uploadUrl = this.url;

    options.uri = this.attachment.uri;
    options.fileName = 'photo.jpg';
    options.mimeType = this.attachment.mimeType;

    options.headers = this.headers;
    options.data = this.data;

    FileTransfer.upload(options, cb);
  }
}
