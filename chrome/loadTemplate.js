var githubIssueTemplateBodyOnClick = function () {
  body.value = ISSUE_BODY_TEMPLATE;
};

var ISSUE_TITLE_TEMPLATE = "問題もしくは目的"

var ISSUE_BODY_TEMPLATE = "" +
"[前提]\n\n" +
"[問題]\n\n" +
"[目的]\n\n" +
"[対応手段]\n"

var title = document.getElementById("issue_title");
var body = document.getElementById("issue_body");
title.setAttribute('placeholder', ISSUE_TITLE_TEMPLATE);
body.value = ISSUE_BODY_TEMPLATE;
