function Submission() {
  this.entries = [];
  this.numEntries = 0;
  this.totalVotes = 0;
}

Submission.prototype.addEntry = function(githubName, githubURL, githubImage) {
  if (this.numEntries <= 7) {
    this.numEntries++;
    var newEntry = {
      githubName: githubName,
      githubURL: githubURL,
      githubImage: githubImage
    };
    this.entries.push(newEntry);
  } else {
    return alert('Sorry, there are already enough entries');
  }
};

module.exports = {
  Submission: Submission
};
