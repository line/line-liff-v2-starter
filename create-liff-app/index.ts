#!/usr/bin/env node
import chalk from "chalk";
import fs from "fs";
import path from "path";
import inquirer, { ListQuestion, Question } from "inquirer";
import { createLiffApp } from "./create-liff-app";
import { isFolderEmpty } from "./helpers/isFolderEmpty";

const prompt = inquirer.createPromptModule();
const questions: Array<Question | ListQuestion> = [
  {
    type: "input",
    name: "projectName",
    message: "Enter your project name: ",
    default: "my-app",
    validate: (input: string) => {
      const projectName = input.trim();
      if (!projectName) {
        console.log();
        console.log(`${chalk.yellow("Project name is required.")}`);
        return false;
      }
      if (fs.existsSync(path.basename(projectName))) {
        return isFolderEmpty(path.join(process.cwd(), projectName), projectName);
      }
      
      return true;
    },
  },
  {
    type: "list",
    name: "template",
    message: "Which template you want to use?",
    choices: [
      {
        value: "vanilla",
        checked: true,
      },
      {
        value: "nextjs",
        checked: false,
      },
      {
        value: "nuxtjs",
        checked: false,
      },
    ],
  },
  {
    type: "list",
    name: "packageManager",
    message: "Which package manager you want to use?",
    choices: [
      {
        key: "yarn",
        value: "yarn",
        checked: true,
      },
      {
        key: "npm",
        value: "npm",
        checked: false,
      },
    ],
  },
];

console.log(
  `${chalk.greenBright("Welcome")} to the ${chalk.cyan("Create LIFF App")}`
);
prompt(questions).then(createLiffApp);
