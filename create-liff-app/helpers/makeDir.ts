import fs from 'fs'

export function makeDir(
  root: string,
  options = { recursive: true }
): Promise<string | void> {
  return fs.promises.mkdir(root, options)
}