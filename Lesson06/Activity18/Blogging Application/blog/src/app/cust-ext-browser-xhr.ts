import {Injectable} from "@angular/core";
import {BrowserXhr} from "@angular/http";
@Injectable()
/**
 * @author PaulOluyege
 */
export class CustExtBrowserXhr extends BrowserXhr {
  constructor() {
      super();
  }
  build(): any {
    let xhr = super.build();
    xhr.withCredentials = true;             // this is all the magic we need for now
    return <any>(xhr);
  }
}