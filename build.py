import os
import shutil
import sys

# used to build all other files not involving react
# to be ran before before webpack generation but ran after all non-react file generations

files = ['js/animate.js', 'css/index.css']
directories = ['assets/']
dst = 'build/'
build_success = True

# clean build folder
print "Cleaning build folder..."
built_files = os.listdir(dst)
for file in built_files:
    try:
        os.remove(os.path.join(dst, file))
    except Exception as e:
        print str(e)
        build_success = False

print "Finished cleaning build folder"

for directory in directories:
    try:
        new_files = os.listdir(directory)
        files.extend( map(lambda file: directory + file, new_files) )
    except Exception as e:
        print str(e)
        print "Error: Something went wrong in this directory: '%s'" %directory
        build_success = False

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
        build_success = False
        
if build_success:
    print "Finish building %s file(s)" %str(len(files))
    sys.exit(0)
else:
    sys.exit("Build not complete due to errors")