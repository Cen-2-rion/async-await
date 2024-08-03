import GameSavingLoader from '../app';
import read from '../reader'; // Импортируем reader, чтобы использовать его в моках

jest.mock('../reader'); // сообщаем, что этот файл должен стать моком

afterEach(() => {
  jest.resetAllMocks(); // после каждого теста сбрасываем все моки
});

test('should throw an error', async () => {
  // Настраиваем mock для выброса ошибки
  read.mockImplementation(() => {
    throw new Error('oops!');
  });

  await expect(GameSavingLoader.load()).rejects.toThrow(Error);
});
