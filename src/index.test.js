// const getPercents = require('./index.js');
import {getPercents} from './index.js';

describe('get percents', () => {

  it ('works correctly with numbers', () => {
    expect(getPercents(30, 200)).toBe(60);
    expect(getPercents(25.3, 57.6)).toBeCloseTo(14.57);
    expect(getPercents(156, -100)).toBe(-156);
  });

  // corner test (get percents from 0)
  it ('10% from 0 = 0%', () => {
    expect(getPercents(10, 0)).toBe(0);
  });

  it ('test with wrong number', () => {
    expect(getPercents('asdf', '100')).toBe(NaN);
  });

});


