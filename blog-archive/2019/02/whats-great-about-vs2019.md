/*
Title: What's great about Visual Studio 2019
Description: What's great about Visual Studio 2019
Template: blog
Author: Jakub Misek
Date: 2019/02/14
Tags: PHP
*/

The new Visual Studio 2019 is here, still as a preview but it already deserves our attention. It brings great innovations for first-time and older users, such as a simplified UI, improvements to installation, search and debugger, and also the new emphasis on collaboration, that promises to be more productive for teams. If you want to know more about what it has to offer, take a look at their article [here](https://docs.microsoft.com/en-us/visualstudio/ide/whats-new-visual-studio-2019?view=vs-2017). In this post, I would like to share my thoughts on the matter as a .NET/C# developer. 

![VS2019](img/vs2019.png)

## Speed

Yeah, we know, every new version is advertised as faster. But with 2019's release there are some major improvements inside. The most noticeable for me as an [extension author](https://www.devsense.com) and daily IDE user are the following. I think they are pretty interesting because they give us some useful patterns we can learn from. 

**Async:** Microsoft started to deprecate every API that is not asynchronous. I mean every API supposed for the extension developers like us. As a result, 3rd party extensions should not make your UI freeze for not even 50 milliseconds. It is a nice idea, sometimes unnecessary, but we understand that.

API's like providing tooltips, collecting code completion list or suggesting code actions are now asynchronous. Introducing such a change is a several step process, you cannot just remove some API and expect your entire ecosystem's developers to deal with it. 

 - their synchronous alternative is marked as [Obsolete] - so we all are notified it is not a good idea to use it anymore. Anyway, it is still there and we don't have to reimplement everything from scratch just to ship VS 2019 version of our existing extension. 

 - introducing async alternative of all the API. Internally it still can be used synchronously, but it gives time to developers to adapt to the new API while working on optimizations.

 - in a future version, removing the old synchronous API.

![obsolete](img/obsolete.png)

Sometimes your synchronous method is much faster than the overhead of calling something asynchronously. In that case, you either don't care and pay for the additional allocation and indirection (hoping this will get optimized by .NET on a lower level) or you don't make the method asynchronous at all and just pretend it is (async methods return ITask<T> object, and inside it is some kind of state machine allowing scheduler to run portions of your method on different threads and discontinuously. Returning Task.FromResult<T> instance from your async method lets you to not create the state machine thing while still providing ITask object. This might be unnecessary in the future if the compiler recognizes you don't need async, but that's out of topic). 

**Command Chain:** this is how it has been working in Visual Studio for ages - there is still an old mechanism combining lots of COM, OLE and the IOleCommandTarget interface. An instance of this interface handles commands - any command - menus, shortcuts, even key presses - and it is attached to your code editor window, for example. What's worst? Every extension that wants to handle its own command or hook to an existing command creates its own IOleCommandTarget where it handles its stuff and CHAINS IT with the IOleCommandTarget that was there before.

As a result, there is a linked list of usually hundreds of IOleCommandTarget instances getting invoked every time you press a key. Just because an extension wants to handle right mouse click, for example. Insane. 

With Roslyn (https://github.com/dotnet/roslyn - the new shiny framework for language compilers and IDE integrations) and the new VS, there is a new concept of command handling that is used across all the Microsoft's extensions. And it is fast. 

It is based on generics, JIT optimizations and MEF.

For every high-performance command like typing a character, there is a corresponding class declaration with the command's arguments. In case of typing a character command there is class TypeCharCommandArgs with the property "char TypedChar { get; }" (https://source.roslyn.io/#Microsoft.CodeAnalysis.EditorFeatures/Commands/TypeCharCommandArgs.cs) .  

Then, we have an interface ICommandHandler<T> where T is the command's arguments class (like TypeCharCommandArgs). Extension developer exports (as MEF component) his implementation of ICommandHandler<TypeCharCommandArgs> handling the actual command. 

Visual Studio's default implementation of the old IOleCommandTarget knows the command's arguments class (like TypeCharCommandArgs). It once statically and lazily imports (through MEF) all the implementations of ICommandHandler<TypeCharCommandArgs> and its instances are remembered in a list. 

When the user types a character (invokes a command), VS now grabs the list of all ICommandHandler<TypeCharCommandArgs> (and nothing else) and invokes just them. 

Benefits? Less JITtering (most of the command handlers are not used and they won't have to be jittered), code modularization (your code will look nicer than having huge SWITCH with all the commands), and finally, speed (overhead of invocation of all the command handlers just to find the one that handles command XYZ is gone). 

This mechanism is there since the Roslyn compiler came to Visual Studio (roughly circa 2015) but now it gets used by more and more Microsoft's editors (including the new HTML/ASP/Razor/JS editors) and now even PHP/Twig/Smarty/Blade as well! It's a great idea and it's really noticeable in the user's experience. 

**Startup:** even Visual Studio startup is making its progress to be fully asynchronous. At least it forces developers to either make their package (the thing that represents your extension's services) asynchronous or do not hook into the Visual Studio startup at all. When you're developing something heavily integrated, you need some actions to be performed at startup. Now you have to do it asynchronously, which is good. What’s not good is that your services must be provided asynchronously as well, and that requires you to redesign your package initialization. Just noting it might cause issues (changing single threaded code that runs on UI thread to something asynchronous is a straightforward task mainly because most of VS API has to be called on UI thread anyway...) 

## Memory

Yes, Visual Studio 2019 is still a 32bit process and will always be. The reason is that it's so big and complex, full of old COM and 32bit native components. However, the editor gets smarter and needs more and more memory, while being limited with 32bit memory address space. 

Microsoft is well aware of this. So, they are pushing more and more stuff out of process, implementing more features through language server protocol if possible. Sometimes it's not that easy because you have to share big data structures across processes and serialization is not a good way to go. If you are interested, think about sharing a native memory across processes. Another trick is to use some Win32 API's to allocate a shared memory on heap and putting not used objects in there - they don't take your precious address space and you have them at hand when needed. 

Anyway, memory consumption has been reduced in general, yay! 

## Errors

Sometimes, an extension causes some serious performance or stability issues and you get blamed for that. Nobody wants their extension developers to ruin their good name. In Visual Studio 2019, extensions are well monitored, and in case they cause the performance overhead or the startup time overhead, it is nicely reported. There is even an option to disable crashing or slow extensions right from the VS IDE. Finally, extension developers will care more about performance, and users have a great tool of monitoring their precious work tool. 

## Conclusion

These are just some thoughts on the new VS 2019 internals and what we deal with as extension developers. I personally like to watch how it evolves, because it fosters learning and creativity in my personal projects. Visual Studio 2019 is an exceptional piece of software full of great ideas, providing a fast development environment.

So, if you like PHP coding with Visual Studio, you can try [PHP Tools](https://www.devsense.com/features) - seamless yet powerful, and fully compatible with Visual Studio 2019 and all its new features, just what you need to build a strong PHP application. 