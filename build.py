import os
import shutil

files = ['js/animate.js', 'css/index.css']
directories = ['assets/']
dst = 'build/'

for directory in directories:
    try:
        new_files = os.listdir(directory)
        files.extend( map(lambda file: directory + file, new_files) )
    except Exception as e:
        print str(e)
        print "Error: Something went wrong in this directory: '%s'" %directory

print "Building %s file(s) ..." %str(len(files))
for file in files:
    try:
        if not os.path.isfile(file):
            os.makedirs(file)
        print "Building %s ..." %file
        shutil.copy(file, dst)
    except Exception as e:
        print str(e)
        print "Error: Cannot finish building %s" %file

print "Finish building %s file(s)" %str(len(files))