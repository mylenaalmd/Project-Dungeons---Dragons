export default interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void
  receiveDamager(attackPoints: number): number
}