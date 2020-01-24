---
title: Background and Ambitions
due_date: &deadline 2020-02-06
goals:
  - Learn to work with plain text and do basic HTML and CSS source-formatting
  - Learn to name files for the web
  - Learn to organize files in a Git repository
  - Learn to share your work via GitHub
  - Learn some basics of HTML and CSS
  - Create a mobile-friendly, mobile-first design
requirements:
  - >
    All source files in UTF-8/Unicode character encoding with Unix-style line endings (LF), entabbed
    with spaces (two spaces per level of indent)
  - Valid, well-formed HTML5 and CSS
  - HTML-based fallbacks for any media elements (image, audio, video) that you include
  - Organized, readable source that is hand-written and original (no WYSIWYGs or code-generators)
  - >
    A Git repository with frequent commits and meaningful commit messages that accurately reflect
    each set of changes that you make
  - Your Git repository must contain **only** the files and commits from this project
deliverables:
  - action: Post draft project-repository GitHub link to Basecamp.
    description: >
      Create a new message thread with your name and Project One, something like “Scarlet Hawk:
      Project One.” Include in your post a few questions for peer and instructor feedback.
    deadline: 2020-01-30
  - action: Respond with helpful feedback to at least 3 other student projects on Basecamp.
    deadline: 2020-02-02
  - action: Email instructor with final project deliverables.
    description: "The email should contain:"
    details:
      - The https:// link to your project’s GitHub repository
      - A 4-5 sentence self-critique of your project and your progress in class to this point
    deadline: *deadline
---

You will write three to four paragraphs about your background as well as your ambitions for this
class and your career at IIT and beyond. Begin by writing this in either simple plain text (`.txt`)
or Markdown (`.md`) in your text-editor of choice. Be sure to make frequent, descriptive commits in
Git as you write.

Once you have finished your plain-text version, use `git tag` to tag it as `plain-text`. You will
then create a basic structured HTML page out of your plain-text work (revision to your content is
encouraged), styled with a separate, basic stylesheet in CSS that is linked to your HTML via the
`<link>` tag. Commit this also to Git as you write.
