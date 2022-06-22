import * as core from '@actions/core';

import { PR_TITLE, PR_TITLE_REGEX, removeLabel } from '../utils';

const Configs = {
  LABEL: {
    name: 'title needs formatting',
    color: 'EEEEEE',
  },
  MESSAGES: {
    success: 'All OK',
    failure:
      'Failing PR Title Check, EX: [LHUB-0000] Commit message or [feature-LHUB-0000] Commit message',
    notice: '',
  },
};

export async function checkPR() {
  if (PR_TITLE_REGEX) {
    let regex = new RegExp(PR_TITLE_REGEX);
    if (regex.test(PR_TITLE)) {
      removeLabel(Configs?.LABEL?.name);
      core.info(Configs?.MESSAGES?.success);
      return;
    }
  }
  core.setFailed(Configs?.MESSAGES?.failure);
  await addLabels([Configs?.LABEL]);
}
