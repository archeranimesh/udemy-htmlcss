#! /Users/arunab/anaconda3/bin/python
import sys
import os

readme_file_name = "ReadMe.md"
chapter_no = "Section_"


if __name__ == '__main__':
    print("Hello World")
    program_name = sys.argv[0]
    arguments = sys.argv[1:]

    if len(sys.argv[1:]) > 2:
        print("Please pass only two  argument to the program. ", len(sys.argv[1:]))
        sys.exit(1)

    number = int(arguments[0])
    if number < 10:
        number = "0"+str(number)
    number = str(number)

    chapter_no += number

    chapter_name = arguments[1]
    chapter_name = chapter_name.title().replace(" ", "-")

    dir_to_create = chapter_no +"-" + chapter_name
    print("progam name: ", program_name, " arguments: ", arguments)
    print("dir_to_create: ", dir_to_create)
    try:
        os.makedirs('DOCS/'+dir_to_create)
        os.makedirs('SRC/'+ dir_to_create)
        os.chdir('DOCS/'+dir_to_create)
        os.system('touch ReadMe.md')
    except FileExistsError:
        print("The directory already exist")


