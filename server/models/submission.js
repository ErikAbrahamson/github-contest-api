function Submission() {
  this.entries = [];
  this.numEntries = 0;
}

Submission.prototype.addEntry = function(githubName, githubURL, githubImage) {
  this.numEntries++;
  var newEntry = {
    githubName: githubName,
    githubURL: githubURL,
    githubImage: githubImage
  };
  this.entries.push(newEntry);
};

module.exports = {
  Submission: Submission
};
