const STRIP_COMMENTS_FROM_FUNC_ARGS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm;
const ARGUMENT_NAMES_FROM_FUNC_ARGS = /([^\s,]+)/g;

// credit: https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
export function getParamNames(func: Function): string[] {
  const fnStr = func.toString
    .call(func)
    .replace(STRIP_COMMENTS_FROM_FUNC_ARGS, '');
  const result = fnStr
    .slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
    .match(ARGUMENT_NAMES_FROM_FUNC_ARGS);
  return result === null ? [] : result;
}
