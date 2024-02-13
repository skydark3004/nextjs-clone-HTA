/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export class AxiosInstance {
  protected api;
  constructor(_url: string, _config: any) {
    let defaultConfig = {
      baseURL: _url,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 0,
    };

    defaultConfig = Object.assign(defaultConfig, _config);
    this.api = axios.create(defaultConfig);
  }

  get(url: string, config = {}) {
    const defaultConfig = {
      ...config,
    };
    const request = this.api.get(url, defaultConfig).then(this.mapData).catch(this.mapError);
    return request;
  }

  post(url: string, body: any, config = {}) {
    const defaultConfig = {
      ...config,
    };
    const request = this.api.post(url, body, defaultConfig).then(this.mapData).catch(this.mapError);
    return request;
  }

  put(url: string, body: any, config = {}) {
    const defaultConfig = {
      ...config,
    };
    const request = this.api.put(url, body, defaultConfig).then(this.mapData).catch(this.mapError);
    return request;
  }

  patch(url: string, body: any, config = {}) {
    const defaultConfig = {
      ...config,
    };
    const request = this.api.patch(url, body, defaultConfig).then(this.mapData).catch(this.mapError);
    return request;
  }

  _delete(url: string, config = {}) {
    const defaultConfig = {
      ...config,
    };
    const request = this.api.delete(url, defaultConfig).then(this.mapData).catch(this.mapError);
    return request;
  }

  mapData(res: any) {
    return res.data;
  }

  mapError(err: any) {
    const responseError = err?.response?.data?.message || 'Đã có lỗi xảy ra!';
    //throw new Error(responseError);
    throw responseError;
  }
}