import { Observable, map } from "rxjs";
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
    console.log("I'm running before the handler", context);

    return handler.handle().pipe(
      map((data: any) => {
        console.log("I'm running before response is sent out", data);
      })
    )
  };
};