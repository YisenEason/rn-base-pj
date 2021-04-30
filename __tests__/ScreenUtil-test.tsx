import { getHeightByScale } from '../src/helper/utils/ScreenUtil';

test('getHeightByScale', ()=>{
  const result = getHeightByScale(100, 100/80);
  expect(result).toBe(80);
})