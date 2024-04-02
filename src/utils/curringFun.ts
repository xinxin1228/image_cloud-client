export const curringFun = (fn: (...args: any[]) => any) => {
  return function curring(...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...args2: any[]) {
        return curring.apply(this, args.concat(args2))
      }
    }
  }
}
