if __name__ == '__main__':
    N = int(input())
    
    list = []
    for i in range(N):
        splitted = input().split(" ")
        command = splitted[0]
        if command == "insert":
            list.insert(int(splitted[1]), int(splitted[2]))
        elif command == "remove":
            list.remove(int(splitted[1]))
        elif command == "append":
            list.append(int(splitted[1]))
        elif command == "pop":
            list.pop()
        elif command == "reverse":
            list.reverse()
        elif command == "sort":
            list.sort()
        elif command == "print":
            print(list)
        else:
            print("ERROR!")