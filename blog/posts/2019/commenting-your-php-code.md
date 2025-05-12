---
title: Commenting your PHP code
description: "Should you write comments in your PHP code or not?"
date: 2022-07-10 07:08:21
authors:
  - fernanda
---

# Commenting your PHP code

![Cover Image](imgs/commenting2.jpg)

When I started to learn PHP years ago, I came across comments. What a controversial subject! Some programmers tend to comment their code, some don’t. Looking for answers, I went to the Internet to find a never-ending discussion on the topic: 

<!-- more -->

- “Nobody has time for comments!” 
- “You should write comments for every section.” 
- “Good code speaks for itself.” 
- “Comments are good, but since nobody is reading my code, I don't write them”. 
- “You don't need comments when you name things well” 

I even read a few stories about developers that had to read code written by somebody that commented *every single line* of the code. It was a nightmare. Being new to the PHP world, I began wondering: is commenting your code good or bad? Where should I write a comment? How much should I comment my code? Should I not comment it at all? I'm going to try and give answers to some of these questions in this article.

---

## What is the purpose of comments in programming?

[Comments](https://www.cs.utah.edu/~germain/PPS/Topics/commenting.html) are descriptions of what is written in the source code. Their purpose is to clarify the code whenever it's uncommon or not intuitive. They are written in human language, so that anybody can read them and have an idea of what the program does. 

Besides clarifying the code, comments can be used to generate reference documentation -certain engines, such as [phpDocumentor](https://www.phpdoc.org/), pick them up and generate documentation directly from the PHP source code. This is helpful to provide information about the functionality of your code to your users. Most modern IDEs provide [built-in support](https://docs.devsense.com/en/vscode/editor/phpdoc) for writing and maintaining these comments. Generating documentation is not the aim of this article, but you can read more about it here[Using PHPDoc with PHP 7](https://blog.devsense.com/using-phpdoc-with-php7-and-make-it-work). 

![PHPDoc comment documents your code](https://blog.devsense.com/bl-content/uploads/pages/autosave-06b42e810e999309cff584856870b4cd/phpdoc-1.png)
> *Nicely documented declarations will help your future self and other developers consuming your API. It also specifies clearly what your function does.*

![PHPDoc comments help in the editor](https://blog.devsense.com/bl-content/uploads/pages/autosave-06b42e810e999309cff584856870b4cd/phpdoc-2.png)

Going back to our controversial topic, developers [in favor of commenting the code](http://www.icsharpcode.net/TechNotes/Commenting20020413.pdf) state that comments are essential, that it's the only way to let future readers know what's going on in the code, what it does and why. If somebody else is going to read you code, it might not be obvious why you went down certain path or what certain function does.

![sample of inline comments](https://blog.devsense.com/bl-content/uploads/pages/autosave-06b42e810e999309cff584856870b4cd/comment-sample.png)

But not all developers believe comments are useful. There are developers [firmly against commenting the code](https://www.youtube.com/watch?v=vXoeGIVTI4M). They believe that if you need comments, you must be doing something wrong. Comments hide the failures of a programmer. Also, comments are a waste of time because any comment that you write today can be obsolete tomorrow. Comments need to be updated with the code and nobody wants to do it, nobody has the time to do it. According to them, the good practice is writing “[clean code](https://medium.com/mindorks/how-to-write-clean-code-lessons-learnt-from-the-clean-code-robert-c-martin-9ffc7aef870c)” or “self-documented code”, that is, naming variables, methods and functions well.

Here's are some of the reasons in favor and against comments:

| Reasons for commenting the code | Reasons for **NOT** commenting the code |
| --- | --- |
| - Explain the logic behind the solution -why certain function was used instead of another one. Very useful for a group of programmers. | - Comments are redundant to the code. They explain the obvious, so they're useless. |
| - Sometimes it's faster to read the comments that the code itself. If the code is unusual or complex, you could spend hours trying to figure out what's going on.  | - Comments are a sign of failure. If it's not obvious what the code does, it's wrong and you have to refactor it to make it self-explanatory. |
| - Notifications, reminders, warnings and to-dos can be written in comments for yourself or the next developer. | - They get outdated and are unreliable. Since the code gets updated frequently and usually comments don't, they're not relevant nor accurate most of the time. |
| - If you revisit the code after some time (could be weeks or years), you won't know what it does, unless you have comments. | - They're a waste of time. If you have to maintain the code and maintain the comments as well, you're wasting valuable time. |

---

## Are comments a personal choice?

It could be seen as a personal choice, whether to use comments or not. Over-commenting your code can be detrimental, redundant, "noisy" and visually harder to read by anyone. But, when used correctly, comments can be really helpful.

I've seen very experienced developers that like to write the comments before they start writing the code, in order to have a clear idea of what they want to achieve. Just like a roadmap: they plan the solution, write the comments, and then, they do the coding between the comments. It helps a lot if you have to finish the other half the following Monday.

![TODO comments and the Task List](https://blog.devsense.com/bl-content/uploads/pages/autosave-06b42e810e999309cff584856870b4cd/todo-comments.png)
> *TIP: You can list all your TODOs in one place with the help of a PHP editor. You'll never forget important things left unfinished again.*

Commenting is good even for your future self, because you might think that after spending so many hours creating the code, it's tattooed on the mind and you'll never forget it. Oh, but you will! After a few months, you won't remember why you wrote what you wrote, and the code it's so complicated to understand that it's just easier to erase everything and start all over again.

---

## What are good comments?

##### Good comments:

- Give useful information
- Explain why the code looks the way it does
- Never contradict the code itself
- Must be updated

##### Some examples of good comments:

-	Commenting tricky code and the reasons behind it
-	Commenting bug fixes with a link to the issue on GitHub
-	Commenting to-do items
-	Documentary comments (PHPDoc)

##### Examples of bad comments:

-	Commenting every line of your code
-	Commenting the obvious
-	Commenting what the code is doing
-	Commenting something contradictory to the code
-	Commenting something rude to another developer 


![Commenting code fragments](https://blog.devsense.com/bl-content/uploads/pages/autosave-06b42e810e999309cff584856870b4cd/maybe-bad-comment.png)
> *Some comments may look like explanatory and necessary, but in fact, if you have to comment something, you might take it as a clue to move that logical code fragment into a self-explaining function.*

---

## Recommendations 

Comments should be just [clarifications](https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83), describing the logic behind the solution. In general terms:

1. **Try to write descriptive code**, code that is simple and easy to understand. Make the names of your variables, methods and functions more descriptive. Whenever you feel you're writing a piece of code that needs explanation, or it's weird somehow, try to come up with a better solution, rename that variable or that function in a more descriptive way, so you don't have to explain yourself in a comment. Check this video on easy [self-documenting practices](https://www.youtube.com/watch?v=2-KBQsTo8AY). 

2. **Less is more**. Don't fully abandon comments, but also never over-use them. You shouldn't be writing a comment in every single line of your code, but probably, the larger, the more unusual or more complicated your code is, the more you'll need to comment it. The trick is to only explain it when it's not obvious or intuitive. Or you can try the smart strategy of [writing the code as if comments didn’t exist](https://blog.codinghorror.com/coding-without-comments/).

3. **Comment less, but wiser**. Well-placed comments can be very helpful. Comment your code at the top of the script- explaining what the purpose of the script is, who wrote it and when- and inline ONLY when the section is unusual or complicated. You can also choose to comment above every function to separate your program into blocks. Check this summary for beginners on [How to comment your code in PHP](https://www.wikihow.com/Comment-in-PHP).

4. **Comment the “why”, not the “what”**. What the code does might be obvious just by looking at it, but *why* you used certain method, might not be. If you chose an unusual solution, you should explain why you used it. Since the “why” is in your head, it may be more useful to programmers maintaining you the code to see it written in a comment, then the “what” that is already written in the code.

5. Always remember to **update or remove comments when you’re updating the code**. Badly maintained comments are worse than no comments -they will mislead future readers and, frankly, they are plain useless.

---

Sometimes comments in your code might be necessary, but as I said before, think of comments just like clarifications. You don't need to clarify every line, every function and every method, just the parts that could be difficult to understand. And while you're at it, don't just state what the function does, add a bit of context explaining why the code is there or why you used that particular solution. The programmer that reviews your code –and that could easily be your future self- will thank you.

**Notes:**
>> *Code samples were borrowed from WordPress' source code. Screenshots come from PHP Tools for Visual Studio.*