#### `git branch`
Lists branches

#### `git branch <new branch name>`
Creates new branch, does not switch to it

#### `git branch -D <branch name>`
Will delete a branch. Must not be on the branch. (Lowercase d requires branch to be merged first)

#### `git branch -m <new branch name>`
Will rename a branch. Must be on the branch.

#### `git switch <branch name>`
Switch to different branch, similar to `git checkout`

#### `git switch -c <branch name>`
Create a new branch AND switch to it

#### `git log --oneline`
Git log with pretty print

#### `git commit -a -m "Message"`
git add and git commit in one