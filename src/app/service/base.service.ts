import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public systemType = '';
  public restPath = '';
  public distPath = '/';
  public contextPath = '/';
  public jsessionid = '/';

  public httpOptions;

  constructor() {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0');
    headers.append('Pragma', 'no-cache');
    headers.append('Expires', '0');
    this.httpOptions = { headers };

    if (location.href.indexOf(':4200') === -1) {
      // 上到struts server端的img path
      const url: Array<string> = location.href.split('/');
      // 只需取至server name
      for (let i = 0; i < 4; i++) {
        if (i !== 1) {
          this.restPath += url[i] + '/';
        }
        if (i === 0) {
          this.restPath += '/';
        }
      }
    } else {
      // this.restPath = 'http://192.168.0.113:8076/LRCS/';
      // this.restPath = 'http://localhost:8080/lrcs-web/';      
      this.restPath = '/';      
    }

    this.distPath = this.restPath;
    this.contextPath = this.restPath;

  }

  /**
   * 串接jsessionid
   */
  public appendSID(url: string) {

    return this.restPath + url;
  }

  /**
   * ngx spinner
   */
  spinnerShow() {
    document.getElementById('ngxSpinnerShow').click();
  }
  spinnerHide() {
    document.getElementById('ngxSpinnerHide').click();
  }

  /**
  * Read File Add
  */
  fileCatch(): string {
    return `v=${new Date().getTime()}`;
  }

  /**
   * replace null to empty
   * @param val
   */
  nullToBlank(val) {
    return (val == null) ? '' : val;
  }

  /**
   * export csv
   * @param content
   * @param fileName
   */
  exportCSV(content: string, fileName) {
    if (fileName == null) {
      fileName = 'data.csv';
    }
    const blob = new Blob(['\uFEFF' + content], {
      type: 'text/csv;charset=utf-8;'
    });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // for IE
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const link = document.createElement('a');
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', fileName);
      document.body.appendChild(link); // Required for FF
      link.click();
      document.body.removeChild(link);
    }
  }

}
