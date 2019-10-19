var friends = require("../data/friends");

module.exports = function (app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function (req, res) {
    res.json(friends);
    console.log(req.body.scores); 
    });
    app.post('/api/friends', function (req, res) {

      //req.body is available since we're using body-parser middleware
      var newUser = req.body;
      console.log('postroute');
      
      //score loop
      for (var i = 0; i < newUser.scores.length; i++) {
        if (newUser.scores[i] == "1 (Yes)") {
    
          newUser.scores[i] = 1;
        } else if (newUser.scores[i] == "3 (No)") {
    
          newUser.scores[i] = 3;
        } else {
    
          newUser.scores[i] = parseInt(newUser.scores[i]);
        }
      }
    
      //array for the comparison
      var comparisonArray = [];
      // var friendsMatch = [];
    
      for (var i = 0; i < friends.length; i++) {
        //Determine the users most compatible friend
        var comparedFriend = friends[i];
        //calculate the totaldifference between friends
        var totalDifference = 0;
    
        for (var k = 0; k < comparedFriend.scores.length; k++) {
          //return the absolute value of a number *use abs()method
          var differenceOneScore = Math.abs(comparedFriend.scores[k] - newUser.scores[k]);
          totalDifference += differenceOneScore;
        }
    
        comparisonArray[i] = totalDifference;
      }
    
      var bestFriendNum = comparisonArray[0];
      var bestFriendI = 0;
    
      for (var i = 1; i < comparisonArray.length; i++) {
        if (comparisonArray[i] < bestFriendNum) {
          bestFriendNum = comparisonArray[i];
          newUserI = i;
        }
      }
      //push new friend
      friends.push(newUser);
      //json bf to the current friend match array
      res.json(friends[bestFriendI]);
    
    })
    
  };