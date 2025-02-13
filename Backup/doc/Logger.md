# Logger

## 설정

### 1. 설정파일 생성

```tsx
import {utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export constcustomLogger= WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level:process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
utilities.format.nestLike('TR', { prettyPrint: true }),
      ),
    }),
  ],
});

```

### 2. 커스텀 로그로 등록

```tsx
import { customLogger } from './configuration/logger.configuration';

const app = await NestFactory.create(ApiModule, {
    logger: customLogger,
  });
```

###  3. 모듈에 Logger 설정

```tsx
import { Logger, .. } from '@nestjs/common';

@Module({
  providers: [Logger],
})
export class Module {}
```

### 4. 사용

```tsx
import {
  .
	.
  LoggerService,
} from '@nestjs/common';
.
.
.
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
  ) {}

	function name()
  {
    this.logger.log(`Log use Test`);
		.
		.
		.
  }
}
```

## 참고링크
https://github.com/gremo/nest-winston