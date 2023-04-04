import { Config } from '../../types';
import { ConfigService } from '../config.service';

describe('ConfigService', () => {
  const config = new ConfigService();
  process.env = {
    PORT: '3000',
    NODE_ENV: 'testing',
  };

  it('Should return environment variable', () => {
    expect(config.get(Config.NodeEnv)).toBe('testing');
  });

  it('Should return environment variable as a number', () => {
    expect(config.getNumber(Config.Port)).toBe(3000);
  });
});
