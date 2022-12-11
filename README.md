Hello there,
I am Blerion and i hope a lot that you will like my work.

First of all i hope you all are doing great.

Please read the file till end because there are important information for the task.

npm install
npm start to run the rpoject
npm test to run the tests

Lets start with my readMe file now :)

1.  I consumed the imgur API and with a endpoint i took all the images that i need to
    display on front-end.

    You need a token to access that call,
    My TOKEN IS : 3df7b4400233ada1e6459097fddeb48dac91641e.

2.  I tried to creat a grid by myself but after that i remembered that i have worked with MUI
    a lot so i used ImageListItem that MUI offer for the grid.

3.  I used another component from MUI to show some information of a image on the bottom position.

4.  After that i added a Filter section, i added some filter selects for
    a) Gallery section with values (hot, top, user)
    b) Switch field for including or excluding viralImages from the result set
    c) specifying window and sort paramters

5.  When clicking an image a modal will show up with all the descriptions of that image
    NOTE: fields that are empty will not show on modal.

6.  PAGANATION not added, not because i dont know how to added it but the GET gallery api dosent
    support the pagaination thing.
    NOTE: Down below i will show you a example how i would do it if the api will have paganation param

7.  Like you see it i have used React v- 18.X and Redux to manage state data.

8.  For style the components i have used CSS.

9.  CODE LINTER IS ADDED

10. TYPESCRIPT is not included

11. I have implemented 2 simple test with Jest.
    NOTE: to be honest i have not worked with Jest before. But i have some ideas and knowledge
    how it works.
    But good news for you maybe is that i have used Cypress a lot before.

12. Another good news is that i have deploied my website on Netifly. :)
    https://exquisite-macaron-0e85e7.netlify.app this is a link

---------In this section i will show difficulties that i faced-----------

1.  Imgur api dosent work on localhost
    What does it means?
    http://localhost:3000 it need to be replaced with http://IPV4_Addres:3000

2.  To grant access for api Imgur.

--------- Bugs that page has already-----------

1. Some images are not in the right size.
   So mostly in some of them yo will see blank space on it.

2. Bug 2 is connected with bug 1 when you open a big image the modal will not be showed correctly.

--------- Now let me show you how the pagination will be implemented by me--------------

First of all we will use UseEffect and inside hime will create a eventListener
One example i have implemented on FilterImageComponent i have use UseRef to take a reference of a
div and after some calucate to find where is the user on the page.
If he has reached the bottom that is the first condition here will be fire another function that
dispatch the getPosts with page number different
And another thing to do is [...firstPosts, ...NewPosts] to keep the post we already have uploaded
on front end andthen the new posts that will come from paganation

Hope that all of this to be clear but for more further questions let me know on the gmail.

Take care.
Blerion
