import { Observable, map } from "rxjs";
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
constructor(private dto: any) {};

  intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
      })
    )
  };
};