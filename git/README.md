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
It's like git stash pop, except it does not remove it from the stash. (Maybe you need to apply it in multiple branches)