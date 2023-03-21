b = int(input())
i = input()
a = [int(i) for i in i.split()]

for x in range(len(a)//2):
    f = a[x]
    a[x] = a[len(a) - 1 - x]
    a[len(a) - 1 - x] = f

for k in a:
    print(k, end=" ")