import { Answers } from "inquirer";
import path from "path";
import { downloadAndExtractRepo } from "./helpers/download";
import { install } from "./helpers/install";
import { makeDir } from "./helpers/makeDir";

interface PromptAnswers {
  projectName: string;
  template: string;
  packageManager: string;
}

export async function createLiffApp(value: Answers): Promise<void> {
  const {
    projectName: inputName,
    template,
    packageManager,
  } = value as PromptAnswers;
  const projectName = inputName.trim();
  const useYarn = packageManager === "yarn";
  const root = path.join(process.cwd(), projectName);
  try {
    await makeDir(root);
    await downloadAndExtractRepo({
      path: root, 
      owner: "line", 
      repo: "line-liff-v2-starter",
      name: `src/${template}`
    });
    await install(projectName, useYarn);
  } catch (e) {
    throw e;
  }
}
