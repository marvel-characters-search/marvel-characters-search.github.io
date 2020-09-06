import { singedUrlDeterministic } from '../urlSigner';

test('Url signer works on some hardcoded data', () => {
  expect(singedUrlDeterministic('prefix', 0, 'privateKey', 'publicKey')).toEqual('prefix?ts=0&apikey=publicKey&hash=f34a5b7c8facf47ca05aa068e95ec1d7');
  
  expect(singedUrlDeterministic('prefix?mda', 0, 'privateKey', 'publicKey')).toEqual('prefix?mda&ts=0&apikey=publicKey&hash=f34a5b7c8facf47ca05aa068e95ec1d7');
});

