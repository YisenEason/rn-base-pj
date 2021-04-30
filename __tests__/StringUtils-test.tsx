import { isEmpty } from '../src/helper/utils/StringUtils';

test('isEmpty', ()=>{
  expect(isEmpty('')).toBe(true);
  expect(isEmpty(' ')).toBe(false);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty(null)).toBe(true);
})