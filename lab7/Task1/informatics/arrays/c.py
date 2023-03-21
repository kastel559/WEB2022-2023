a = int(input())
s= input()
a = [int(s) for s in s.split()]
cnt=0
for x in a:
    if x>=0: cnt+=1
print(cnt)