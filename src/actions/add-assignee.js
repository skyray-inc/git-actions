// NOTE: Test variables
// const JIRA_HOST_URL = "https://logichub.atlassian.net";
// const JIRA_PROJECT_NAME = "LHUB";
// const PR_BODY = "### Brief Overview\r\n\r\nThis PR is to create/fix ...\r\n\r\n### Jira Link\r\n\r\n> Jira epic link:\r\n\r\n> Jira story/bug link:\r\n\r\n### Design\r\n\r\n> <i>Figma link goes here</i>\r\n\r\n### Screenshots\r\n\r\n> Delete this after adding screenshots\r\n\r\n### Feature Flag\r\n\r\n- 'Name goes here'\r\n\r\n### Cherry Pick\r\n\r\n- 'Version goes here'\r\n\r\n### Coding Guidelines\r\n\r\n- [ ] Props are sorted\r\n- [ ] Order of imports : external libraries, lh alias ( lhConstant, lhComponent, lhUtil ), es6/components, bundle imports, local components / styles\r\n- [ ] Order of declaration within a component : useBundle, useDispatch, useSelector, useMemo, useState, useEffect\r\n- [ ] Line breaks are added in styling\r\n- [ ] Css / SASS variables are used in the styles\r\n- [ ] Variable / functions follow the naming convention\r\n\r\n### Tested\r\n\r\n- [ ] Add things that were tested and other action items here.\r\n"
// const BASE_BRANCH_NAME = "feature-LHUB-0008";
// const HEAD_BRANCH_NAME = "LHUB-008";
// const commitMessages = ['asdasd'];

import * as core from '@actions/core';

import { octokit } from './get-octokit';

import { PR_OWNER, logObj, REPO_NAME, REPO_OWNER, ISSUE_NUMBER } from '../utils';

export async function addAssignee() {
  core.info('Adding default assignee to PR...');

  core.info(`repo: ${REPO_OWNER}, ${REPO_NAME}, ${PR_OWNER}`);
  core.info(`owner: ${PR_OWNER}`);

  const newAssignee = '';
  const addAssigneeResponse = octokit.rest.issues.addAssignees({
    repo: REPO_NAME,
    owner: REPO_OWNER,
    issue_number: ISSUE_NUMBER,
    assignees: [],
  });

  core.info(`Added assignee (${logObj(newAssignee)}) to PR - ${addAssigneeResponse?.status}`);
}
