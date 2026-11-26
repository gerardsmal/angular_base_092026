import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { tap } from 'rxjs';

@Service()
export class PersoneServices {
    url = "http://localhost:9090/rest/persone/";

    persone = signal<any[]>([]);


    private http = inject(HttpClient);

    list(){
        return this.http.get(this.url + "list")
            .subscribe({
                next: ((resp:any) => {
                    this.persone.set(resp);
                })
            })
    }

    getById(id:number){
        let params = new HttpParams().set("id", id);
        return this.http.get(this.url + "getById", {params});
    }

    create(body:{}){
        return this.http.post(this.url + "create", body)
            .pipe(tap(() => this.list()))
    }

    update(body:{}){
        return this.http.patch(this.url + "update", body)
            .pipe(tap(() => this.list()))
    }

    delete(id:number){
        return this.http.delete(this.url + "delete/" + id)
            .pipe(tap(() => this.list()))
    }
}
