a = int(input())
s = input()
a = [int(s) for s in s.split()]
cnt=0

for x in range(len(a)-1):
    if a[x] >= 0 and a[x+1] >= 0 or a[x]<0 and a[x+1]<0:
        print("YES")
        break
else:
    print("NO")