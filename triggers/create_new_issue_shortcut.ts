// triggers/create_new_issue_shortcut.ts

import { Trigger } from "deno-slack-api/types.ts";
import CreateNewIssueWorkflow from "../workflows/create_new_issue.ts";

const createNewIssueShortcut: Trigger<
  typeof CreateNewIssueWorkflow.definition
> = {
  type: "shortcut",
  name: "Create GitHub issue",
  description: "Create a new GitHub issue in a repository",
  workflow: "#/workflows/create_new_issue_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
    channel: {
      value: "{{data.channel_id}}",
    },
  },
};

export default createNewIssueShortcut;
