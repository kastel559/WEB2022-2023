a = int(input())
s=input()
a=[int(s) for s in s.split()]
for i in range(0, len(a)):
    if i%2==0:
        print(a[i], end=' ')
