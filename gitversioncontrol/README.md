## Detached head
Normally HEAD points to a branch pointer, which points to the tip of a branch. When you are in detached head state, it means that HEAD is now pointing to a specific commit, rather than the branch pointer. So, if you `cat .git/HEAD`, you'll see the hash of a commit, rather than something like `refs/heads/master`. You can simply `git switch master` to reattach HEAD to the master branch.

## Setup

`git config user.email <email_address>`

`ssh-keygen -t ed25519 -C "myemail@email.com"`

_Add the public key to github_

## git branch

#### `git branch`
Lists branches

#### `git branch <new branch name>`
Creates new branch, does not switch to it

#### `git branch -D <branch name>`
Will delete a branch. Must not be on the branch. (Lowercase d requires branch to be merged first)

#### `git branch -m <new branch name>`
Will rename a branch. Must be on the branch.

## git switch

#### `git switch <branch name>`
Switch to different branch, similar to `git checkout`

#### `git switch -c <branch name>`
Create a new branch AND switch to it. Similar to `git checkout -b`

## git log

#### `git log --oneline`
Git log with pretty print

## git commit

#### `git commit -m "Message"`
Don't trust the -a flag, it doesn't work.

## git merge

#### `git merge <other branch name>`
To merge _feature_ into _master_, switch to _master_. Then `git merge feature`.
* If a merge conflict then `<<<<< HEAD` refers to destination branch (the branch you're on, trying to merge into). So, that's probably someone else's changes.

## git diff

#### `git diff`
Lists all UNSTAGED changes in working directory. (If you git add ., then there will be no diff). Keep in mind that *new* files are not yet tracked, so will not show up.

#### `git diff HEAD`
Lists all changes since latest commit of HEAD. (Even staged changes from git add)

## git stash

#### `git stash`
Stores and reverts all staged and unstaged (uncommitted) changes. Same as `git stash save`.

#### `git stash pop`
Restores stashed changed to current branch (does not need to be same branch that you stashed them). If this creates a merge conflict, then `<<<<< Updated upstream / Current Chance` refers to what's currently on the branch, and `<<<<< Incoming change` refers to what you stashed and are trying to apply.

#### `git stash apply`
It's like git stash pop, except it does not remove it from the stash. (Maybe you need to apply it in multiple branches). If you have multiple stashes, choose one by using it's number `git stash apply stash@{2}`

#### `git stash list`
Show everything you have stashed. (So you can see the stash-id's)

#### `git stash drop <stash-id>`
To delete a stash (`git stash drop stash@{2}`)

#### `git stash clear`
Deletes all items in the stash.

## git checkout

#### `git checkout <commit-id>`
Puts you in a detached head state and moves HEAD to a specific commit.

#### `git checkout HEAD~1`
Checkout the commit that is one before the latest. (or HEAD~2, etc.)

#### `git checkout HEAD <filename(s)>`
This will reset a particular file to the last commit. (So if you had a bunch of changes you didn't want anymore, undo all changes). There is a shorter syntax, just use `git checkout -- <filename(s)>` and you don't have to type HEAD.

## git reset

_Undoes changes by deleting history as if it never happened._

#### `git reset <commit hash>`
Soft reset. Similar to `git revert`. Resets a branch back to an earlier commit. Even though the commits will be gone, the changes will still be unstaged in your working directory (the files will not be reset). You'll lose the commits, but keep the work. You can then `git switch -c new_branch` to move those changes somewhere else. Actually moves the branch pointer backwards, eliminating the commits.

#### `git reset --hard <commit hash>`
Hard reset. Similar to `git revert`. This will remove the commits back to the commit hash and it will delete all changes after that point too. It's like you never worked after that commit. Actually moves the branch pointer backwards, eliminating the commits.

## git restore

_Resets a file back to a specific point in history._

#### `git restore <filename>`
If you make changes to a file, but want to revert it back to the last commit in HEAD.

#### `git restore --source <commit hash> <filename>`
This will revert a file back to how it was in the given commit hash.

#### `git restore --staged <filename>`
This will unstage a file that you've staged using `git add`. It's the opposite of `git add`. You won't lose your changes, they just won't be staged anymore.

## git revert

_Undoes changes by "uncoding" them in a new commit._

#### `git revert <commit hash>`
Similar to `git reset`, except it creates a new commit which reverses the changes back to a commit.

## git remote

#### `git remote -v`
Lists the remotes for the current project that you are cd'd into.

#### `git remote add <name> <url>`
Sets the remote for the current repository. Example: When you create a new git repo on github, then on your machine you `git remote add origin <the_github_url.git>`.

#### `git remote rename <oldname> <newname>`
Rename a remote on your machine.

#### `git remote remove <remotename>`
Deletes a remote from your machine.

## git push

#### `git push <remote_name> <branch>`
Example: `git push origin master`. Defaults to _origin_ and the current branch if you only use `git push`.