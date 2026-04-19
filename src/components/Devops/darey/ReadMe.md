# PROJECT INSTRUCTIONS - Linux Basic Commands

## Overview

This project introduces you to basic Linux commands. You will learn to create directories and files using `mkdir`, `echo`, and `cat`.

**Total Points: 100**  
**Pass Threshold: 70 points**

---

## IMPORTANT NOTES - READ THIS FIRST

### Commands NOT Graded (Practice Only)
The following commands are for practice and navigation only - they help you learn but are **NOT graded**:
- `pwd` - Print working directory
- `ls` - List files
- `ls -a` - List all files (including hidden)
- `ls -al` - List all files with details

**You can use these commands freely for practice, but they will not affect your score.**

### What IS Graded
Only the three specific tasks listed below are graded. Focus on completing those tasks correctly.

---

## TASK 1: Create practice directory (40 points)

### Requirement:
Create a directory named 'practice' in your home directory.

- **Directory path:** `/home/labuser/practice`
- **Command to use:** `mkdir -p /home/labuser/practice`

### Evaluation:
The evaluator will verify that the directory exists at the specified path.  
**This task is worth 40 points.**

---

## TASK 2: Create test.txt file with content (30 points)

### Requirement:
Create a text file named 'test.txt' inside the 'practice' directory and write "hello world" into it.

- **File path:** `/home/labuser/practice/test.txt`
- **Content:** "hello world" (exact match, no extra spaces)
- **Command to use:** `echo 'hello world' > /home/labuser/practice/test.txt`

### Evaluation:
The evaluator will verify that:
- The file exists at the specified path
- The file contains "hello world" text

**This task is worth 30 points.**

**Important:** Use `echo 'hello world' > /home/labuser/practice/test.txt` to create and write to the file. Make sure there are no extra spaces.

---

## TASK 3: Verify file content (30 points)

### Requirement:
Ensure the 'test.txt' file contains exactly "hello world".

- **File path:** `/home/labuser/practice/test.txt`
- **Content:** "hello world" (exact match, no extra spaces or characters)
- **Command to verify:** `cat /home/labuser/practice/test.txt`

### Evaluation:
The evaluator will verify that the file contains exactly 'hello world' text (no extra spaces or characters).  
**This task is worth 30 points.**

**Tip:** You can use `cat /home/labuser/practice/test.txt` to view its contents and verify before submission.

---

## GRADING SUMMARY

### Total Points: 100
### Pass Threshold: 70 points

### What the Evaluator Will Verify:
1. **Directory creation:** That the practice directory exists at `/home/labuser/practice` (40 points)
2. **File creation:** That the test file exists at `/home/labuser/practice/test.txt` (30 points)
3. **File content:** That the test file contains 'hello world' text (30 points)

### Important Notes:
- **The commands `pwd`, `ls`, `ls -a`, and `ls -al` are for practice only - they help you learn but are NOT graded.**
- Focus on completing the active tasks: creating the directory and file with the correct content.
- For the test file: Use `echo 'hello world' > /home/labuser/practice/test.txt` to create and write to the file, then use `cat /home/labuser/practice/test.txt` to view its contents.
- Remember: `echo` creates/writes files, `cat` displays/view files.
- Make sure the file contains exactly 'hello world' (no extra spaces or characters) for the content check to pass.

---

## Getting Started

1. Use `pwd` to see your current location (practice only, not graded)
2. Use `ls` or `ls -a` to explore directories (practice only, not graded)
3. Create the practice directory: `mkdir -p /home/labuser/practice`
4. Create and write to the test file: `echo 'hello world' > /home/labuser/practice/test.txt`
5. Verify the file content: `cat /home/labuser/practice/test.txt`
6. Submit when you have completed all three tasks

Good luck!
