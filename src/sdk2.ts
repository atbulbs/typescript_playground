/**
 * @description 这是函数A
 */

export async function fnA(str: string): Promise<string> {
  return `sdk2AAAAAA` + fnC(str)
}

/**
 * @description 这是函数B
 */
export function fnB(str: string): Promise<string> {
  return Promise.resolve(`sdk2BBBBBB` + fnC(str))
}

/**
 * @description 这是函数C
 */
export function fnC(str: string): string {
  return `sdk2CCCCCC` + str
}
