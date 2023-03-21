a = int(input())
s = input()
a = [int(s) for s in s.split()]
cnt=0

for x in range(len(a)-1):
    if a[x] < a[x+1]: cnt+=1

print(cnt)