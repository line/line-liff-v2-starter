import spawn from "cross-spawn";

export function install(
  root: string,
  useYarn: boolean
): Promise<void> {
  return new Promise((resolve, reject) => {
    let args: string[];
    let command: string = useYarn ? "yarnpkg" : "npm";
    args = ["install"];
    args.push('--cwd', root);
    const child = spawn(command, args, {
      stdio: "inherit",
      env: { ...process.env, ADBLOCK: "1", DISABLE_OPENCOLLECTIVE: "1" },
    });
    child.on("close", (code) => {
      if (code !== 0) {
        reject({ command: `${command} ${args.join(" ")}` });
        return;
      }
      resolve();
    });
  });
}
