a = int(input())
sum=0
pow = 0
for x in str(a)[::-1]:
    sum+=int(x) * 2 ** pow
    pow +=1

print(sum) 
