const theHead = document.querySelector('.thehead');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const para4 = document.querySelector('.para4');
const theSumHead = document.querySelector('.sumhead')
const theSum = document.querySelector('.thesum');

var week = 0;

var blogPost = {
    heading: ['Week 1: August 24 to 28',
        'Week 2: Aug 31 to Sept 4',
        'Week 3: Sept 7 to 11',
        'Week 4: Sept 14 to 18',
        'Week 5: Sept 21 to 25',
        'Week 6: Sept 28 to Oct 2',
        'Week 7: Oct 5 to 9'
    ],
    para1: ['Was my first week what I expected? Yes and no. Yes in terms of the fact that I had had a taste of what the bootcamp would be like in the course of completing the application project. In this project, I was tasked with using HTML to create a simple website with some basic text and images. Instead of detailed instructions, I was provided with links to sites that would provide the information I needed in order to complete each goal. The first week was similar to that except that the list of resources was far larger and the tasks much more complex. The major difference is that now I had the advantage of being able to access the instructers, Ian and Justin, as well as any if the 13 other students, for guidance or help via a program called Slack, an instant messaging system similar to an always-online chatroom.',
        'Week two is pretty much in the books. This week the main focus was on psuedocoding. This is a process of planning out your actual code in a more structured manner. This can be done with plain text or in a graphical format such as a flowchart, whether on computer or on a dry erase board. This allows the programmers to break the software into bite sized pieces that can be attacked one at a time instead of just jumping Rambo-style into the code without any plan.',
        'This week started with Labor Day, which gave me a nice day to spend with family, but also meant that I was starting one day behind. This meant that I had to spend a lot of extra time to keep caught up with the material. While we had a lot of HTML and CSS to work on this week, the main focus was on Javascript(JS).',
        'This was the last week of remote work before we move on-site to Awesome Inc\'s building in downtown Lexington. While I\'ll miss working from home in some ways, I\'m excited to get started in the core bootcamp experience.',
        'This has been the first week on-site at Awesome Inc. It\'s been exciting working in close (closer, at least) proximity with the other bootcampers. Being here in person has created a new set of challenges, such as getting up in the morning, planning the commute, and figuring out how I\'m going to feed myself though the course of the day.',
        'I\'m writing this a week late (shame on me) and what really stands out is how long ago last week seems.  We are going over so much content that last week seems more like last month.',
        'This week I have finally gotten the hang of rendering HTML stright from JS, which is perfect timing as that skill may be obsolete next week with the beginning of React. But really this week was more an introduction to object oriented programming, or OOP and MVC design.'
    ],
    para2: ['Were there struggles? Yes. The only way that the first week was NOT what I expected was in the sheer volume of content. It was definitely overwhelming, and while I was advised to expect up to 20 hours of work in the first week, it was certainly possible to spend far more time combing through the several seemingly bottomless links that were given as resources. In fact, I had to make a special effort to stay on task, as the material lends itself to wondering down rabbit holes. While this did lead to a bit of frustration, guidance was never far away. Also helpful was the daily check-in online conference calls which gave me chance to explain where I was having difficulty and learn from the experiences of other students. Overall, while I felt very challanged, I knew that I had help waiting in the wings if I did manage to get too deep in the weeds.',
        'We also learned about the Agile philosophy, which is way to interact with your team and clients in a way that keeps the project moving steadily forward, and MoSCoW, which is a way to look at a program through the prism of what it Must do, what it Should do, what it Could do, and what it Won\'t do. This makes you look at your work in a more pragmatic fashion, so you prioritize getting the software up and running, and also helps you to figure out what features are going to be within the scope of the project, versus what might have to wait.',
        'I had only barely worked with JS before, but it does remind me a bit of working with BASIC way back in the 90\'s, in that it uses mostly english words for the different elements. However, the way in which JS interacts with HTML is so far very confusing. That said, I am glad to really be digging into some actual coding, instead of just arranging HTML and CSS, as fun as that is. Javascript seems to be the door to more sophisticated programming.',
        'This week was quite challenging, and I was definitely feeling some pressure leading up to today\'s demo. This week we were tasked with creating two programs from scratch that implemented some functions we had not used before. The process of adding the elements of HTML, CSS, and Javascript together into one cohesive workflow is still pretty new to me, so I ended up having to rely on some of the previous projects as a rough template to complete the new ones. The results were a couple of Frankenstein\'s monsters that didn\'t look pretty, but get the job done.',
        'As always, the workload, including reading and projects is overwhelming. I\'m trying to make a point to spend my time productively, but it\'s easy to get lost doing research and experimenting for hours only to realize that I\'ve not really getting anything accomplished. Time management is always a key element that I\'m always trying to improve.',
        'Last week was all about learning to fetch API and rendering HTML from Javascript.  Also we added bootstrap to our blogs.  In my case I rebuilt everything from the ground up and I was able to consolidate my blog down to one long page.  Also I\'ve added some real-time rendering for my actual blog post.  I hope you are having fun pressing the buttons! (also I hope everything is actually working)',
        'MVC, or Model-View-Controller is a new way to look at the structure of programming and is also another lead-in to React in some ways. I honestly find it quite tough to grasp.'
    ],
    para3: ['What I\'m excited to learn about in the coming weeks is how to continue to grow this initial knowledge into a toolbox for software development!',
        'What I\'ve struggled with this week as much as anything else is simply managing my time. A week is not a long time, and if you have a couple of days where you don\'t get much accomplished, it can have you straining to catch up. Also, as we get closer to being fulltime in the classroom, I really want to be getting into the 8 to 5 schedule now, so it won\'t be a shock to my system when we do get to that stage.',
        'Also introduced in this week was CodeWars, which is a neat website that features bite-sized coding challenges that are almost like games or puzzles, and I look forward to digging into that deeper. Lastly, I\'ve finally made some changes to my blog, making it look nicer and adding some functionality in the form of links and addition pages, which I will soon be filling in with content.',
        'Most of the coding makes sense so far, but due to the breakneck pace we are pushing, it\s difficult to get comfortable with anything, since as soon as we complete a project learning one skill we are immediately on to something else. It will be interesting to see how the pacing accelerates once we are meeting in person.',
        'The subjects we\'ve been concentrating on are Bootstrap, Javascript, and conceptualizing websites with atomic design, which is breaking down HTML into it\'s smallest form(atoms) and observing how to build them into bigger molecules and organisms. Projects for the week were to build a "mindreader" app that utilizes "states" and to create a "campaign" website for a fictional character. I choose Walter Sobchak from the Big Lewbowski.',
        'Later today I will be updating about this weeks projects, which were the most challanging yet.',
        'We have been instructed to begin brainstorming about what we might do for our final projects, but I have only thought about it in a passing fashion; there is simply so much on my plate that I can\'t really fit anything else on there, and anyway, I feel like, in the end, the right idea will just fall out of the sky and hit me on the head.  In any case, I\'m keeping my mind open to whatever might present itself.'
    ],
    para4: ['',
        '',
        'My focus remains on improving my time management. At this point I already have way more material available than I can possibly cover, so I need to be sure I\'m spending my time wisely',
        'This weekend I intend to take one last breath before the plunge on monday. After that, it will be three months of intensity. I just hope all this knowledge will fit in my brain...',
        '',
        '',
        ''
    ],
    summary: ['Introduction to use of HTML, CSS, Slack, Git, Github, MAMP, Chrome Dev Tools, VS Code, and Terminal',
        'Introduction to pseudocode, Agile, MoSCoW, and deeper delving into HTML and CSS',
        'Introduction to Javascript, CodeWars, and pair programming, plus more HTML, CSS',
        'Image gallery, Countdown timer, Digital Clock',
        'Atomic principals, Bootstrap 4, Javascript',
        'Bootstrap blog, Weather App, Async functions, APIs',
        'Tic Tac Toe, Calculator, MVC, Object Oriented Design'
    ],
}




window.onload = createJSON();

function createJSON() {

    console.log(blogPost);
    

}


function displayBlog(x) {
    week += x;
    console.log(week, x, blogPost.heading.length);
    if (week == blogPost.heading.length) {
        week = 0;
    } else if (week == -1) {
        week = blogPost.heading.length - 1;
    }
    theHead.innerHTML = blogPost.heading[week];
    para1.innerHTML = blogPost.para1[week];
    para2.innerHTML = blogPost.para2[week];
    para3.innerHTML = blogPost.para3[week];
    para4.innerHTML = blogPost.para4[week];
    theSumHead.innerHTML = "Week " + (week + 1) + " topics:";
    theSum.innerHTML = blogPost.summary[week];

}

//<button onclick="myFunction()">Click me</button>
