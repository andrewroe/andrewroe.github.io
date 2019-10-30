# andrewroe.github.io
So the URL for this project is - https://github.com/andrewroe/andrewroe.github.io

Creat the Sandbox on my local host using -
cd ~andrewroe/Documents/Sandboxes
git clone https://github.com/andrewroe/andrewroe.github.io

This created sub-dir andrewroe.github.io within my current directory, e.g. ~andrewroe/Documents/Sandboxes/andrewroe.github.io

Next I edited this file, README.md adding comments about my steps for making changes within my "sandbox" to modify that github repository. (I use vi, but any editor should work = maybe sublime is better.)

After some changes, I want to update the "repo" to reflect those changes. It is good practive to first merge my version with what is in the "repo", least someone else (or mabye me) has modifed this file.
So -
cd andrewroe.github.io
and then
git pull https://github.com/andrewroe/andrewroe.github.io
From https://github.com/andrewroe/andrewroe.github.io
 * branch            HEAD       -> FETCH_HEAD
Already up to date.

We see that it is up to date, just as expected. :-),

Now check what differences my copy of the "repo" are relative to the master, e.g.

git diff
diff --git a/README.md b/README.md
index 39a4209..c325792 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,21 @@
-# andrewroe.github.io
\ No newline at end of file
+# andrewroe.github.io
+So the URL for this project is - https://github.com/andrewroe/andrewroe.github.io
+
. . . etc. . .
+
+We see that it is up to date, just as expected. :-),
Andrews-iMac:andrewroe.github.io andrewroe$

(notice I've left the prompt portion above. I'll here down I'm going to copy & paste much less of the detail)

to stage the changes in my local repo -
git add .

to then commit them to my local copy of the repo -
git commit -m "updating README.md with notes of steps taken to utilize github."

after doing this, I did a sanity check of -

git pull origin master
From https://github.com/andrewroe/andrewroe.github.io
 * branch            master     -> FETCH_HEAD
Already up to date.

But to update this repo on github, one needs to push them there -
e.g.
git push
Username for 'https://github.com': andrewroe
Password for 'https://andrewroe@github.com': 
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.62 KiB | 1.62 MiB/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/andrewroe/andrewroe.github.io
   984abc4..f504145  master -> master

------------------------------------------------------------------------------------
In summary, the commands were:
cd ~andrewroe/Documents/Sandboxes
git clone https://github.com/andrewroe/andrewroe.github.io
pushd andrewroe.github.io/  (I use pushd rather than cd)
edit changes to file(s)
git pull https://github.com/andrewroe/andrewroe.github.io
git diff
 or
git diff .
git add .
git commit -m "updating README.md with notes of steps taken to utilize github."
git push
git pull origin master
------------------------------------------------------------------------------------

