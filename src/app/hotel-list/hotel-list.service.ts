import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IHotel } from "./hotel";


@Injectable({
    providedIn: 'root'
})
export class HotelListService {

    private readonly HOTEL_API_URL = 'api/hotels.json';
    constructor(private http: HttpClient ){
    }

    public getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
        tap(hotels => console.log('hotels: ', hotels)),
        catchError(this.handelError)
    );
    }

    private handelError (error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
        console.error('An error occurred:', error.error.message);
        }else{
        console.error(
            `Backend returned code ${error.status}, `+ 
            `Body was  ${error.error}`);
    }
    return throwError(
        'something bad happened; please try again later'
    )
    }

}