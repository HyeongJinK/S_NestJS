import {Body, Controller, Get, HttpCode, Param, Post, Query} from '@nestjs/common';
import {Observable, of} from "rxjs";
import {UserDto} from "./user.dto";
import {SignInService} from "./sign-in.service";

@Controller('signin')
export class SignInController {
    constructor(private signInService: SignInService) {
    }


    @Get()
    test() {
        return "test";
    }

    @Get("/status")
    @HttpCode(300)
    test2() {
        return "test2";
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Get(':id')
    findOne2(@Param('id') id: string) : string {
        console.log(id);
        return `This action returns a #${id} cat`;
    }
    // 비동기 함수는 Promise를 반환해야 한다.
    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }
    // rxjs
    @Get()
    findAll2(): Observable<any[]> {
        return of([]);
    }

    @Post()
    async test3(@Body() userDto: UserDto) {
        return "ee";
    }
}
