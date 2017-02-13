#Overview
So we had a bit of a rough start. But we want to really start structuring and accomplishing goals. We're going to progress in the next few iterations by moving in small steps on three fronts:
1. Project creation (real world experience)
2. Algorithms (Competitive programming, TA, interviews)
3. Machine Learning (Indicate a deep interest)

#Project - Real Experience 
**Description:** First things first, create a small Node application. Download ExpressJS using NPM and boot a web server.

All the code you wrote in Iteration 1 will come in handy here. We want to have that same exact button that you wrote that pinged ipinfo to now hit your own custom-built REST route.

Requirements:
1. Create a button accessible at localhost:3000 that can be clicked  
2. Upon click, the button will send a GET request to /foods 
3. The server/express will receive this request and read from a json file with 10 custom foods that you made. The foods should indicate: calories, protein, fats, carbs.
4. The client will receive the foods and have them listed below the button.

General sample code direction;
//Button is linked to hit onclick="ipinfo.io" --> /foods
app.get('/foods', (req, res) => {
  //write code that reads from a file on your local filesystem
});

fileReadSync.(filename).json

##Fundamentals to Functional JS
0. What is a closure?
1. Define a callback.
2. What are the five categories of status codes?
1xx
2xx
3xx
4xx
5xx
Memorize the following status codes: 200 401 403 404 500

#Algorithms - TA pos && Interviews
Read chapter 4 of CLRS:
Maximum Sum Subarray - Divide and Conquer fashion
https://leetcode.com/problems/maximum-subarray/

Be prepared to explain the following concepts:
1. Master Theorem
2. Recurrence Relations

Optional: Answer maximum sum subarray - Dynamic Programming

Understand Heaps and Priority Queues:
Watch all videos in this channel related to binary heaps, priority queues
https://www.youtube.com/channel/UCUGQA2H6AXFolADHf9mBb4Q/videos

* How do I represent children, parents of priority queues? 
* When would I use a priority heap/queue?

Extra:
K-ary heap questions
Leetcode:
https://leetcode.com/problems/kth-largest-element-in-an-array/

#Machine Learning
Register for Andrew Ng's course. It starts on Feb 20. 





