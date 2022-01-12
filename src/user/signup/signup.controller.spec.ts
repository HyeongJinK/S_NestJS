import { Test, TestingModule } from '@nestjs/testing';
import { SignupControllerImpl } from './signup.controllerImpl';

describe('SignupController', () => {
  let controller: SignupControllerImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupControllerImpl],
    }).compile();

    controller = module.get<SignupControllerImpl>(SignupControllerImpl);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
