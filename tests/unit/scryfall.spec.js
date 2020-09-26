import { expect } from 'chai';
import getCard from '@/resources/scryfall';

describe('scryfall.js', () => {
  it('Test 404', () => {
    //Ver como testa async
    // getCard('Niv').then()

  });

  it('Test Empty', () => {
    const decklist = parserDeckList(`//Lands: 20
1 Scrubland
1 Badlands
1 Plateau
1 Marsh Flats
1 Bloodstained Mire
1 Arid Mesa
1 Godless Shrine
1 Blood Crypt
1 Sacred Foundry
1 Caves of Koilos
1 Sulfurous Springs
1 Battlefield Forge
1 Fetid Heath
1 Graven Cairns
1 Rugged Prairie
1 Temple of Silence
1 Temple of Malice
1 Temple of Triumph
1 Savai Triome
1 Command Tower
1 Mana Confluence
1 City of Brass
1 Reflecting Pool


//Basic Lands: 12
3 Plains
3 Swamp
3 Mountain`);

    expect(decklist).to.deep.equal({});
  });
});
