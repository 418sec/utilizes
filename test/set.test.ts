import { set } from '../src/set'

test(`Set value to path in object. path can br one or more path's`, () => expect(set({ prop: 1 }, 2, 'prop', 'anotherProp', '0.0')).toEqual({
  prop: 2,
  anotherProp: 2,
  0: [2]
}))

test(`Value can bea function that invoked to preduce the actual value to set`, () => expect(set({ prop: 1 }, (currentValue: number) => currentValue === 1 ? 2 : 1, 'prop', 'anotherProp', '0.0')).toEqual({
    prop: 2,
    anotherProp: 1,
    0: [1]
}))

test(`Disallow protopath override by throwing exception when unsafe path encountered`, () => expect(() => set({}, 'test', '__proto__.polluted')).toThrow())

test(`Disallow protopath override by throwing exception when unsafe path encountered`, () => expect(() => set({}, 'test', 'constructor.prototype.polluted')).toThrow())