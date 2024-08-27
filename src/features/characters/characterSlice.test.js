import '@testing-library/jest-dom';
import { fetchCharacters } from './characterSlice';


describe('fetchCharacters', () => {
  it('fetches characters and validates the response structure', async () => {
    const result = await fetchCharacters();

    expect(result).toHaveProperty('info');
    expect(result).toHaveProperty('results');

    expect(Array.isArray(result.results)).toBe(true);
    expect(result.results.length).toBeGreaterThan(0);

    const firstCharacter = result.results[0];
    expect(firstCharacter).toHaveProperty('id');
    expect(firstCharacter.id).toBe(1);
    expect(firstCharacter.name).toBe('Rick Sanchez');

    
  });
});