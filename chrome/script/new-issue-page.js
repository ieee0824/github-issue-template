var githubIssueTemplateLoader = {
  checkNewPageCompleted: function (tab) {
    if (!tab.url.match(/.*:\/\/github\.com\/.*\/issues\/new/)) {
      return false;
    }
    if (!tab.status.match(/complete/)) {
      return false;
    }
    return true;
  },
  loadTemplate: function() {
    console.log('hello load template');
  }
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (githubIssueTemplateLoader.checkNewPageCompleted(tab)) {
    chrome.tabs.executeScript(tabId, {file: 'loadTemplate.js'});
  }
  else {
    return;
  }
});
