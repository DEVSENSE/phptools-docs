/*
Title: Spell Checking
Description: Ensure that your source code, including strings and comments, is spelt correctly.
*/

# Spell Checking

There are several Visual Studio extensions that support PHP Tools for Visual Studio. They make sure that your source code, including strings and comments, is spelt correctly.

For this purpose, we recommend to install VSSpellChecker, which can be downloaded from Visual Studio gallery https://visualstudiogallery.msdn.microsoft.com/a23de100-31a1-405c-b4b7-d6be40c3dfff. Make sure you install at least version **2016.5.28.0**, which is the first version to support PHP Tools for Visual Studio.

## Fix a typo

 When a misspelled word is detected, VSSpellChecker highlights the word and a smart tag is displayed with a set of possible corrections. You can accept some of those and the word will be automatically corrected. Or you can choose **Ignore Once** to ignore the word for this occurrence only, **Ignore All** to ignore it for all occurrences or **Add to Dictionary**. The extension then stops reporting the word.

 ![Fix a typo](imgs/fix-a-typo.png)

## Change dictionary

  The extension comes with different dictionaries for the main languages. You can change the dictionary in `Tools | Spell Checker | Edit Global Configuration`, In **Global Dictionary** section, choose the language you want and click **Add**. Press <kbd>Ctrl + S</kbd>, to save the configuration. Then you may need to reopen files so that the changed configuration takes effect.

## More information

  Detailed information about VSSpellChecker can be found on [https://github.com/EWSoftware/VSSpellChecker/wiki](https://github.com/EWSoftware/VSSpellChecker/wiki).