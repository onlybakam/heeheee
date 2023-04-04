export const logit = (...rest: any[]) => {
  // a special logger
  console.log('[logger]', ...rest.map((r) => `<${r}>`))
}

export const hello = () => {
  // just says `hello` but could do so much more
  console.log('i just say hello..')
  const arr = {}
  console.log('hi')
}
