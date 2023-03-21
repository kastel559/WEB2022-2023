a = int(input())
b = int(input())
s = 0

for x in range(a, b+1):
    for i in range(x):
        if i*i == x:
            print(x, end=' ')
            
