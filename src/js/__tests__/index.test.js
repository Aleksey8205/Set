import { Team, Character } from '../index.js';

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  describe('add method', () => {
    test('Добавление персонажа в команду', () => {
      const warrior = new Character('Warrior', 100);
      team.add(warrior);
      expect(team.toArray()).toEqual([warrior]);
    });

    test('Должна выдаваться ошибка если персонаж существует', () => {
      const warrior = new Character('Warrior', 100);
      team.add(warrior);
      expect(() => team.add(warrior)).toThrow("Персонаж уже есть в команде");
    });
  });

  describe('addAll method', () => {
    test('Добавление в команду нескольких персонажей', () => {
      const warrior = new Character('Warrior', 100);
      const mage = new Character('Mage', 80);
      const rogue = new Character('Rogue', 60);
      team.addAll(warrior, mage, rogue);
      expect(team.toArray()).toEqual([warrior, mage, rogue]);
    });

    test('Добавление в команду повторяющийхся персонажей', () => {
      const warrior = new Character('Warrior', 100);
      const mage = new Character('Mage', 80);
      team.addAll(warrior, mage, warrior);
      expect(team.toArray()).toEqual([warrior, mage]);
    });
  });

  describe('toArray method', () => {
    test('Преобразование в массив', () => {
      const warrior = new Character('Warrior', 100);
      const mage = new Character('Mage', 80);
      team.add(warrior);
      team.add(mage);
      expect(team.toArray()).toEqual([warrior, mage]);
    });
  });
});