# react-lesson-app

## Getting Started

### Setting up Node

1. Install "Node Version Manager" (nvm). This tool allows you to install and manage multiple Node versions in your device.
2. Once installed, test whether it's working by running the command "nvm" in a command terminal.
3. Once verified, run "nvm install 23.3.0" to install the version of Node this project was created.
4. Once the installation is completed, run "nvm use 23.3.0" to use the installed Node version (will be prompted once the installation is completed)

### Setting up the project
1. Clone the project into your computer.
    - Get the repository link (HTTPS (will prompt for email and password when cloning in terminal) / SSH (you need to setup the ssh key for your account)).

    ![Repo Link](./src/assets/setupGuide/image.png)

    - use `git clone <link>` to copy the repository

2. Once cloned, run `npm install` to add the needed dependencies before running the project

3. Use `git checkout -b <branch_name>` before starting work.
    - `git checkout -b <branch_name>` is the equivalent of running `git branch <branch_name>` and then `git checkout <branch_name>`. The command will create the new branch and check you out the new branch on the same go.
    - You can verify your current working branch here in your IDE (VSCode)

    ![Working Branch Indicator](./src/assets/setupGuide/image-1.png)

4. Run `npm start` and continue working on your assigned tasks.

### GIT Cheat Sheet

1. `git add .` - Stage all files with changes for commit

2. `git commit -m "message"` - Commits all changed files to be pushed into the remote repository

3. `git push` - Push all committed changes to remote repository
    - `git push --set-up origin <branch>` - If the branch was created in the local repository, GIT will prompt you to run this command. This command will automatically create the branch in your remote repository before pushing the changes.

4. `git checkout <branch_name>` - Allows you to change between branches available to you

5. `git branch <branch_name>` - Allows you to create a new branch with a preferred name 

6. `git checkout -b <branch_name>` - Executes commands 5 -> 4 in this order in the same go (use when creating a new branch ONLY!!)

7. `git pull` - Updates local branch with latest changes from remote repository

8. `git pull origin <branch_name>` - Updates local branch with latest changes from the referred branch in remote repository

9. Initial process (Creating a blank repository + add new a fresh React.JS project)
    1. `git clone <repo-url>`
    2. After opening VSCode in cloned repository,  `npx create-react-app .`
    3. `git add .` - Preps all changes files for commit, can cherry pick and send files in blocks if preferred through the IDE
    4. `git commit -m "initial commit"`
    5. `git push`

10. Step 2
    1. `git branch branch_1` -> `git checkout branch_1` OR `git checkout -b branch_1`
    2. Stage and commit changes (`git add .` or cherry pick, then `git commit -m "any message"`)
    3. `git push --set-up origin branch_1` - Sets up the new branch in remote repository, MUST for initial commit from a new branch, 
    4. `git push` for later commits
    
Happy Hacking!