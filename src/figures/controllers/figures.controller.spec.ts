import { Test, TestingModule } from '@nestjs/testing';
import { FiguresController } from './figures.controller';

describe('FiguresController', () => {
  let controller: FiguresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiguresController],
    }).compile();

    controller = module.get<FiguresController>(FiguresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
