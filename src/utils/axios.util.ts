/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, CreateAxiosDefaults, AxiosInstance as IAxiosInstance } from 'axios';

export class AxiosInstance {
  instance: IAxiosInstance;
  constructor(_url: string, _config: CreateAxiosDefaults = {}) {
    let defaultConfig: CreateAxiosDefaults = {
      baseURL: _url,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 0,
    };

    defaultConfig = Object.assign(defaultConfig, _config);
    this.instance = axios.create(defaultConfig);
  }

  async get(url: string, config: AxiosRequestConfig = {}) {
    const defaultConfig = {
      ...config,
    };
    const { data } = await this.instance.get(url, defaultConfig); /* .then(this.mapData).catch(this.mapError) */
    return data;
  }

  async post(url: string, body: any, config: AxiosRequestConfig = {}) {
    const defaultConfig = {
      ...config,
    };
    const { data } = await this.instance.post(url, body, defaultConfig);
    return data;
  }

  async put(url: string, body: any, config: AxiosRequestConfig = {}) {
    const defaultConfig = {
      ...config,
    };
    const { data } = await this.instance.put(url, body, defaultConfig);
    return data;
  }

  async patch(url: string, body: any, config: AxiosRequestConfig = {}) {
    const defaultConfig = {
      ...config,
    };
    const { data } = await this.instance.patch(url, body, defaultConfig); /* .then(this.mapData).catch(this.mapError) */
    return data;
  }

  async delete(url: string, config: AxiosRequestConfig = {}) {
    const defaultConfig = {
      ...config,
    };
    const { data } = await this.instance.delete(url, defaultConfig); /* .then(this.mapData).catch(this.mapError) */
    return data;
  }

  /*   mapData(res: any) {
    console.log('mapData::', res);
    return res.data;
  }

  mapError(err: any) {
    console.log('mapError::');
    const responseError = err?.response?.data;
    console.log(responseError);

    //throw new Error(responseError);
    throw responseError;
  } */
}
