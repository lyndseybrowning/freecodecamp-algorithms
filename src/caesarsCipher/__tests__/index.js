import cipher from '../';

describe('Caesars Cipher', () => {
  it('returns a rot13 deciphered string', () => {
    expect(cipher('SERR PBQR PNZC')).toEqual('FREE CODE CAMP');
    expect(cipher('SERR YBIR?')).toEqual('FREE LOVE?');
    expect(cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK')).toEqual('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX');
  });

  it('does not decode non-alphabetical characters', () => {
    expect(cipher('!')).toEqual(expect.stringContaining('!'));
    expect(cipher(' ')).toEqual(' ');
    expect(cipher('.')).toEqual(expect.stringContaining('.'));
  });
});
