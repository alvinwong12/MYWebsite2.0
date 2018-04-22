import os
import shutil

files = ['js/animate.js']
dst = 'build/'

print "Building %s file(s) ..." %str(len(files))
for file in files:
    try:
        if not os.path.isfile(file):
            os.makedirs(file)
        print "Building %s ..." %file
        shutil.copy(file, dst)
    except Exception as e:
        print str(e)
        print "Cannot finish building %s" %file

print "Finish building %s file(s)" %str(len(files))