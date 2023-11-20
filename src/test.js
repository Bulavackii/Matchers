const sortHeroesByHealth = require('./index');

test('Сортировка героев по уровню жизни', () => {
  const unsortedHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expectedSortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroesByHealth(unsortedHeroes)).toEqual(expectedSortedHeroes);
});