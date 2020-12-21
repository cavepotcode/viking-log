import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogs, ILogsFilter } from 'src/app/shared/interfaces/ILogs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    constructor(private httpClient: HttpClient) { }

    public logsByProject(id: string, page: number, size: number, filter?: ILogsFilter): Observable<Array<ILogs>> {
        const url = `${environment.apiUrl}logs/project/${id}`;

        let params = new HttpParams();
        params = params.append('page', page.toString());
        params = params.append('size', size.toString());

        if (filter?.level) {
            params = params.append('level', filter.level);
        }
        if (filter?.text) {
            params = params.append('text', filter.text);
        }
        if (filter?.dateFrom && filter?.dateTo) {
            params = params.append('dateFrom', filter.dateFrom);
            params = params.append('dateTo', filter.dateTo);
        }

        return this.httpClient
            .get(url, { params })
            .pipe(map((res: any) => {
                if (res.meta.code === 0) {
                    return res.data;
                }
                throw (new Error());
            }));
    }

    public levelsCode() {
        const url = `${environment.apiUrl}generic/levelsCode`;
        return this.httpClient
            .get(url)
            .pipe(map((res: any) => {
                if (res.meta.code === 0) {
                    return res.data;
                }
                throw (new Error());
            }));
    }
}
