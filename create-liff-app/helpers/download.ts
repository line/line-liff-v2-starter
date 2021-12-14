import got from "got";
import tar from "tar";
import { Stream } from "stream";
import { promisify } from "util";

const pipeline = promisify(Stream.pipeline);

export async function downloadAndExtractRepo({
  path,
  owner,
  repo,
  name,
  ref = "master",
}: {
  path: string;
  owner: string;
  repo: string;
  name: string;
  ref?: string;
}): Promise<void> {
  const url = `https://codeload.github.com/${owner}/${repo}/tar.gz/${ref}`;
  return pipeline(
    got.stream(url),
    tar.extract({ cwd: path, strip: name.split("/").length + 1, filter: (path) => {
      if (path.includes('package.lock.json') || path.includes('yarn.lock')) {
        return false;
      }
      return true;
    }}, [
      `${repo}-${ref}/${name}`,
    ])
  )
}
