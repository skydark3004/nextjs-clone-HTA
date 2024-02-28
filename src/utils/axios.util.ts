/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

interface IInterceptor {
  request?: (config: any) => any;
  response?: {
    withSuccess: (response: any) => any;
    withError: (error: any) => any;
  };
}

export class AxiosInstance {
  protected api;
  constructor(_url: string, _config: any, interceptor?: IInterceptor) {
    let defaultConfig = {
      baseURL: _url,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 0,
    };

    defaultConfig = Object.assign(defaultConfig, _config);
    this.api = axios.create(defaultConfig);

    if (interceptor?.request) {
      this.api.interceptors.request.use(interceptor.request);
    }

    if (interceptor?.response) {
      this.api.interceptors.response.use(interceptor.response.withSuccess, interceptor.response.withError);
    }
  }

  get(url: string, config = {}) {
    const defaultConfig = {
      ...config,
    };
    const request = this.api.get(url, defaultConfig); /* .then(this.mapData).catch(this.mapError) */
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
    console.log('mapData::', res);
    return res.data;
  }

  mapError(err: any) {
    console.log('mapError::');
    const responseError = err?.response?.data;
    console.log(responseError);

    //throw new Error(responseError);
    throw responseError;
  }
}
