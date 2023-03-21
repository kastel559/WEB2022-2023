a = int(input())
s=input()
a=[int(s) for s in s.split()]

for x in a:
    if x%2 == 0:
        print(x, end=" ")
        

