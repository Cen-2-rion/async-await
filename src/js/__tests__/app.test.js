import GameSavingLoader from '../app';

// проверочные тесты
test('should return the object', async () => {
  const result = await GameSavingLoader.load();

  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});

test('should throw an error', async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).rejects.toThrow('loading failed');
  }
});
